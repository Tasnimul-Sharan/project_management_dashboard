import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer} from "redux-persist";
import storageEngine from "./forPersistErrorSolve";
import { baseApi } from "./api/baseApi";


const persistConfig = {
    key: 'users',
    version: 1,
    storage:storageEngine,
  }


const reducer=combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
   
})

export const persistedReducer = persistReducer(persistConfig, reducer)

