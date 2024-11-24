import { persistStore } from 'redux-persist';
import { baseApi } from './api/baseApi';
import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from './rootReducer';

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false}).concat(baseApi.middleware),
});

export const persistor =persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
