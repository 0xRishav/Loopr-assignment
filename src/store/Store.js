import { configureStore } from "@reduxjs/toolkit";
import { workOrderReducer } from "../features/workOrder/workOrderSlice";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: {
    workOrder: workOrderReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
