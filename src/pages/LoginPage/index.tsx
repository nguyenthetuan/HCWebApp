// src/pages/LoginPage.tsx
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import request from '@/services/Request';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await request.get('https://reqres.in/signup');
      console.log('Đăng nhập thành công:', response);
      alert('Đăng nhập thành công!');
      navigate('/products');
    } catch (error) {
      console.log('Lỗi đăng nhập:', error);
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };
  

  return (
    <Box className={styles.container}>
      <Paper className={styles.loginBox} elevation={3}>
        <Typography variant="h6" align="center" mb={2}>
          Đăng nhập
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
