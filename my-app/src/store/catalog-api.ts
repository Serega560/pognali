import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pognali-api-g4bd.onrender.com/'}),
    endpoints: (build) => {
        return {
            getCatalog: build.query({
                query: () => `api/catalog`
            })
        }
    }
});

export const {
    useGetCatalogQuery,
} = catalogApi;