import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "@/types";

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    }
});

export const { addTask, removeTask, updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;
