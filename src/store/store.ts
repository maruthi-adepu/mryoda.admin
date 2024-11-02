import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from '../store/slices/topbarSlice';
import { viewAllMembersDetails } from '@/api/viewAllMember/viewAllMember';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    [viewAllMembersDetails.reducerPath]: viewAllMembersDetails.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(viewAllMembersDetails.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
