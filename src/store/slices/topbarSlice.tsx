import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 
interface TopbarState {
  title: string | null | undefined;
  topbarRoute : string | null | undefined
}
 
const initialState: TopbarState = {
  title: null,
  topbarRoute : null
};
 
 
const topbarSlice = createSlice({
  name: 'topbar',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setTopbarRoute: (state, action: PayloadAction<string>) => {
      state.topbarRoute = action.payload;
    },
  },
});
 
 
export const { setTitle, setTopbarRoute } = topbarSlice.actions;
export default topbarSlice.reducer;