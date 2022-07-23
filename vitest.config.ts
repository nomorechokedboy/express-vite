import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@libs': resolve(__dirname, 'src', 'libs'),
    },
    clearMocks: true,
    coverage: {
      //   all: true,
      allowExternal: false,
      clean: true,
      enabled: true,
      excludeNodeModules: true,
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/build/**',
        '**/*.spec.ts',
      ],
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'node',
  },
});
