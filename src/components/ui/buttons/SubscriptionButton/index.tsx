import { StyledButton } from "components/ui/buttons/SubscriptionButton/styles";

type Props = {
  priceId: string;
};

const SubscriptionButton = ({ priceId }: Props) => {
  return <StyledButton>Subscribe Now</StyledButton>;
};

export { SubscriptionButton };