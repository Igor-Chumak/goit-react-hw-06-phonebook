import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initial_contacts } from './initialization';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initial_contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
