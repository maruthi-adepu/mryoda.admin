import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import topbarReducer from '../store/slices/topbarSlice';

const persistConfig = {
  key: 'topbar',
  storage,
};

const persistedTopbarReducer = persistReducer(persistConfig, topbarReducer);

const store = configureStore({
  reducer: {
    topbar: persistedTopbarReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/REHYDRATE', 'persist/PERSIST'],
        ignoredPaths: ['topbar'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
