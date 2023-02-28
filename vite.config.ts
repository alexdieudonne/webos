import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest : true,
  },
  // easier readability in the sandbox
  clearScreen: false
});
