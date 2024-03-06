import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [reactRefresh()],
  base: '/Youtube-Summarizer/',
  build: {
    outDir: `${__dirname}/docs`,
  },
});
