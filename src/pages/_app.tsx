import type {AppProps} from 'next/app'
import {globalStyles} from "styles/global";
import {Header} from "components/ui/Header";

function MyApp({Component, pageProps}: AppProps) {

    globalStyles()

    return <>
        <Header/>
        <Component {...pageProps} />
    </>
}

export default MyApp