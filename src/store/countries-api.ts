import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pognali-api-g4bd.onrender.com/'}),
    endpoints: (build) => {
        return {
            getCountries: build.query({
                query: () => `api/countries`
            }),
            getCountriesNames: build.query({
                query: (letter) => `api/countries?letter=${letter}`
            }),
            getCountriesByContinent: build.query({
                query: (continents) => `api/countries?${continents.reduce((continent: string, acc: string) => {
                    return (acc + `&continent=${continent}`)
                })}`
            })
        }
    }
});

export const {
    useGetCountriesQuery,
    useGetCountriesNamesQuery,
    useGetCountriesByContinentQuery,
    useLazyGetCountriesByContinentQuery,
} = countriesApi;