"use client";

import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store";
import {statsActions} from "@/store/statsSlice";

const STATS_UPDATE_INTERVAL = 10 * 60 * 1000;
const STORAGE_KEY = "focus-board-stats";
export default function StatsUpdater() {
    const dispatch = useAppDispatch();
    const focusesDates = useAppSelector((state) => state.stats.focusesDates);
    const tasksDates = useAppSelector((state) => state.stats.tasksDates);
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) return;

        try {
            const parsed = JSON.parse(saved);

            if (parsed.focusesDates) {
                dispatch(statsActions.setFocusesDates(parsed.focusesDates));
            }

            if (parsed.tasksDates) {
                dispatch(statsActions.setTasksDates(parsed.tasksDates));
            }

            dispatch(statsActions.recalculate());
        } catch (e) {
            console.error("Failed to load stats from storage", e);
        }
    }, [dispatch]);
    useEffect(() => {
        const data = {
            focusesDates,
            tasksDates,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, [focusesDates, tasksDates]);
    useEffect(() => {
        dispatch(statsActions.recalculate());

        const intervalId = window.setInterval(() => {
            dispatch(statsActions.recalculate());
        }, STATS_UPDATE_INTERVAL);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [dispatch]);

    return null;
}