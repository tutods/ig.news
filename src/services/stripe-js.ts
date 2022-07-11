import { loadStripe } from '@stripe/stripe-js';

import { envConfig } from '~/config/env.config';

const getStripeJs = async () => {
	return loadStripe(`${envConfig.stripe.key}`);
};

export { getStripeJs };
