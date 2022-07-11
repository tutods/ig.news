import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { Header } from '~/components/ui/Header';

import { globalStyles } from '~/styles/global';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	globalStyles();

	return (
		<SessionProvider session={session}>
			<Header />
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default MyApp;
