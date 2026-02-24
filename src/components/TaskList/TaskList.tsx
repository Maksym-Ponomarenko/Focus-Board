import React, {FC} from 'react';
import {useSetTasks} from "@/hooks/useSetTasks";
import {ITask} from "@/components/TaskForm/TaskForm";

interface ITaskListProps {
    limit?: number;


}

const TaskList:FC<ITaskListProps> = ({ limit}) => {

    const {tasks} = useSetTasks()
    return (
        <div>
            {
                tasks.map((task: ITask) => (
                    <div key={task.id}>
                        {task.name}
                    </div>
                ))
            }
        </div>
    );
};

export default TaskList;