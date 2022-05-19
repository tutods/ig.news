import { StyledButton } from "components/ui/buttons/GithubButton/styles";
import Icon from "components/ui/icons/Icon";

const GithubButton = () => {
  const isUserLoggedIn = false;

  return (
    <StyledButton>
      <Icon
        name={"github"}
        color={isUserLoggedIn ? "green" : "yellow"}
        size={"lg"}
      />
      Sign in with GitHub
      {isUserLoggedIn && (
        <Icon name={"close"} size={"lg"} css={{ fill: "#737380" }} />
      )}
    </StyledButton>
  );
};

export { GithubButton };