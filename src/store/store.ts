import {configureStore} from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import categoriesReducer from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;