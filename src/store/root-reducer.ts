import { combineReducers } from "@reduxjs/toolkit";
import { countriesApi } from "./countries-api";
import { catalogApi } from "./catalog-api";
import { appSlice, slice } from "./app-slice";


export const rootReducer = combineReducers({
    [countriesApi.reducerPath]: countriesApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [slice.app]: appSlice.reducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
