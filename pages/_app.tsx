
import type { AppProps } from 'next/app'
import React from 'react';
import "../styles/antd.less";
import AppLayout from './components/layout'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
