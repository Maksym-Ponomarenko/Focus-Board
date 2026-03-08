"use client";

import {Provider} from "react-redux";
import {store} from "@/store";
import TasksHydrator from "@/hooks/TasksHydrator";

export default function Providers({children}: { children: React.ReactNode }) {
    return (
        <Provider store={store}><TasksHydrator/>{children}</Provider>
    )
}