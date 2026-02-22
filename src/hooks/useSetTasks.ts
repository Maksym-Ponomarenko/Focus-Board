import {useGetTasks} from "@/hooks/useGetTasks";
import {ITask} from "@/components/TaskForm/TaskForm";
import {useCallback, useState} from "react";

export function useSetTasks() {
    const {getTasks} = useGetTasks();
    const [tasks, setTasksState] = useState<ITask[]>(() => getTasks());

    const setTasks = useCallback((updater:(prev: ITask[]) => ITask[]) => {
        setTasksState(prev => {
            const next = updater(prev)
            localStorage.setItem('tasks', JSON.stringify(next))
            return next
        });
    },[])




}


