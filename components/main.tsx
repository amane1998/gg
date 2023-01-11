import styles from '../styles/main.module.scss'
import Image from 'next/image'
import Logo from '../public/gurrea-logo.png'


export default function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.mv}>  
                    {/* 立ち絵 */}
                </div>
                <div className={styles.logo}>
                    {/* ロゴ */}
                    {/* <Image src={Logo} alt="logo" /> */}
                </div>
            </section>
            <section id='about' className={styles.section}>
                <div className={styles.about}>
                    <p className={styles.title_sub}>ABOUT</p>
                    <h3 className={styles.title}>まかいさいきょ〜になる！</h3>

                    <p className={styles.textCaution}>
                        ハッシュタグについては 
                        <a href="#caution">注意事項</a>
                        がございます。ご確認ください。
                    </p>
                </div>
            </section>
            <section id='contents' className={styles.section}>
                <div className={styles.contents}>
                    <p className={styles.title_sub}>CONTENTS</p>
                    <h3 className={styles.title}>活動場所！</h3>
                    <div>
                        <div className={styles.contentsButton}>
                            <button> youtube </button>
                        </div>
                        <div className={styles.contentsButton}>
                            <button> twitch </button>
                        </div>
                        <div className={styles.contentsButton}>
                            <button> twitter </button>
                        </div>
                        <div className={styles.contentsButton}>
                            <button> bilibili </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='works' className={styles.section}>
                <div className={styles.contents}>
                    <p className={styles.title_sub}>WORKS</p>
                    <h3 className={styles.title}>お仕事受け付けてます！</h3>
                </div>
            </section>
            <section id='contact' className={styles.section}>
                <div className={styles.contact}>
                    <p className={styles.title_sub}>CONTACT</p>
                    <h3 className={styles.title}>ご連絡はこちらから！</h3>
                    <div>
                    <p>
                        お仕事のご依頼は 
                        <a href="https://twitter.com/gurreagremory" target="_blank" rel="noreferrer noopener">Twitter</a>
                        のDMまで！
                    </p>
                    <div>{/* twitter */}</div>
                    </div>
                </div>
            </section>
            <section id='caution' className={styles.section}>
                <div className={styles.caution}>
                    <p className={styles.title_sub}>CAUTION</p>
                    <h3 className={styles.title}>気をつけて欲しいこと！</h3>
                    <div>
                        <div>注意事項</div>
                        <ul>
                            <li>ハッシュタグ(#)を使った投稿は配信や動画のサムネイル等で使う可能性がございます。ご了承ください。</li>
                        </ul>            
                    </div>
                </div>
            </section>
        </main>
    )
}