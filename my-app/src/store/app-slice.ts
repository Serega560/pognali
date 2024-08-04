import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { CountriesToChange, Country, DataToPost } from '../types';
import { addDays } from 'date-fns';

export type DateState = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type AppSlice = {
 companions: number;
 duration: number;
 dateState: DateState[];
 startDate: string;
 endDate: string;
 choosenLetter: string;
 choosenContinent: string; // Добавляет состояние для выбранного континента
 isSelectCountryInputActive: boolean;
 choosenCountries: Country[];
 currentPage: number;
//  dataToPost: DataToPost;
 name: string;
 text: string;
 hashtags: string[];
 transport_choice: string[],
}

const initialState: AppSlice = {
    companions: 1,
    duration: 2,
    startDate:'',
    endDate: '',
    dateState: [
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: 'selection'
        }
      ],
    choosenLetter: 'А',
    choosenContinent: 'Европа', // Инициализирует выбранный континент
    isSelectCountryInputActive: false,
    choosenCountries: [],
    currentPage: 1,
    name: 'Vasya',
    text: '',
    hashtags: [],
    transport_choice: [],
    // dataToPost: {
    //     startDate: '',
    //     endDate: '',
    //     companions: 0,
    //     text: '',
    //     transport_choice: [],
    //     name: '',
    //     hashtags: [],
    //     countries: []
    // },
};

export const slice = {
  app: NameSpace.appSlice,
};

export const appSlice = createSlice({
  name: slice.app,
  initialState,
  reducers: {
   setCompanions: (state, action: PayloadAction<number>) => {
    state.companions = action.payload;
   },
   setDuration: (state, action: PayloadAction<number>) => {
    state.duration = action.payload;
   },
   setDateState: (state, action: PayloadAction<DateState[]>) => {
    state.dateState = action.payload;
   },
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
  //  setDataToPostCompanions: (state, action: PayloadAction<number>) => {
  //   state.dataToPost.companions = action.payload;
  //  },
   setStartDate: (state, action: PayloadAction<string>) => {
    state.startDate = action.payload;
   },
   setEndDate: (state, action: PayloadAction<string>) => {
    state.endDate = action.payload;
   },
   setText: (state, action: PayloadAction<string>) => {
    state.text = state.text.concat(action.payload);
   },
   setTransport: (state, action: PayloadAction<string>) => {
    if (state.transport_choice.includes(action.payload)) {
        state.transport_choice = state.transport_choice.filter((transport) => transport !== action.payload);
    } else {
        state.transport_choice = [...state.transport_choice, action.payload];
    }

   },
   setHashTags: (state, action: PayloadAction<string>) => {
    state.hashtags = action.payload.split(' ');
   },
   resetState: (state) => {
    state = initialState;
   }
  //  setDataToPostCountries: (state) => {
  //   state.dataToPost.countries = state.choosenCountries.map((country) => country.name);
  //  }
  }
});

export const {
    setCompanions,
    setDateState,
    setDuration,
    setLetter,
    setContinent,
    setIsSelectCountryInputActive,
    addChoosenCountries,
    changeChoosenCountry,
    removeChoosenCountry,
    setCurrentPage,
    // setDataToPostCompanions,
    setEndDate,
    setStartDate,
    setHashTags,
    setText,
    setTransport,
    resetState,
    // setDataToPostCountries,
    // setDataToPostText,
    // setDataToPostHashTags,
    // setDataToPostTransport
} = appSlice.actions;
