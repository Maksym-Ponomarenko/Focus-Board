import React from 'react';
import styles from './Header.module.scss'
import menuIcon from '@/assets/icons/menu-icon.png'
import settingsIcon from '@/assets/icons/settings-icon.png'

const Header = () => {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__title}>FocusBoard</div>
            <div className={styles.icons}>
                <div className={styles.icon__container}>
                    <img src={menuIcon.src}/>
                </div>
                <div className={styles.icon__container}>
                    <img src={settingsIcon.src}/>
                </div>
            </div>
        </div>
    );
};

export default Header;