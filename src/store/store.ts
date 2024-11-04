import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from '../store/slices/topbarSlice';
import { viewAllMembersDetails } from '@/api/viewAllMember/viewAllMember';
import { newMemberShipRegistration } from '@/api/newPrimeRegistration/newPrimeRegistration';

const store = configureStore({
  reducer: {
    topbar: topbarReducer,
    [viewAllMembersDetails.reducerPath]: viewAllMembersDetails.reducer,
    [newMemberShipRegistration.reducerPath]: newMemberShipRegistration.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(viewAllMembersDetails.middleware)
      .concat(newMemberShipRegistration.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
