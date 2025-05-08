import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import ProductPage from '@/pages/ProductsPage/ProductsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
