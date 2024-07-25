export enum AppRoute {
    Root = '/',
    Form = '/form',
    NotFound = '*',
    Catalog = '/catalog',
    Auth = '/auth'
};

export enum NameSpace {
  appSlice = "appSlice",
};

const ALPHABET = "абвгдезиклмнопрстуфхчшэюя".toUpperCase();
export const letterArray: any = ALPHABET.split('');