import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { envConfig } from '~/config/env.config';
import { fauna } from '~/services/fauna';
import { stripe } from '~/services/stripe';

type User = {
	ref: {
		id: string;
	};
	data: {
		stripe_customer_id: string;
	};
};

// eslint-disable-next-line consistent-return
const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		url: { success, cancel },
		priceKey
	} = envConfig.stripe;

	const session = await getSession({ req });

	if (req.method === 'POST' && session?.user?.email) {
		const user = await fauna.query<User>(
			q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session?.user?.email)))
		);

		let customerId = user.data.stripe_customer_id;

		if (!customerId) {
			const stripeCustomer = await stripe.customers.create({
				email: session?.user?.email
			});

			await fauna.query(
				q.Update(q.Ref(q.Collection('users'), user.ref.id), {
					data: {
						stripe_customer_id: stripeCustomer.id
					}
				})
			);

			customerId = stripeCustomer.id;
		}

		const checkoutSession = await stripe.checkout.sessions.create({
			customer: customerId,
			payment_method_types: ['card'],
			billing_address_collection: 'required',
			mode: 'subscription',
			line_items: [
				{
					price: priceKey,
					quantity: 1
				}
			],
			allow_promotion_codes: true,
			success_url: success,
			cancel_url: cancel
		});

		return res.status(200).json({ sessionId: checkoutSession.id });
	}
	res.setHeader('Allow', 'POST').status(405).end('Method Not Allowed');
};

export default subscribe;
