'use client'

import React from 'react';
import Modal from "@/shared/components/Modal/Modal";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import TaskCard from "@/app/components/TaskCard/TaskCard";


const Main = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id}  />
            ))}
        </div>
    );
};

export default Main;