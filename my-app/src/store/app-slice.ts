import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { CountriesToChange, Country, DataToPost } from '../types';
// import { addDays } from 'date-fns';

export type DateState = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type AppSlice = {
//  companions: number;
//  duration: number;
//  dateState: DateState[];
 choosenLetter: string;
 choosenContinent: string; // Добавляет состояние для выбранного континента
 isSelectCountryInputActive: boolean;
 choosenCountries: Country[];
 currentPage: number;
 dataToPost: DataToPost;
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
    choosenContinent: 'Европа', // Инициализирует выбранный континент
    isSelectCountryInputActive: false,
    choosenCountries: [],
    currentPage: 1,
    dataToPost: {
        startDate: '',
        endDate: '',
        companions: 0,
        text: '',
        transport_choice: [],
        name: '',
        hashtags: [],
        countries: []
    },
};

export const slice = {
  app: NameSpace.appSlice,
};

export const appSlice = createSlice({
  name: slice.app,
  initialState,
  reducers: {
//    setCompanions: (state, action: PayloadAction<number>) => {
//     state.companions = action.payload;
//    },
  //  setDuration: (state, action: PayloadAction<number>) => {
  //   state.duration = action.payload;
  //  },
  //  setDateState: (state, action: PayloadAction<DateState[]>) => {
  //   state.dateState = action.payload;
  //  },
   setLetter: (state, action: PayloadAction<string>) => {
    state.choosenLetter = action.payload;
   },
   setContinent: (state, action: PayloadAction<string>) => { // Добавляет редуктор для установки выбранного континента
    state.choosenContinent = action.payload;
   },
   setIsSelectCountryInputActive: (state) => {
    state.isSelectCountryInputActive = !state.isSelectCountryInputActive;
   },
   addChoosenCountries: (state, action: PayloadAction<Country>) => {
    state.choosenCountries = [...state.choosenCountries, action.payload];
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
   },
   setDataToPostCompanions: (state, action: PayloadAction<number>) => {
    state.dataToPost.companions = action.payload;
   },
   setDataToPostStartDate: (state, action: PayloadAction<string>) => {
    state.dataToPost.startDate = action.payload;
   },
   setDataToPostEndDate: (state, action: PayloadAction<string>) => {
    state.dataToPost.endDate = action.payload;
   },
   setDataToPostText: (state, action: PayloadAction<string>) => {
    state.dataToPost.text = state.dataToPost.text.concat(action.payload);
   },
   setDataToPostTransport: (state, action: PayloadAction<string>) => {
    if (state.dataToPost.transport_choice.includes(action.payload)) {
        state.dataToPost.transport_choice = state.dataToPost.transport_choice.filter((transport) => transport !== action.payload);
    } else {
        state.dataToPost.transport_choice = [...state.dataToPost.transport_choice, action.payload];
    }
    
   },
   setDataToPostHashTags: (state, action: PayloadAction<string>) => {
    state.dataToPost.hashtags = action.payload.split(' ');
   },
   setDataToPostCountries: (state) => {
    state.dataToPost.countries = state.choosenCountries.map((country) => country.name);
   }
  }
});

export const {
    // setCompanions,
    // setDateState,
    // setDuration,
    setLetter,
    setContinent,
    setIsSelectCountryInputActive,
    addChoosenCountries,
    changeChoosenCountry,
    removeChoosenCountry,
    setCurrentPage,
    setDataToPostCompanions,
    setDataToPostCountries,
    setDataToPostText,
    setDataToPostHashTags,
    setDataToPostTransport
} = appSlice.actions;
