

import React from 'react';
import {Timer} from "@/components/Timer/Timer";
import styles from "./main.module.scss"
import TaskModule from "@/modules/TaskModule/TaskModule";

const Page = () => {



    return (
        <div className={styles.main__container}>
            <div className={styles.timer__container}>
                <Timer />
            </div>
            <TaskModule/>

        </div>
    );
};

export default Page;