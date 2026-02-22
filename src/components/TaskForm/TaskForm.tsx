'use client'

import React, {useCallback, useState} from 'react';
import styles from './TaskForm.module.scss'

export interface ITask {
    id: string;
    name: string;
}

const TaskForm = () => {
    const [task, setTask] = useState<ITask>({name: '', id: ''});
    const getTasks = () => {
    }
    const createTask = () => {
        if (task.name.replaceAll(" ", "") !== "" ) {
            localStorage.setItem('tasks', JSON.stringify(task));
            setTask({name: '', id: ''});
        }else{
            console.error('Task name is required');
        }
    }

    return (
        <div className={styles.container} >
            <input
                   className={styles.input}
                   placeholder="Task Title"
                   value={task.name}
                   onChange={(e) => setTask({name: e.target.value, id:task.id})}
            />
            <button className={styles.button} onClick={createTask}>
                Add
            </button>
        </div>
    );
};

export default TaskForm;