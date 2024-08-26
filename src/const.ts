import { Continent, ContinentsEng, ContinentsRus } from "./types";

export enum AppRoute {
    Root = '/',
    Form = '/form',
    NotFound = '*',
    Catalog = '/catalog',
    Auth = '/auth'
};

export enum Continents {
  Europe = 'Европа',
  Americas = 'Америка',
  Africa = 'Африка',
  Asia = 'Азия',
  Islands = 'Острова'
}

export enum NameSpace {
  appSlice = "appSlice",
};

const ALPHABET = "абвгдезиклмнопрстуфхчшэюя".toUpperCase();
export const letterArray: any = ALPHABET.split('');

export const LIMIT = 5;

export const CONTINENTS_ENG: ContinentsEng[] = ['Europe', 'Asia', 'Americas', 'Oceania', 'Africa'];

export const CONTINENTS_RUS: ContinentsRus[] = ['Европа', 'Азия', 'Америка', 'Острова', 'Африка'];

export const CONTINENTS: Continent[] =[
  {Europe: 'Европа'},
  {Asia: 'Азия'},
  {Americas: 'Америка'},
  {Oceania: 'Острова'},
  {Africa: 'Африка'}];

  // export const CONTINENTS: Continent[] =[
  //   {'Европа': 'Europe' },
  //   {Asia: 'Азия'},
  //   {Americas: 'Америка'},
  //   {Oceania: 'Острова'},
  //   {Africa: 'Африка'}];
