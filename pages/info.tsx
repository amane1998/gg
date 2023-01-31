import styles from '../styles/contents.module.scss'

import Loading from '../components/loading'

export default function Info() {
    return (
        <>
            <Loading />
            <main className={styles.main}>
                <section id='info' className={styles.section}>
                    <div className={styles.about}>
                        <h3 className={styles.title}>INFO</h3>
                        <div className={styles.titleSub}>
                            <h4 id='BIOGRAPHY'>BIOGRAPHY</h4>
                        </div>
                        <div className={styles.infoBody}>
                            ぐれあ・ぐれもりー。
                            <br />
                            世界で1番最強の悪魔を目指す女の子。
                            <br />
                            人間界での配信や動画投稿を通じて、力をつけようと考えている。
                        </div>
                        <div className={styles.titleSub}>
                            <h4 id='CONTACT'>CONTACT</h4>
                        </div>
                        <div className={styles.infoBody}>
                            ご依頼の際は、お名前とご依頼内容、納品予定日を記載した上で、TwitterのDMまでご連絡ください。
                            <a href="https://twitter.com/GurreaGremory" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>

                        <div className={styles.titleSub}>
                            <h4 id='CAUTION'>CAUTION</h4>
                        </div>
                        <div className={styles.infoBody}>
                            動画・配信等での注意事項。
                            <br/>
                            - ハッシュタグ(#)を使った投稿は配信や動画のサムネイル等で使う可能性がございます、ご了承の上、ご利用ください。
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}