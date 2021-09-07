import '../styles/globals.css';

import store from '../redux/store';
import Head from 'next/head';

import { PROJECT_NAME_TEXT } from '@constants';


function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>{PROJECT_NAME_TEXT}</title>
      <meta name="viewport" content="maximum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>)
}


MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component && Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps,
    namespacesRequired: ['common']
  }
}

export default store.withRedux(MyApp)
