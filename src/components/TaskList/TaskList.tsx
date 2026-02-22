import React, {FC} from 'react';

interface ITaskListProps {
    limit?: number;
    tasks?: [];
}

const TaskList:FC<ITaskListProps> = ({tasks, limit}) => {
    return (
        <div>

        </div>
    );
};

export default TaskList;