import { Client } from 'faunadb';

import { envConfig } from '~/config/env.config';

const fauna = new Client({
	secret: envConfig.db.secret
});

export { fauna };
