import { signIn, signOut, useSession } from 'next-auth/react';

import Icon from '~/components/icons/Icon';

import { StyledButton } from '~/components/ui/buttons/GithubButton/styles';

const GithubButton = () => {
	const { data: session } = useSession();

	const handleSession = () => {
		if (!session) {
			signIn('github');
		} else {
			signOut();
		}
	};

	return (
		<StyledButton onClick={handleSession}>
			<Icon name={'github'} color={session ? 'green' : 'yellow'} size={'lg'} />

			{session && session.user ? session.user.name : 'Sign in with Github'}

			{!!session && <Icon name={'close'} size={'lg'} css={{ fill: '$gray200' }} />}
		</StyledButton>
	);
};

export { GithubButton };
