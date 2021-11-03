
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import "../styles/antd.less";

import AppLayout from './components/layout'

const useUser = () => ({ user: null, loading: false })
function MyApp({ Component, pageProps }: AppProps) {
  const [loggedin,setLoggedIn]=useState(true)
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/auth/login')
    }
  }, [user, loading])


  return (
    <>
    {user? 
      <Component {...pageProps} />  
   :

    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
    }
    </>
  )
  
}

export default MyApp
