'use client'

import {useGetTasks} from "@/hooks/useGetTasks";
import {ITask} from "@/components/TaskForm/TaskForm";
import {useCallback, useState} from "react";

export function useSetTasks() {
    const {getTasks} = useGetTasks();
    const [tasks, setTasksState] = useState<ITask[]>(() => getTasks());

    const setTasks = useCallback((updater: (prev: ITask[]) => ITask[]) => {
        setTasksState(prev => {
            const next = updater(prev)
            localStorage.setItem('tasks', JSON.stringify(next))
            return next
        });
    }, [])
    const addTask = useCallback((name:string, focuses: number) => {
        if (focuses < 0) return
        if (name === "") return
        setTasks((prev) => [
            ...prev,{
                id: Date.now().toLocaleString(),
                date: Date.now().toLocaleString(),
                status: "created",
                name: name,
                focuses: focuses,
            }
        ])
    },[setTasks])
    return {
        tasks,
        addTask,
        setTasks,
    }
}


