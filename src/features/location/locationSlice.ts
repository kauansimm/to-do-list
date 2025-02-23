import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const saveData = (key: string, value: string) => localStorage.setItem(key, value);
const loadData = (key: string) => localStorage.getItem(key) || '/home';

const initialState = {
  location: loadData('ultima_pagina'),
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      saveData('ultima_pagina', action.payload);
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export const selectLocation = (state: RootState) => state.location.location;
export default locationSlice.reducer;
