import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductTab from "@/pages/ProductsPage/ProductTabs";
import RequireAuth from "@/components/common/RequireAuth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/products"
        element={
          <RequireAuth>
            <ProductTab />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
