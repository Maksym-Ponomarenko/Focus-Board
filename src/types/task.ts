import {Priority} from "@/types/enum";

export type TaskId = string;


export type Task ={
    id: TaskId;
    title: string;
    description?: string;
    category?: string;
    priority?: Priority;
    completed?: boolean;
    createdAt: string;
    updatedAt?: string;
    dueDate?: string | null;
    archived?: boolean;
}