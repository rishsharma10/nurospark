import GlobalProvider from "@/context/Provider";
import { COOKIES_USER_COPPER_CRUMB_ACCESS_TOKEN, COOKIES_USER_TYPE } from "@/context/actionTypes";
import "@/styles/globals.scss";
import crumbApi from "@/utils/crumbApis";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import NProgress from 'nprogress';
import Head from "next/head";
import { parseCookies } from "nookies";
import logo from "@/assets/brand-guide/logo.png"
import { Router } from 'next/router';
import { Fragment, ReactElement, ReactNode } from "react";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement,) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  access_token: string,
  user_info: any
  signInPrivacy: string,
  userType: string,
}
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
const MyApp = ({ Component, pageProps, ...props }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <Fragment>
    <GlobalProvider {...props}>
      <Head>
        <title>
        Nurospark Counseling Services
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Wide Selection of Music Artists." />
        <link rel="stylesheet" href="https://unpkg.com/treeflex/dist/css/treeflex.css"></link>
        <link rel="icon" href={logo.src} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"/>
       
        {/* <style jsx global>{`
      * {
        font-family: ${montserrat.style.fontFamily} !important; 
      }
    `}</style> */}
      </Head>
      {getLayout(<><Component {...pageProps} /><ScrollToTop/></>)}
    </GlobalProvider >

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </Fragment>
}

MyApp.getInitialProps = async (context: any) => {
  const accessToken = parseCookies(context.ctx)[COOKIES_USER_COPPER_CRUMB_ACCESS_TOKEN]
  try {
    if (accessToken) {
      crumbApi.setToken(accessToken)
      let apiRes = await crumbApi.Auth.profile()
      const user_info = { ...apiRes.customer }
      return { user_info: { ...user_info, access_token: accessToken } }
    }
    return { user_info: {access_token: accessToken } }

  } catch (error: any) {
    return { user_info: { access_token: accessToken } }
  }
}

export default MyApp

