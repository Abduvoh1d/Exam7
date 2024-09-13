import { createApi } from "@reduxjs/toolkit/query/react";
import IJob from "../interface.ts";
import {axiosBaseQuery} from "./index.ts";

export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://e4c345ab7ea246cf.mokky.dev/job",
    }),
    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => ({
                url: "",
                method: "get",
            }),
        }),
        createJob: builder.mutation({
            query: (newJob: IJob) => ({
                url: "",
                method: "post",
                data: newJob,
            }),
        }),
        editJob: builder.mutation({
            query: ({
                        id,
                        newJob,
                    }: {
                id: number | string;
                newJob: IJob;
            }) => ({
                url: `/${id}`,
                method: "patch",
                data: newJob,
            }),
        }),
        deleteJob: builder.mutation({
            query: ({ id }: { id: string | number }) => ({
                url: `/${id}`,
                method: "delete",
            }),
        }),
    }),
});

export const {
    useGetJobsQuery,
    useCreateJobMutation,
    useEditJobMutation,
    useDeleteJobMutation,
} = jobsApi;
