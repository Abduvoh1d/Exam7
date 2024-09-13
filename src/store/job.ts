import { createApi } from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "./index.ts";

export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://e4c345ab7ea246cf.mokky.dev",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/job",
                data: data,
                method: "post",
            }),
        })
    }),
});

export const {
    useLoginMutation,
} = jobApi;
