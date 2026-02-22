'use client'

import {FC}from 'react';
import styles from './Modal.module.scss';

export interface IModalProps {
    modalActive: boolean;
    setModalActive: (active: boolean) => void;
}

const Modal:FC<IModalProps> = ({modalActive, setModalActive}) => {


    return (
        <div className={styles[modalActive?'overlay':'none']} onClick={()=>setModalActive(false)}>
            <div className={styles[modalActive?'modal':'none']} onClick={(e)=>e.stopPropagation()}>
                1
            </div>
        </div>
    );
};

export default Modal;