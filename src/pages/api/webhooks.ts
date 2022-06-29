import { envConfig } from 'config/env.config';
import { Stripe } from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';
import { stripe } from 'services/stripe';

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

const relevantEvents = new Set(['checkout.session.completed']);

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
			console.log(`Webhook received: ${type}`, event);
		}

		res.json({ received: true });
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};

export default webhooks;
