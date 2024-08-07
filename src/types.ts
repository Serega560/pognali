import { CardData } from "./components/types/card-data";
import { store } from "./store";

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export  type Country = {
    name: string;
    flag: string;
    continent: string;
  };

export type CountriesToChange = {
  currentCountry: Country;
  newCountry: Country;
};
export type Companion = {
  id: number,
  date: string,
  country: string,
  text: string,
  token: string,
  transport_choice: string,
  name: string,
  hashtags: string[],
  level: number,
  is_form_generated: boolean
};

export type PaginateData = {
  page: number,
  limit: number,
  total: number,
  totalPages: number,
  data: CardData[]
};

export type Transport = {
  plane: boolean;
  bus: boolean;
  bicycle: boolean;
  onfoot: boolean;
}

type CountriesToPost = {
  name: string;
  flag: string;
}

export type DataToPost = {
  startDate: string,
  endDate: string,
  companions: number,
  text: string,
  transport_choice: string[],
  name: string,
  hashtags: string,
  level: number,
  country: CountriesToPost[],
  is_form_generated: boolean
};

export type SubmitFormResult = {
  message: string,
  formData: Companion,
};

export type PaginateParams = {
  page: number;
  limit: number;
};
