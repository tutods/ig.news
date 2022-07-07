import { StyledButton } from '~/components/ui/buttons/SubscriptionButton/styles';
import { signIn, useSession } from "next-auth/react";
import { api } from '~/services/api';
import { getStripeJs } from '~/services/stripe-js';

type Props = {
  priceId: string;
};

const SubscriptionButton = ({ priceId }: Props) => {
  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const {
        data: { sessionId },
      } = await api.post("/subscribe");

      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return <StyledButton onClick={handleSubscribe}>Subscribe Now</StyledButton>;
};

export { SubscriptionButton };