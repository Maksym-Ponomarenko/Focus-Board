"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { tasksActions } from "@/store/taskSlice";
import { ITask } from "@/components/TaskForm/TaskForm";

export default function TasksHydrator() {
    const dispatch = useAppDispatch();

    const tasks = useAppSelector((state) => state.tasks.tasks);
    const completedTasks = useAppSelector((state) => state.tasks.completedTasks);

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const tasksRaw = localStorage.getItem("tasks");
            const completedRaw = localStorage.getItem("completedTasks");

            const parsedTasks: ITask[] = tasksRaw ? JSON.parse(tasksRaw) : [];
            const parsedCompleted: ITask[] = completedRaw ? JSON.parse(completedRaw) : [];

            dispatch(tasksActions.setAllTasks({
                tasks: parsedTasks,
                completedTasks: parsedCompleted,
                listType: "tasks",
                focusedTask: {name: '', id: '', focuses: '', leftFocuses: 0, status: 'null', date: ''}
            }));
        } catch (e) {
            console.error("localStorage error", e);
        } finally {
            setHydrated(true);
        }
    }, [dispatch]);

    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }, [tasks, completedTasks, hydrated]);

    return null;
}