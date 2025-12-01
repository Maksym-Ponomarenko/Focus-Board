import React from 'react';
import {Task} from "@/types";
import styles from './TaskCard.module.scss'
import Button from "@/shared/UI/Button/Button";
import {useDispatch} from "react-redux";
import {removeTask} from "@/store/reducers/TaskSlice";

const TaskCard = ({task}:{task: Task}) => {
    const dispatch = useDispatch();
    function deleteTaskHandler() {
        dispatch(removeTask(task.id));
    }

    return (
        <div  className={styles.task__container} >
            <div>{task.title}</div>
            <div className={styles.btn__container}>
                <Button onClick={deleteTaskHandler}>Delete</Button>
                <Button>Update</Button>
            </div>

        </div>
    );
};

export default TaskCard;