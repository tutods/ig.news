import { StyledButton } from "components/ui/buttons/GithubButton/styles";
import Icon from "components/icons/Icon";
import { signIn, signOut, useSession } from "next-auth/react";

const GithubButton = () => {
  const { data: session } = useSession();

  const handleUserLogin = () => {
    signIn("github");
  };

  return (
    <StyledButton onClick={handleUserLogin}>
      <Icon
        name={"github"}
        color={!!session ? "green" : "yellow"}
        size={"lg"}
      />

      {!!session && (
        <Icon
          onClick={signOut}
          name={"close"}
          size={"lg"}
          css={{ fill: "#737380" }}
        />
      )}
    </StyledButton>
  );
};

export { GithubButton };