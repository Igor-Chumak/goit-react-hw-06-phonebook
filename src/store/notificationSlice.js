import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'note',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
