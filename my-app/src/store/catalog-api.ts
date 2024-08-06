import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataToPost, PaginateData, PaginateParams, SubmitFormResult } from "../types";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pognali-api-g4bd.onrender.com/'}),
    endpoints: (build) => {
        return {
            getCatalog: build.query({
                query: () => `api/catalog`
            }),
            getPagination: build.query<PaginateData, PaginateParams>({
                query: ({page, limit}) => `api/paginate?page=${page} ${limit ? `&limit=${limit}` : ''}`
            }),
            postFormData: build.query<SubmitFormResult, DataToPost>({
                query: (body) => ({
                    url: `api/submit-form`,
                    method: 'POST',
                    body: body
                })
            })
        }
    }
});

export const {
    useGetCatalogQuery,
    useGetPaginationQuery,
    useLazyGetPaginationQuery,
    usePostFormDataQuery,
    useLazyPostFormDataQuery
} = catalogApi;