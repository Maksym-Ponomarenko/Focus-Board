import {useCallback} from "react";
import {ITask} from "@/components/TaskForm/TaskForm";

function isTask(value: unknown): value is ITask {
    return (
        typeof value === "object" &&
        value !== null &&
        typeof (value as ITask).id === "string" &&
        typeof (value as ITask).name === "string"
    )
}

function isTaskArray(value: unknown): value is ITask[] {
    return Array.isArray(value) && value.every(isTask);
}

export function useGetTasks(){
    const getTasks = useCallback(():ITask[] =>{
        try{
            const raw = localStorage.getItem("tasks");
            if(!raw) return [];

            const parsed: unknown = JSON.parse(raw);
            return isTaskArray(parsed) ? parsed : []
        }catch(e){
            return [];
        }

    },[])
    return {getTasks}
}