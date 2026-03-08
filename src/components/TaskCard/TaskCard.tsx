import React, {FC} from "react";
import {ITask} from "@/components/TaskForm/TaskForm";
import styles from "./TaskCard.module.scss";
import tickIcon from "../../assets/icons/tick.png"
import timerIcon from "../../assets/icons/timer.png"
import Image from "next/image";
import {useAppDispatch} from "@/store";
import {tasksActions} from "@/store/taskSlice";

interface TaskCardProps {
    task: ITask
}

const TaskCard: FC<TaskCardProps> = ({task}) => {

    const dispatch = useAppDispatch();
    const {removeTask, completeTask} = tasksActions


    return (
        <div className={styles.card__container}>
            <div>
                <div className={styles.title}>{task.name}</div>
                <div className={styles.text}>Focuses Left: {task.leftFocuses}</div>
                <div className={styles.text}>All Focuses: {task.focuses}</div>
            </div>
            <div className={styles.card__options}>
                <button className={styles.options__btns} onClick={() => dispatch(removeTask(task))}>X</button>
                <button className={styles.options__btns} onClick={() => dispatch(completeTask(task))}>
                    <Image src={tickIcon.src} alt="tick" width="14" height="14"/>
                </button>
                <button className={styles.options__btns}>
                    <Image src={timerIcon.src} alt="timer" width="16" height="16"/>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;