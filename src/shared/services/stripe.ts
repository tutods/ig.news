import { version } from "../../../package.json";
import Stripe from "stripe";
import { envConfig } from "core/config/env.config";

const stripe = new Stripe(envConfig.stripe.secret, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ig.news",
    version: version,
  },
});

export { stripe };