import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { notificationReducer } from './notificationSlice';
import { modeThemeReducer } from './themeSlice';

export const reducer = combineReducers({
  modeTheme: modeThemeReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,
});
