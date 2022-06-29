type EnvConfigType = {
	stripe: {
		key: string;
		secret: string;
		priceKey: string;
		webhookSecret: string;
		url: {
			success: string;
			cancel: string;
		};
	};
	auth: {
		secret: string;
		github: {
			id: string;
			secret: string;
		};
	};
	db: {
		secret: string;
	};
};

export { EnvConfigType };
