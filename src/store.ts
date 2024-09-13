import { configureStore } from "@reduxjs/toolkit";
import {companiesApi} from "./store/company";
import {jobsApi} from "./store/job";

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer,
        [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(companiesApi.middleware)
            .concat(jobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
