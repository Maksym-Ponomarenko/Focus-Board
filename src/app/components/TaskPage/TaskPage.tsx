"use client";

import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Task, TaskId } from "@/types";

export interface ITaskInfoProps {
    taskId: TaskId;
}

const TaskPage: FC<ITaskInfoProps> = ({ taskId }) => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const task = tasks?.find((t: Task) => t.id === taskId);
    if (!task) {
        return <div>Задача не найдена</div>;
    }
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskPage;
