import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  config: {},
};

const productManageSlice = createSlice({
  name: "productManage",
  initialState,
  reducers: {
    setConfigSlice: (state, action) => {
      console.log("action", action);

      state.config = action.payload.config;
    },
  },
});

// Export actions để dùng trong component
export const { setConfigSlice } = productManageSlice.actions;

// Export reducer để gắn vào store
export default productManageSlice.reducer;
