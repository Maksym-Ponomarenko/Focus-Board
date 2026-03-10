import React, {FC} from "react";
import {ITask} from "@/components/TaskForm/TaskForm";
import styles from "./TaskCard.module.scss";
import tickIcon from "../../assets/icons/tick.png"
import timerIcon from "../../assets/icons/timer.png"
import Image from "next/image";
import {useAppDispatch} from "@/store";
import {ListType, tasksActions} from "@/store/taskSlice";
import {statsActions} from "@/store/statsSlice";

interface TaskCardProps {
    task: ITask,
    listType: ListType
}

const TaskCard: FC<TaskCardProps> = ({task, listType}) => {

    const dispatch = useAppDispatch();
    const {removeTask, completeTask, setFocusedTask} = tasksActions
    const { addTask} = statsActions
    const complete = () =>{
        dispatch(completeTask(task))
        dispatch(addTask(new Date().toISOString()))
    }


    return (
        <div className={styles.card__container}>
            <div>
                <div className={styles.title}>{task.name}</div>
                <div className={styles.text}>Focuses Left: {task.leftFocuses}</div>
                <div className={styles.text}>All Focuses: {task.focuses}</div>
            </div>
            <div className={styles.card__options}>
                <button className={styles.options__btns} onClick={() => dispatch(removeTask(task))}>X</button>
                <button style={{display: listType==='tasks'? 'block': 'none'}} className={styles.options__btns} onClick={() => complete() }>
                    <Image src={tickIcon.src} alt="tick" width="14" height="14"/>
                </button>
                <button style={{display: listType==='tasks'? 'block': 'none'}} className={styles.options__btns} onClick={() => dispatch(setFocusedTask(task))}>
                    <Image src={timerIcon.src} alt="timer" width="16" height="16"/>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;