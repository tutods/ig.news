import { envConfig } from '~/config/env.config';
import { Stripe } from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import { stripe } from '~/services/stripe';
import { saveSubscription } from './_lib/manageSubscription';

const buffer = async (readable: Readable) => {
	const chunks = [];

	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
	}

	return Buffer.concat(chunks);
};

export const config = {
	api: {
		bodyParser: false,
	},
};

const relevantEvents = new Set([
	'checkout.session.completed',
	'customer.subscription.updated',
	'customer.subscription.deleted',
]);

const webhooks = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const buff = await buffer(req);
		const secret = req.headers['stripe-signature'];

		let event: Stripe.Event;

		try {
			event = stripe.webhooks.constructEvent(
				buff,
				secret!,
				envConfig.stripe.webhookSecret
			);
		} catch (err: any) {
			return res.status(400).json({ error: err.message });
		}

		const { type } = event;

		if (relevantEvents.has(type)) {
			try {
				switch (type) {
					case 'customer.subscription.updated':
					case 'customer.subscription.deleted':
						const { id, customer } = event.data
							.object as Stripe.Subscription;

						await saveSubscription(id, customer?.toString()!);

						break;

					case 'checkout.session.completed':
						const {
							subscription: checkoutSubscription,
							customer: checkoutCustomer,
						} = event.data.object as Stripe.Checkout.Session;

						await saveSubscription(
							checkoutSubscription?.toString()!,
							checkoutCustomer?.toString()!,
							true
						);

						break;

					default:
						throw new Error('Unhandled event type');
				}
			} catch (error: any) {
				return res.status(400).json({
					error: error.message || 'Webhook handler failed.',
				});
			}
		}

		res.json({ received: true });
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};

export default webhooks;
