// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // <--- Thêm dòng này
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "0.0.0.0", // Bắt buộc để cho phép máy khác (hoặc ngrok) truy cập
    port: 3000,
    strictPort: true,
    cors: true, // Bật CORS để không bị lỗi cross-origin
    // hmr: {
    //   protocol: "wss",
    //   host: "1ffb-14-248-45-52.ngrok-free.app",
    //   clientPort: 443, // Port https của ngrok
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
