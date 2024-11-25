import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer} from "redux-persist";
import storageEngine from "./forPersistErrorSolve";
import { baseApi } from "./api/baseApi";
import authSlice from "./slice/authSlice";



const persistConfig = {
    key: 'users',
    version: 1,
    storage:storageEngine,
  }


const reducer=combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    authUI:authSlice
})

export const persistedReducer = persistReducer(persistConfig, reducer)

