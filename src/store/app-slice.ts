import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Continents, LIMIT, NameSpace } from '../const';
import { Continent, ContinentsEng, ContinentsRus, CountriesToChange, Country, Step } from '../types';
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
 choosenContinent: ContinentsEng[];
 isSelectCountryInputActive: boolean;
 choosenCountries: Country[];
 currentPage: number;
 name: string;
 text: string;
 hashtags: string;
 transport_choice: string[],
 currentLimit: number,
 activeStep: Step,
 countryToSearchCompanions: string,
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
    choosenContinent: [], // Инициализирует выбранный континент
    isSelectCountryInputActive: false,
    choosenCountries: [],
    currentPage: 1,
    currentLimit: LIMIT,
    name: 'Vasya',
    text: '',
    hashtags: '',
    transport_choice: [],
    activeStep: 'dates',
    countryToSearchCompanions: '',
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
   setContinent: (state, action: PayloadAction<ContinentsEng>) => {
    if (state.choosenContinent.includes(action.payload)) {
      state.choosenContinent = state.choosenContinent.filter((continent) => continent !== action.payload);
    } else {
      state.choosenContinent.push(action.payload);
    }
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
    state.hashtags = action.payload;
   },
   setLimit: (state) => {
    state.currentLimit += LIMIT;
   },
   resetState: (state) => {
    state.choosenContinent = [];
    state.choosenCountries = [];
    state.choosenLetter = 'А';
    state.companions = 1;
    state.currentLimit = LIMIT;
    state.currentPage = 1;
    state.dateState = initialState.dateState;
    state.duration = 2;
    state.endDate = '';
    state.hashtags = '';
    state.isSelectCountryInputActive = false;
    state.name = 'vasya';
    state.startDate = '';
    state.text = '';
    state.transport_choice = [];
   },
   setActiveStep: (state, action: PayloadAction<Step>) => {
    state.activeStep = action.payload;
   },
   setCountryToSearchCopmanions: (state, action: PayloadAction<string>) => {
    state.countryToSearchCompanions = action.payload;
   }
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
    setLimit,
    setEndDate,
    setStartDate,
    setHashTags,
    setText,
    setTransport,
    resetState,
    setActiveStep,
    setCountryToSearchCopmanions
} = appSlice.actions;
