import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Webhost_resume/", // ← ADD THIS LINE
  plugins: [react()],
});