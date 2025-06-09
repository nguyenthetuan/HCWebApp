import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import useProductManageReducer from "../feature/useProductManageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    productManage: useProductManageReducer,
  },
});
