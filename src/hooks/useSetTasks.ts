"use client"

import {useGetTasks} from "@/hooks/useGetTasks";
import {ITask} from "@/components/TaskForm/TaskForm";
import {useCallback, useEffect, useState} from "react";

export function useSetTasks() {
    const {getTasks} = useGetTasks();
    const [tasks, setTasksState] = useState<ITask[]>([]);

    useEffect(() => {
        setTasksState(getTasks());
    }, [getTasks]);

    const setTasks = useCallback((updater: (prev: ITask[]) => ITask[]) => {
        setTasksState(prev => {
            const next = updater(prev);
            localStorage.setItem("tasks", JSON.stringify(next));
            return next;
        });
    }, []);

    const addTask = useCallback((name: string, focuses: number) => {
        if (focuses < 0) return;
        if (!name.trim()) return;

        setTasks(prev => [
            ...prev,
            {
                id: String(Date.now()),
                date: new Date().toISOString(),
                status: "created",
                name,
                focuses,
            },
        ]);
    }, [setTasks]);

    return {tasks, addTask, setTasks};
}