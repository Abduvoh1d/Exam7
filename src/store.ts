import {configureStore} from '@reduxjs/toolkit'
import {companyApi} from "./store/company.ts";
import {jobApi} from "./store/job.ts";

export const store = configureStore({
    reducer: {
        [jobApi.reducerPath]: jobApi.reducer,
        [companyApi.reducerPath]: companyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jobApi.middleware).concat(companyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
