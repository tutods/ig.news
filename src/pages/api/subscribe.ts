import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "services/stripe";
import { envConfig } from "config/env.config";
import { getSession } from "next-auth/react";

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    url: { success, cancel },
  } = envConfig.stripe;

  if (req.method === "POST") {
    const session = await getSession({ req });

    const stripeCustomer = await stripe.customers.create({
      email: session?.user?.email!,
    });

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      mode: "subscription",
      line_items: [
        {
          price: envConfig.stripe.priceKey,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: success,
      cancel_url: cancel,
    });

    return res.status(200).json({ sessionId: checkoutSession.id });
  } else {
    res.setHeader("Allow", "POST").status(405).end("Method Not Allowed");
  }
};

export default subscribe;