import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/routers/AppRouter";
import { CssBaseline } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <CssBaseline />
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </I18nextProvider>
  );
}
