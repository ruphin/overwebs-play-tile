import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/overwebs-play-tile.js',
      formats: ['es'],
      fileName: () => 'overwebs-play-tile.js',
    },
    rollupOptions: {
      // Keep runtime dependencies external so consumers share a single copy
      external: [/^gluonjs(\/.*)?$/, /^overwebs-fonts(\/.*)?$/],
    },
  },
});
