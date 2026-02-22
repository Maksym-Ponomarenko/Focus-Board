'use client'

import React from 'react';
import Timer from "@/components/Timer/Timer";
import styles from "./main.module.scss"
import TaskModule from "@/modules/TaskModule/TaskModule";
import Modal from "@/components/Modal/Modal";

const Page = () => {

    const [active, setActive] = React.useState(true);

    return (
        <div className={styles.main__container}>
            <div className={styles.timer__container}>
                <Timer duration={60 * 30}/>
            </div>
            <TaskModule/>

        </div>
    );
};

export default Page;