// src/lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from "@/store/reducers/TaskSlice";

export const store = configureStore({
    reducer: {
        tasks: TaskReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
