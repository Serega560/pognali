import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "./countries-api";
import { rootReducer } from "./root-reducer";
import { catalogApi } from "./catalog-api";


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware, catalogApi.middleware)
})