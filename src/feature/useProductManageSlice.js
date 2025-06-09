import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  config: null,
};

const productManageSlice = createSlice({
  name: "productManage",
  initialState,
  reducers: {
    setConfigSlice: (state, action) => {
      state.config = action.payload;
    },
  },
});

// Export actions để dùng trong component
export const { setConfigSlice } = productManageSlice.actions;

// Export reducer để gắn vào store
export default productManageSlice.reducer;
