import { LocalStorageKeys } from "@/models";
import { Person } from "@/models/people";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageKeys.FAVORITES,
  initialState: localStorage.getItem(LocalStorageKeys.FAVORITES) ? JSON.parse(localStorage.getItem(LocalStorageKeys.FAVORITES) as string) : initialState,
  reducers: {
    addFavorite: (state, action) => {
      state = action.payload;
      localStorage.setItem(LocalStorageKeys.FAVORITES, JSON.stringify(state));
      return state;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter((person: Person) => person.id !== action.payload.id);
      console.log(filteredState);
      localStorage.setItem(LocalStorageKeys.FAVORITES, JSON.stringify(filteredState));
      return filteredState;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
