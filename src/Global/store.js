import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const myReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
  reducer: { myReducer },
});
