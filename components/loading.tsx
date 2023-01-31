import { useEffect, useState } from 'react';
import styles from '../styles/loading.module.scss'

export default function Loading() {
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {setIsLoading(false)}, 1500);
    })

    return (
        isLoading ? 
            <div className={`${styles.wrapper} ${styles.fadein}`}>
                <img src="img/gurrea-logo@2x.png" alt="" className={styles.img} />
            </div> 
        : <></>
    );
};