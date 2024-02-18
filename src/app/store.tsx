import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from 'entities/recipes';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
