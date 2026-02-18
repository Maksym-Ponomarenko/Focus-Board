import React from 'react';
import Timer from "@/components/Timer/Timer";
import styles from "./main.module.scss"

const Page = () => {
    return (
        <div className={styles.main__container}>
            <div className={styles.timer__container}>
                <Timer duration={60 * 30}/>
            </div>


        </div>
    );
};

export default Page;