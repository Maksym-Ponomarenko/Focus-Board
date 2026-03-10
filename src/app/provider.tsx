"use client";

import {Provider} from "react-redux";
import {store} from "@/store";
import TasksHydrator from "@/hooks/TasksHydrator";
import {ReactNode} from "react";
import StatsUpdater from "@/hooks/StatsUpdater";

export default function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}><TasksHydrator/><StatsUpdater/>{children}</Provider>
    )
}