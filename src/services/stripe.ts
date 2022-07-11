import Stripe from 'stripe';

import { envConfig } from '~/config/env.config';
import myPackage from '../../package.json';

const stripe = new Stripe(envConfig.stripe.secret, {
	apiVersion: '2020-08-27',
	appInfo: {
		name: 'ig.news',
		version: myPackage.version
	}
});

export { stripe };
