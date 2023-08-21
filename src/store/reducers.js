import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modeThemeReducer } from './themeSlice';

export const reducer = combineReducers({
  theme: modeThemeReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
