import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { notificationReducer } from './notificationSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notification: notificationReducer,
});
