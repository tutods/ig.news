import { query as q } from 'faunadb';
import { fauna } from '~/services/fauna';
import { stripe } from '~/services/stripe';

const saveSubscription = async (
	subscriptionId: string,
	customerId: string,
	createAction: boolean = false
) => {
	const userRef = await fauna.query(
		q.Select(
			'ref',
			q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerId))
		)
	);

	const {
		id,
		status,
		items: { data },
	} = await stripe.subscriptions.retrieve(subscriptionId);

	if (createAction) {
		await fauna.query(
			q.Create('subscriptions', {
				data: {
					id,
					userId: userRef,
					status,
					price_id: data[0].price.id,
				},
			})
		);
	} else {
		await fauna.query(
			q.Replace(
				q.Select(
					'ref',
					q.Get(q.Match(q.Index('subscription_by_id'), id))
				),
				{
					data: {
						id,
						userId: userRef,
						status,
						price_id: data[0].price.id,
					},
				}
			)
		);
	}
};

export { saveSubscription };
