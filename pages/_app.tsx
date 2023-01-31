import '../styles/reset.css'
import '../styles/globals.scss'
import styles from '../styles/app.module.scss'

import Head from 'next/head'
import type { AppProps } from 'next/app'

import AreaLeft from '../components/areaLeft'
import Loading from '../components/loading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>ぐれあぐれもりー</title>
          <meta name="description" content="ぐれあぐれもりー" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loading />
      <div className={styles.area}>
        <AreaLeft />
        <Component {...pageProps} />
      </div>
    </>
  )
}
