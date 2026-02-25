'use client'

import React, {useCallback, useState} from 'react';
import styles from './TaskForm.module.scss'
import {useSetTasks} from "@/hooks/useSetTasks";

export type statusType = "null" | 'created' | 'inProgress' | 'completed'


export interface ITask {
    id: string;
    name: string;
    focuses: number | '';
    leftFocuses?: number;
    status?: statusType;
    date?: string; //ISO
}

const TaskForm = () => {
    const [task, setTask] = useState<ITask>({name: '', id: '', focuses: ''});
    const {addTask} = useSetTasks()


    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder="Task Title"
                value={task.name}
                onChange={(e) => setTask({...task, name: e.target.value})}
            />
            <input
                className={styles.input}
                style={{width:'20%'}}
                type="text"
                inputMode="numeric"
                placeholder="Focuses"
                value={task.focuses}
                onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '')
                    if (value === '') {
                        setTask({...task, focuses: ''})
                        return
                    }
                    const num = Math.min(10, Math.max(0, Number(value)))
                    setTask({...task, focuses: num})
                }}
            />
            <button className={styles.button} onClick={() => addTask(task.name, Number(task.focuses))}>
                Add
            </button>

        </div>
    );
};

export default TaskForm;