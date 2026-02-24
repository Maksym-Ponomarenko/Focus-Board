'use client'

import React from 'react';
import styles from './Header.module.scss'
import menuIcon from '@/assets/icons/menu-icon.png'
import settingsIcon from '@/assets/icons/settings-icon.png'
import Modal from "@/components/Modal/Modal";

const Header = () => {

    const [active, setActive] = React.useState(false);

    return (
        <div className={styles.header__container}>
            <div className={styles.header__title}>FocusBoard</div>
            <div className={styles.icons}>
                <div className={styles.icon__container}>
                    <img src={menuIcon.src}/>
                </div>
                <div className={styles.icon__container} onClick={() => {setActive(true)}}>
                    <img src={settingsIcon.src}/>
                </div>
            </div>
            <Modal modalActive={active} setModalActive={setActive}>
                111
            </Modal>
        </div>
    );
};

export default Header;