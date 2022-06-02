import { envConfig } from 'config/env.config';
import { Client } from 'faunadb';

const fauna = new Client({
	secret: envConfig.db.secret,
});

export { fauna };
