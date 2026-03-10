'use client'

import React from 'react';
import styles from './Header.module.scss'
import {useRouter} from "next/navigation";

const Header = () => {
    const router = useRouter();

    return (
        <div className={styles.header__container}>
            <div className={styles.header__title} onClick={()=>router.push('/' )} >FocusBoard</div>
            <div className={styles.icons}>
                <div className={styles.stats_title} onClick={()=>router.push('/stats' )} >
                    Stats
                </div>
            </div>
        </div>
    );
};

export default Header;