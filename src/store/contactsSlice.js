import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { INITIAL_CONTACTS } from 'data/initial';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
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
