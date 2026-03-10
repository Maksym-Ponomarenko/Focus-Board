'use client'

import React, {useState} from 'react';
import styles from './TaskForm.module.scss'
import {useAppDispatch, useAppSelector} from "@/store";
import {tasksActions} from "@/store/taskSlice";
import {TasksToggle} from "@/components/TaskToggle/TaskToggle";

export type statusType = "null" | 'created' | 'inProgress' | 'completed'

export interface ITask {
    id: string;
    name: string;
    focuses: number | '';
    leftFocuses: number;
    status?: statusType;
    date?: string; //ISO
}

const TaskForm = () => {
    const [task, setTask] = useState<ITask>({name: '', id: '', focuses: '', leftFocuses: 0, status: 'null', date: ''});
    const dispatch = useAppDispatch();
    const listType = useAppSelector(state => state.tasks.listType);

    const add = () => {
        dispatch(tasksActions.addTask({
            id: String(new Date()),
            date: new Date().toISOString(),
            status: "created",
            name: task.name,
            focuses: task.focuses,
            leftFocuses: task.focuses || 0,
        }));
        setTask({name: '', id: '', focuses: '', leftFocuses: 0, status: 'null', date: ''});
    }

    return (
        <div className={styles.container}>
            <div className={styles.toggleRow}>
                <TasksToggle/>
            </div>

            <div style={{display: listType === 'tasks' ? 'flex' : 'none'}} className={styles.formRow}>
                <div className={styles.titleField}>
                    <input
                        className={styles.input}
                        placeholder="Task Title"
                        value={task.name}
                        onChange={(e) => setTask({...task, name: e.target.value})}
                    />
                </div>

                <div className={styles.focusField}>
                    <input
                        className={styles.input}
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
                </div>

                <button className={styles.button} onClick={() => add()}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default TaskForm;