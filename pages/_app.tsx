import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ders Zamanlayıcı - teneffus.app</title>
        <meta
          name='description'
          content='Uzaktan eğitim dersleri için teneffüs zili uygulaması.'
        />

        <meta property='og:url' content='https://teneffus.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ders Zamanlayıcı - teneffus.app' />
        <meta
          property='og:description'
          content='Uzaktan eğitim dersleri için teneffüs zili uygulaması.'
        />
        <meta
          property='og:image'
          content='https://teneffus.app/social-share.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='teneffus.app' />
        <meta property='twitter:url' content='https://teneffus.app' />
        <meta name='twitter:title' content='Ders Zamanlayıcı - teneffus.app' />
        <meta
          name='twitter:description'
          content='Uzaktan eğitim dersleri için teneffüs zili uygulaması.'
        />
        <meta
          name='twitter:image'
          content='https://teneffus.app/social-share.png'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
