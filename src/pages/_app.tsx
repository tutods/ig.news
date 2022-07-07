import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { globalStyles } from '~/styles/global';
import { Header } from '~/components/ui/Header';

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) => {
	globalStyles();

	return (
		<SessionProvider session={session}>
			<Header />
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default MyApp;
