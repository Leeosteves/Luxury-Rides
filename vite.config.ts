import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "./src"),
      "~/@types": path.resolve(__dirname, "./src/@types"),
      "~/assets": path.resolve(__dirname, "./src/assets"),
      "~/components": path.resolve(__dirname, "./src/components"),
      "~/config": path.resolve(__dirname, "./src/config"),
      "~/constants": path.resolve(__dirname, "./src/constants"),
      "~/context": path.resolve(__dirname, "./src/context"),
      "~/hooks": path.resolve(__dirname, "./src/hooks"),
      "~/navigation": path.resolve(__dirname, "./src/navigation"),
      "~/pages": path.resolve(__dirname, "./src/pages"),
      "~/sass": path.resolve(__dirname, "./src/sass"),
      "~/services": path.resolve(__dirname, "./src/services"),
      "~/utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
});
