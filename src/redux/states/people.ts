import { LocalStorageKeys } from "@/models";
import { Person } from "@/models/people";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: LocalStorageKeys.PEOPLE,
  initialState: localStorage.getItem(LocalStorageKeys.PEOPLE) ? JSON.parse(localStorage.getItem(LocalStorageKeys.PEOPLE) as string) : initialState,
  reducers: {
    addPeople: (state, action) => {
      state = action.payload;
      localStorage.setItem(LocalStorageKeys.PEOPLE, JSON.stringify(state));
      return state;
    }
  }
});

export const { addPeople } = peopleSlice.actions;
