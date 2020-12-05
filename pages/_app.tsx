import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Uzaktan eğitim dersleri için teneffüs zili uygulaması.'
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
