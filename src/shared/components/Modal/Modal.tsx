'use client'

import React, {FC, ReactEventHandler, useState} from 'react';
import styles from './Modal.module.scss'

export interface IModalProps {
    children: React.ReactNode;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;

}


const Modal: FC<IModalProps> = ({active, setActive, children}) => {

    return (
        <div className={active
            ? `${styles.modal} ${styles.active}`
            : styles.modal
        } onClick={() => {setActive(false)}}>
            <div className={styles.modal__content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;