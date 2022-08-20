import * as prismic from '@prismicio/client';

import { envConfig } from '~/config/env.config';

const getPrismicClient = () => {
	const client = prismic.createClient('ignews-tutods', {
		accessToken: envConfig.prismic.token
	});

	return client;
};

export { getPrismicClient };
