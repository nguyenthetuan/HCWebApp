import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'nguyen the tuan',
  email: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Đăng nhập
    login: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    // Đăng xuất
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
    // Cập nhật tên
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Export actions để dùng trong component
export const { login, logout, updateName } = userSlice.actions;

// Export reducer để gắn vào store
export default userSlice.reducer;
