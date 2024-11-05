import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewMemberDetailsState {
    page: number;
    pageSize: number;
    currentPage: number;
    pageLimits: number[];
    mobileNumber:string ;
    searchName: string;
    fullName:string;
}

const initialState: ViewMemberDetailsState = {
    page: 1,
    pageSize: 10,
    currentPage: 1,
    pageLimits: [],
    mobileNumber:"",
    searchName: '',
    fullName:""
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
        setMobileNumber: (state, action: PayloadAction<string>) => {
            state.mobileNumber = action.payload;
        },
        setSearchName: (state, action: PayloadAction<string>) => {
            state.searchName = action.payload;
        },
        setFullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
       
    },
});

// Export actions and reducer
export const { setPage, setPageSize, setCurrentPage, setPageLimits,setMobileNumber, setSearchName,setFullName } = viewMemberDetailsSlice.actions;
export default viewMemberDetailsSlice.reducer;
