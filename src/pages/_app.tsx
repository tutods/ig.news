import type { AppProps } from "next/app";
import { globalStyles } from "styles/global";
import { Header } from "components/ui/Header";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  globalStyles();

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;