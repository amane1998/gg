import styles from '../styles/arearight.module.scss'
import Image from 'next/image'
import Logo from '../public/gurrea-logo.png'


export default function Main() {
    return (
        <div className={styles.contents}> 
            <p className={styles.title}>CONTENTS</p>
            <button className={styles.buttonTw}>
                <a href="https://twitter.com/GurreaGremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/twitter.svg" alt="" />
                </a>
            </button>  
            <button className={styles.buttonYt}> 
                <a href="https://youtube.com/@GurreaGremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/youtube.svg" alt="" />
                </a>
            </button>
            <button className={styles.buttonBl}> 
                <a href="https://space.bilibili.com/1454264713/" target="_blank" rel="noopener noreferrer">
                    <img src="icons/bilibili.svg" alt="" />
                </a>
            </button>
            <button className={styles.buttonTi}> 
                <a href="http://twitch.com/gurreagremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/twitch.svg" alt="" />
                </a>
            </button>
            <button className={styles.buttonTk}> 
                <a href="https://tiktok.com/@gurreagremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/tiktok.svg" alt="" />
                </a>
            </button>
            <button className={styles.buttonFb}> 
                <a href="https://gurreagremory.fanbox.cc" target="_blank" rel="noopener noreferrer">
                    <img src="icons/pixiv.png" alt="" />
                </a>
            </button>
            <button className={styles.buttonMm}> 
                <a href="https://marshmallow-qa.com/gurreagremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/marshmallow.png" alt="" />
                </a>
            </button>
            <button className={styles.buttonSc}> 
                <a href="https://soundcloud.com/gurreagremory" target="_blank" rel="noopener noreferrer">
                    <img src="icons/soundcloud.svg" alt="" />
                </a>
            </button>
        </div>
    )
}