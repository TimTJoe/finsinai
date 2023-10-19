import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import requireTransform from "vite-plugin-require-transform";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), requireTransform({}), vitePluginRequire(),],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@page", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@css", replacement: path.resolve(__dirname, "src/assets/css") },
    ],
  },
  server: {
    open: true,
  },
});
