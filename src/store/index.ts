import {combineReducers, configureStore} from "@reduxjs/toolkit";
import taskReducer from  "./taskSlice"
import statsReducer from  "./statsSlice"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const root = combineReducers({
    tasks: taskReducer,
    stats: statsReducer,
})

export const store = configureStore({
    reducer: root,

});