import { StyledButton } from "components/ui/buttons/GithubButton/styles";
import Icon from "components/icons/Icon";
import { signIn, signOut, useSession } from "next-auth/react";

const GithubButton = () => {
  const { data: session } = useSession();

  const handleSession = () => {
    if (!session) {
      signIn("github");
    } else {
      signOut();
    }
  };

  return (
    <StyledButton onClick={handleSession}>
      <Icon
        name={"github"}
        color={!!session ? "green" : "yellow"}
        size={"lg"}
      />

      {session && session.user ? session.user.name : "Sign in with Github"}

      {!!session && (
        <Icon name={"close"} size={"lg"} css={{ fill: "#737380" }} />
      )}
    </StyledButton>
  );
};

export {GithubButton};