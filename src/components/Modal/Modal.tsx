'use client'

import {FC}from 'react';
import styles from './Modal.module.scss';

export interface IModalProps {
    modalActive: boolean;
    setModalActive: (active: boolean) => void;
    children: React.ReactNode;
}

const Modal:FC<IModalProps> = ({modalActive, setModalActive, children}) => {


    return (
        <div className={styles[modalActive?'overlay':'none']} onClick={()=>setModalActive(false)}>
            <div className={styles[modalActive?'modal':'none']} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;