'use client'

import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {store} from "@/store";

export interface IProviderProps {
    children: React.ReactNode;
}

const Providers:FC<IProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;