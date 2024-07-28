import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { CountriesToChange, Country } from '../types';
// import { addDays } from 'date-fns';

export type DateState = {
    startDate: Date;
    endDate: Date;
    key: string;
}

export type AppSlice = {
//  companions: number;
//  duration: number;
//  dateState: DateState[];
 choosenLetter: string;
 isSelectCountryInputActive: boolean;
 choosenCountries: Country[];
 currentPage: number;
}

const initialState: AppSlice = {
    // companions: 1,
    // duration: 2,
    // dateState: [
    //     {
    //       startDate: new Date(),
    //       endDate: addDays(new Date(), 1),
    //       key: 'selection'
    //     }
    //   ],
    choosenLetter: 'А',
    isSelectCountryInputActive: false,
    choosenCountries: [],
    currentPage: 1,
};

export const slice = {
    app: NameSpace.appSlice
}

export const appSlice = createSlice({
  name: slice.app,
  initialState,
  reducers: {
  //  setCompanions: (state, action: PayloadAction<number>) => {
  //   state.companions = action.payload;
  //  },
  //  setDuration: (state, action: PayloadAction<number>) => {
  //   state.duration = action.payload;
  //  },
  //  setDateState: (state, action: PayloadAction<DateState[]>) => {
  //   state.dateState = action.payload;
  //  },
   setLetter: (state, action: PayloadAction<string>) => {
    state.choosenLetter = action.payload;
   },
   setIsSelectCountryInputActive: (state) => {
    state.isSelectCountryInputActive = !state.isSelectCountryInputActive;
   },
   addChoosenCountries: (state, action: PayloadAction<Country>) => {
    state.choosenCountries = [...state.choosenCountries, action.payload]
   },
   changeChoosenCountry: (state, action: PayloadAction<CountriesToChange>) => {
    const index = state.choosenCountries.findIndex(country => country.name === action.payload.currentCountry.name);
    state.choosenCountries[index] = action.payload.newCountry;
   },
   removeChoosenCountry: (state, action: PayloadAction<Country>) => {
    state.choosenCountries = state.choosenCountries.filter((country) => country.name !== action.payload.name);
   },
   setCurrentPage: (state, action: PayloadAction<number>) => {
    state.currentPage = action.payload;
   }
  }
});

export const {
    // setCompanions,
    // setDateState,
    // setDuration,
    setLetter,
    setIsSelectCountryInputActive,
    addChoosenCountries,
    changeChoosenCountry,
    removeChoosenCountry,
    setCurrentPage
} = appSlice.actions;