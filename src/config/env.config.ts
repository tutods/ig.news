import { EnvConfigType } from '../@types/EnvConfig';

const envConfig: EnvConfigType = {
	stripe: {
		key: process.env.NEXT_PUBLIC_STRIPE_KEY!,
		secret: process.env.STRIPE_SECRET_KEY!,
		webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
		priceKey: process.env.PRICE_KEY!,
		url: {
			success: process.env.STRIPE_SUCCESS_URL || 'http://localhost:3000/',
			cancel: process.env.STRIPE_CANCEL_URL || 'http://localhost:3000/',
		},
	},
	auth: {
		secret: process.env.NEXTAUTH_SECRET!,
		github: {
			id: process.env.GITHUB_ID!,
			secret: process.env.GITHUB_SECRET!,
		},
	},
	db: {
		secret: process.env.FAUNA_SECRET!,
	},
};

export { envConfig };
