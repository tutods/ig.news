import { StyledButton } from "components/ui/buttons/GithubButton/styles";
import Icon from "components/ui/icons/Icon";
import { useState } from "react";

const GithubButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleUserLogin = () => {
    setIsUserLoggedIn((prevState) => !prevState);
  };

  return (
    <StyledButton onClick={handleUserLogin}>
      <Icon
        name={"github"}
        color={isUserLoggedIn ? "green" : "yellow"}
        size={"lg"}
      />
      {isUserLoggedIn ? "Daniel Sousa @TutoDS" : "Sign in with GitHub"}
      {isUserLoggedIn && (
        <Icon name={"close"} size={"lg"} css={{ fill: "#737380" }} />
      )}
    </StyledButton>
  );
};

export { GithubButton };