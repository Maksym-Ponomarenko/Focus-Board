import React from 'react';
import {FocusStats, StatsData, TaskStats} from "@/components/Stats/Stats";

const Page = () => {
    return (
        <div>
            <StatsData/>
            <TaskStats/>
            <FocusStats/>
        </div>
    );
};

export default Page;