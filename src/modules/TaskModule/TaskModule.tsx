import React from 'react';
import TaskForm from "@/components/TaskForm/TaskForm";
import TaskList from "@/components/TaskList/TaskList";

const TaskModule = () => {
    return (
        <div>
            <TaskForm/>
            <TaskList/>
        </div>
    );
};

export default TaskModule;