'use client'

import React, {FC} from "react";
import {useSetTasks} from "@/hooks/useSetTasks";
import TaskCard from "@/components/TaskCard/TaskCard";
import {ITask} from "@/components/TaskForm/TaskForm";

interface ITaskListProps {
    limit?: number;
}

const TaskList: FC<ITaskListProps> = ({limit}) => {
    const {tasks} = useSetTasks();

    const sliced = limit ? tasks.slice(0, limit) : tasks;

    return (
        <div>
            {sliced.map((task: ITask) => (
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    );
};

export default TaskList;