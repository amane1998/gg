import styles from '../styles/contents.module.scss'

import Loading from '../components/loading'
import AreaRight from '../components/areaRight'


export default function Index() {
  const randam = Math.floor(Math.random() * 4 + 1)
  const filename = 'img/gg-' + randam + '.png'

  return (
    <>
      <Loading />
      <main className={styles.main}>
          <section>
              <div className={styles.kv}>
                  <img src={`${filename}`} alt="" />
              </div>
          </section>
      </main>
      <AreaRight />
    </>
  )
}
