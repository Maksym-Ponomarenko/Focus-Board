'use client'

import React, {useCallback, useState} from 'react';
import styles from './TaskForm.module.scss'
import {useSetTasks} from "@/hooks/useSetTasks";

export type statusType = 'created' | 'inProgress' | 'completed'


export interface ITask {
    id: string;
    name: string;
    focuses?: number;
    status?: statusType;
    date?: string; //ISO
}

const TaskForm = () => {
    const [task, setTask] = useState<ITask>({name: '', id: ''});
    const {addTask} = useSetTasks()


    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder="Task Title"
                value={task.name}
                onChange={(e) => setTask({name: e.target.value, id: task.id})}
            />
            <button className={styles.button} onClick={()=>addTask(task.name,0)}>
                Add
            </button>

        </div>
    );
};

export default TaskForm;