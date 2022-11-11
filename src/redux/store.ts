import { Person } from "@/models/people";
import { configureStore } from "@reduxjs/toolkit";
import { LocalStorageKeys } from './../models/localstorage';
import { favoritesSlice, peopleSlice } from "./states";

export interface AppStore {
  [LocalStorageKeys.PEOPLE]: Person[];
  [LocalStorageKeys.FAVORITES]: Person[];
}

/* Creating a store with the reducers. */
export default configureStore<AppStore>({
  reducer: {
    [LocalStorageKeys.PEOPLE]: peopleSlice.reducer,
    [LocalStorageKeys.FAVORITES]: favoritesSlice.reducer,
  }
});