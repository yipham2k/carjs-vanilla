import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "main.js", // Đặt tên cho file entry point (không hash)
        chunkFileNames: "chunks/[name].js", // Đặt tên cho các file chunk
        assetFileNames: "assets/[name][extname]", // Đặt tên cho file assets (CSS, hình ảnh, ...)
      },
    },
  },
});
