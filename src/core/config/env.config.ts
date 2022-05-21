import { EnvConfigType } from "core/@types/EnvConfig";

const envConfig: EnvConfigType = {
  stripe: {
    key: process.env.STRIPE_KEY!,
    secret: process.env.STRIPE_SECRET_KEY!,
    priceKey: process.env.PRICE_KEY!,
  },
};

export { envConfig };