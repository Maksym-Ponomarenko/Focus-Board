'use client'

import React from 'react';
import styles from './Header.module.scss'
import settingsIcon from '@/assets/icons/settings-icon.png'
import Modal from "@/components/Modal/Modal";
import {useRouter} from "next/navigation";

const Header = () => {
     //
     // const [active, setActive] = React.useState(false);
    const router = useRouter();

    return (
        <div className={styles.header__container}>
            <div className={styles.header__title} onClick={()=>router.push('/' )} >FocusBoard</div>

            <div className={styles.icons}>
                <div className={styles.stats_title} onClick={()=>router.push('/stats' )} >
                    Stats
                </div>
                <div className={styles.icon__container} onClick={()=>router.push('/settings' )}>
                    <img src={settingsIcon.src}/>
                </div>
            </div>

        </div>
    );
};

export default Header;