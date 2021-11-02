
import type { AppProps } from 'next/app'
import "../styles/antd.less";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
