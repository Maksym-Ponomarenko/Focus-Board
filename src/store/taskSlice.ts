import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "@/components/TaskForm/TaskForm";

export type ListType = 'tasks' | 'completedTasks'

export interface TasksState {
    tasks: ITask[];
    completedTasks: ITask[];
    listType: ListType;
    focusedTask: ITask;
}

const initialState: TasksState = {
    tasks: [],
    completedTasks: [],
    listType: 'tasks',
    focusedTask: {name: '', id: '', focuses: '', leftFocuses: 0, status: 'null', date: ''},
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setAllTasks(state, action: PayloadAction<TasksState>) {
            state.tasks = action.payload.tasks;
            state.completedTasks = action.payload.completedTasks;
        },
        addTask(state, action: PayloadAction<ITask>) {
            state.tasks.push(action.payload);
        },
        removeTask(state, action: PayloadAction<ITask>) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
            state.completedTasks = state.completedTasks.filter((task) => task.id !== action.payload.id);
        },
        completeTask(state, action: PayloadAction<ITask>) {
            state.completedTasks.push(action.payload);
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        },
        toggleListType(state, action: PayloadAction<ListType>) {
            state.listType = action.payload;
        },
        setFocusedTask(state, action: PayloadAction<ITask>) {
            state.focusedTask = action.payload;
        },
        focusDecrement(state, action: PayloadAction<ITask>) {
            state.tasks = state.tasks.map((t) =>
                t.id === action.payload.id ? { ...t, leftFocuses: t.leftFocuses<=0?0: t.leftFocuses-1 } : t);}
    },
});

export const tasksActions = taskSlice.actions;
export default taskSlice.reducer;