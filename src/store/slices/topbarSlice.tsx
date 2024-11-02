// src/features/topbarSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TopbarState {
  title: string;
}

const initialState: TopbarState = {
  title: "Dashboard", 
};

const topbarSlice = createSlice({
  name: 'topbar',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});


export const { setTitle } = topbarSlice.actions;
export default topbarSlice.reducer;
