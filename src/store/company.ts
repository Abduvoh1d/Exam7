import { createApi } from "@reduxjs/toolkit/query/react";

import ICompany from "../interface.ts";
import {axiosBaseQuery} from "./index.ts";

export const companiesApi = createApi({
    reducerPath: "companiesApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "https://e4c345ab7ea246cf.mokky.dev/company",
    }),
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => ({
                url: "",
                method: "get",
            }),
        }),
        createCompany: builder.mutation({
            query: (newCompany: ICompany) => ({
                url: "",
                method: "post",
                data: newCompany,
            }),
        }),
        editCompany: builder.mutation({
            query: ({
                        id,
                        newCompany,
                    }: {
                id: string | number;
                newCompany: ICompany;
            }) => ({
                url: `/${id}`,
                method: "patch",
                data: newCompany,
            }),
        }),
        deleteCompany: builder.mutation({
            query: (id: string | number) => ({
                url: `/${id}`,
                method: "delete",
            }),
        }),
    }),
});

export const {
    useGetCompaniesQuery,
    useEditCompanyMutation,
    useCreateCompanyMutation,
    useDeleteCompanyMutation,
} = companiesApi;
