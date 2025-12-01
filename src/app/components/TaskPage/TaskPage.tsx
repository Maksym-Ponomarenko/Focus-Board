import React, {FC} from 'react';
import {Task} from "@/types";

export interface ITaskInfoProps {
    task: Task;
}

const TaskInfo:FC<ITaskInfoProps> = ({task}) => {
    return (
        <div>

        </div>
    );
};

export default TaskInfo;