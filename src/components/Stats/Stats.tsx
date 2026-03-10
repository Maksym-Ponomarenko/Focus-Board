'use client'

import React from 'react';
import styles from './Stats.module.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend
} from "chart.js"
import {Line} from "react-chartjs-2";
import {useAppSelector} from "@/store";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
    Legend
)
const StatsData=()=>{
    const stats = useAppSelector((state) => state.stats);

    return (
        <div className={styles.stats__container}>
            <div className={styles.stats__title} >Focuses Today: {stats.focusesToday}</div>
            <div className={styles.stats__title} >Tasks Today: {stats.tasksToday}</div>
            <div className={styles.stats__title} >Focuses for all time: {stats.focusesAllTime}</div>
            <div className={styles.stats__title} >Tasks for all time: {stats.tasksAllTime}</div>
        </div>
    )
}

const FocusStats = () => {

    const stats = useAppSelector((state) => state.stats);
    const data = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [
            {
                label: "Focuses",
                data: stats.focusesWeek,
                tension: 0.5,
                borderColor: "#a2e3ff",
                backgroundColor: "#80d6fa",
                pointRadius: 4,
            }
        ]
    }

    return (
        <div className={styles.stats__container} >
            <Line data={data}/>
        </div>
    );
};

const TaskStats = () => {

    const stats = useAppSelector((state) => state.stats);
    const data = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [
            {
                label: "Tasks",
                data: stats.tasksWeek,
                tension: 0.5,
                borderColor: "#a2e3ff",
                backgroundColor: "#80d6fa",
                pointRadius: 4,
            }
        ]
    }

    return (
        <div className={styles.stats__container} >
            <Line data={data}/>
        </div>
    );
}

export {FocusStats, TaskStats, StatsData};