import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        includeSource: ['lib/**/*.test.ts'],
        environment: 'jsdom'
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'beau-beau',
            fileName: 'beau-beau'
        },
        sourcemap: true
    },
    define: {
        'import.meta.vitest': 'undefined'
    }
})