"use client";

import React, {FC} from "react";
import TaskCard from "@/components/TaskCard/TaskCard";
import {useAppSelector} from "@/store";
import {ITask} from "@/components/TaskForm/TaskForm";

interface ITaskListProps {
    limit?: number;
}

const TaskList: FC<ITaskListProps> = ({limit}) => {
    const listType = useAppSelector((state)=>state.tasks.listType)
    const tasks = useAppSelector((state) => state.tasks[listType]);

    const sliced = limit ? tasks.slice(0, limit) : tasks;

    return (
        <div>
            {sliced.map((task: ITask) => (
                <TaskCard task={task} listType={listType} key={task.id}/>
            ))}
        </div>
    );
};

export default TaskList;