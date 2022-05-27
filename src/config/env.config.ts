import { EnvConfigType } from "@types/EnvConfig";

const envConfig: EnvConfigType = {
  stripe: {
    key: process.env.STRIPE_KEY!,
    secret: process.env.STRIPE_SECRET_KEY!,
    priceKey: process.env.PRICE_KEY!,
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET!,
    github: {
      id: process.env.GITHUB_ID!,
      secret: process.env.GITHUB_SECRET!,
    },
  },
};

export {envConfig};