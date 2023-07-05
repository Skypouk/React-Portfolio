import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slices/navbarSlice';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
  middleware: [thunk]
});

export { store };