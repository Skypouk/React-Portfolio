import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    navOpen: false,
  },
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { toggleNav } = navbarSlice.actions;

export default navbarSlice.reducer;