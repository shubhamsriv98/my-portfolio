import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change this to your GitHub repository name when deploying to GitHub Pages.
// Example: if your repo is github.com/shubh/portfolio, set base to '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
});
