import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface StatsState {
    focusesDates: string[];
    tasksDates: string[];

    focusesWeek: number[];
    tasksWeek: number[];

    focusesToday: number;
    tasksToday: number;

    focusesAllTime: number;
    tasksAllTime: number;

    lastCalculatedAt: string | null;
}

const initialState: StatsState = {
    focusesDates: [],
    tasksDates: [],

    focusesWeek: [0, 0, 0, 0, 0, 0, 0],
    tasksWeek: [0, 0, 0, 0, 0, 0, 0],

    focusesToday: 0,
    tasksToday: 0,

    focusesAllTime: 0,
    tasksAllTime: 0,

    lastCalculatedAt: null,
};

const normalizeDate = (value: string | Date): string => {
    const date = new Date(value);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const getWeekIndex = (value: string | Date): number => {
    const day = new Date(value).getDay();
    return day === 0 ? 6 : day - 1;
};

const isSameDay = (a: string, b: string) => a === b;

const recalculateState = (state: StatsState) => {
    const today = normalizeDate(new Date());

    const focusesWeek = [0, 0, 0, 0, 0, 0, 0];
    const tasksWeek = [0, 0, 0, 0, 0, 0, 0];

    let focusesToday = 0;
    let tasksToday = 0;

    for (const date of state.focusesDates) {
        const normalized = normalizeDate(date);
        const weekIndex = getWeekIndex(normalized);

        focusesWeek[weekIndex] += 1;

        if (isSameDay(normalized, today)) {
            focusesToday += 1;
        }
    }

    for (const date of state.tasksDates) {
        const normalized = normalizeDate(date);
        const weekIndex = getWeekIndex(normalized);

        tasksWeek[weekIndex] += 1;

        if (isSameDay(normalized, today)) {
            tasksToday += 1;
        }
    }

    state.focusesWeek = focusesWeek;
    state.tasksWeek = tasksWeek;

    state.focusesToday = focusesToday;
    state.tasksToday = tasksToday;

    state.focusesAllTime = state.focusesDates.length;
    state.tasksAllTime = state.tasksDates.length;

    state.lastCalculatedAt = new Date().toISOString();
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        addFocus(state, action: PayloadAction<string | Date>) {
            state.focusesDates.push(normalizeDate(action.payload));
            recalculateState(state);
        },

        addTask(state, action: PayloadAction<string | Date>) {
            state.tasksDates.push(normalizeDate(action.payload));
            recalculateState(state);
        },

        recalculate(state) {
            recalculateState(state);
        },

        setFocusesDates(state, action: PayloadAction<Array<string | Date>>) {
            state.focusesDates = action.payload.map(normalizeDate);
            recalculateState(state);
        },

        setTasksDates(state, action: PayloadAction<Array<string | Date>>) {
            state.tasksDates = action.payload.map(normalizeDate);
            recalculateState(state);
        },

        clearStats(state) {
            state.focusesDates = [];
            state.tasksDates = [];
            state.focusesWeek = [0, 0, 0, 0, 0, 0, 0];
            state.tasksWeek = [0, 0, 0, 0, 0, 0, 0];
            state.focusesToday = 0;
            state.tasksToday = 0;
            state.focusesAllTime = 0;
            state.tasksAllTime = 0;
            state.lastCalculatedAt = new Date().toISOString();
        },
    },
});

export const statsActions = statsSlice.actions;
export default statsSlice.reducer;