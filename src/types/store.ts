import {Task, TaskId} from './task';

export type TaskState = {
    byId: Record<TaskId, Task>;
    allIds: TaskId[];
    loading?: boolean;
    error?: string | null;
}