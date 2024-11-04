import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewMemberDetailsState {
    page: number;
    pageSize: number;
    currentPage: number;
    pageLimits: number[];
}

const initialState: ViewMemberDetailsState = {
    page: 1,
    pageSize: 10,
    currentPage: 1,
    pageLimits: [],
};

const viewMemberDetailsSlice = createSlice({
    name: 'viewMemberDetails',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
            state.page = 1; // Reset to the first page when the page size changes
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPageLimits: (state, action: PayloadAction<number[]>) => {
            state.pageLimits = action.payload;
        },
    },
});

// Export actions and reducer
export const { setPage, setPageSize, setCurrentPage, setPageLimits } = viewMemberDetailsSlice.actions;
export default viewMemberDetailsSlice.reducer;
