'use client'

import React from 'react';
import {Priority, TaskCreateInput} from "@/types";
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/Button/Button";
import {useDispatch} from "react-redux";
import {addTask} from "@/store/reducers/TaskSlice";
import styles from './TaskForm.module.scss'

const TaskForm = () => {
    const dispatch = useDispatch();

    const [task, setTask] = React.useState<TaskCreateInput>({
        title: '',
        description: '',
        category: '',
        priority: 1,
        dueDate: '',
    });
    const submitHandler = () => {
        dispatch(addTask({...task,id:Date.now().toString(),createdAt: Date.now().toString()}));
        setTask({
            title: '',
            description: '',
            category: '',
            priority: 1,
            dueDate: '',
        });
    }
    const isPriorityInvalid = task.priority < 0 || task.priority > 5;

    return (
        <div className={styles.taskForm__container}>
            <Input value={task.title} onChange={e => setTask({...task, title: e.target.value})} label='Title'/>
            <Input value={task.description} onChange={e => setTask({...task, description: e.target.value})}
                   label='Description'/>
            <Input value={task.category} onChange={e => setTask({...task, category: e.target.value})} label='Category'/>
            <Input
                value={task.priority}
                onChange={e => setTask({...task, priority: Number(e.target.value)as Priority})}
                error={isPriorityInvalid ? 'The number must be from 0 to 5!' : undefined}
                label='Priority'
                type='number'
            />

            <Button type="submit" onClick={submitHandler}>Submit</Button>
        </div>
    );
};

export default TaskForm;