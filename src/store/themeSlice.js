import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: '',
  reducers: {
    setModeTheme(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setModeTheme } = themeSlice.actions;
export const modeThemeReducer = themeSlice.reducer;
