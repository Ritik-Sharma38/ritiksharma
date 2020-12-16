import '../styles/globals.css'

import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Container from '../components/Container';
import Footer from '../components/Footer';

import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Container>
        <Component {...pageProps} />
        <Footer/>
      </Container>
      
    </ThemeProvider>
  )
}

