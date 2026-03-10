"use client";

import {Provider} from "react-redux";
import {store} from "@/store";
import TasksHydrator from "@/hooks/TasksHydrator";
import {ReactNode} from "react";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}><TasksHydrator/>{children}</Provider>
    )
}