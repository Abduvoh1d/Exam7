import { createApi } from "@reduxjs/toolkit/query/react";
import {axiosBaseQuery} from "./index.ts";

export const companyApi  = createApi({
    reducerPath: "companyApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://e4c345ab7ea246cf.mokky.dev",
    }),
    endpoints: (builder) => ({
        company: builder.query({
            query: () => ({
                url: "/company",
                method: "get",
            }),
        }),
        editeCompany: builder.query({
            query: (data) => ({
                url: `/company/${data.id}=${data}`,
                method: "edite",
                data: data
            }),
        })
    }),
});

export const {
    useCompanyQuery,
    useEditeCompanyQuery
} = companyApi;
