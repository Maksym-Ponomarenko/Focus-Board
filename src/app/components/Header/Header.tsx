'use client'

import React from 'react';
import styles from './Header.module.scss';
import Button from "@/shared/UI/Button/Button";
import CreateTaskModal from "@/app/components/CreateTaskModal/CreateTaskModal";

const Header = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div className={styles.header__container}>
            <div className={styles.header__content}>
                <div className={styles.header__title}>Focus Board</div>
                <div className={styles.header__contentButton}>
                    <Button onClick={() => setModalOpen(true)}>
                        Create New Task!
                    </Button>
                    <CreateTaskModal modalActive={modalOpen} setModalActive={setModalOpen}></CreateTaskModal>
                </div>
            </div>

        </div>
    );
};

export default Header;