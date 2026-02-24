import React, { FC } from "react";
import { ITask } from "@/components/TaskForm/TaskForm";
import styles from "./TaskCard.module.scss";

interface TaskCardProps {
    task: ITask;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
    return (
        <div className={styles.card__container}>
            <div className={styles.title}>{task.name}</div>
            <div>{task.focuses}</div>
        </div>
    );
};

export default TaskCard;