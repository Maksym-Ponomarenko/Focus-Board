import {Priority} from "@/types/enum";
import {TaskId} from "@/types/task";

export type TaskCreateInput ={
    title: string;
    description?: string;
    category?: string;
    priority: Priority;
    dueDate?: string | null;
}
export type TaskUpdatedInput = Partial<TaskCreateInput>;
export type CreateTaskPayload = TaskCreateInput;
export type UpdateTaskPayload = {id: TaskId, task: TaskCreateInput};