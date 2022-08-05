import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { CSSProps } from '~/@types/CSS';
import { api } from '~/services/api';
import { getStripeJs } from '~/services/stripe-js';

import { StyledButton } from './styles';

type Props = CSSProps & {
	size?: 'inline' | 'block';
};

const SubscriptionButton = ({ size, ...props }: Props) => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleSubscribe = async () => {
		if (!session) {
			signIn('github');
			return;
		}

		if (session?.activeSubscription) {
			router.push('/posts');
			return;
		}

		try {
			const {
				data: { sessionId }
			} = await api.post('/subscribe');

			const stripe = await getStripeJs();

			await stripe?.redirectToCheckout({ sessionId });
		} catch (error: any) {
			alert(error.message);
		}
	};

	return (
		<StyledButton size={size} {...props} onClick={handleSubscribe}>
			{size === 'block' ? (
				<>
					Wanna continue reading? <span>Subscribe now</span>
					<span>🤗</span>
				</>
			) : (
				<>Subscribe Now</>
			)}
		</StyledButton>
	);
};

export { SubscriptionButton };