import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'note',
  initialState: '',
  reducers: {
    setNote(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setNote } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
