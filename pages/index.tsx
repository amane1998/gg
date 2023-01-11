import Head from 'next/head'
import AreaLeft from '../components/areaLeft'
import Main from '../components/main'
import ParallaxText from '../components/ParallaxText'
import ParallaxImage from '../components/ParallaxImage'

import styles from '../styles/index.module.scss'


export default function Index() {
  return (
    <>
      <Head>
        <title>gurrea・guremory</title>
        <meta name="description" content="ぐれあぐれもりー公式サイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.areaLeft}>
        <AreaLeft />
      </section>
      <section className={styles.areaMain}>
        <Main />
      </section>
      <div className={styles.bg}>
        <ParallaxImage></ParallaxImage>
      </div>

      <section className={styles.areaParallaxText}>
        <ParallaxText baseVelocity={-5}>GURREA GUREMORY OFFICIAL WEB SITE</ParallaxText>
      </section>
    </>
  )
}
