import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals:true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',    
    coverage: {
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/setupTests.ts', 'src/**/*.test.{ts,tsx}', 'src/**/*.d.ts'],
    },
  },
})
