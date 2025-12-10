import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: {
        node: "src/node.ts",
        react: "src/react.tsx",
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  esbuild: {
    keepNames: true,
  },
  test: {
    globals: true,
    browser: {
      enabled: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
      provider: playwright(),
      headless: true,
      screenshotFailures: false, // Disable automatic screenshots on failure
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "generated/",
        "test/",
        "vite.config.js",
      ],
    },
  },
  optimizeDeps: {
    include: ["@testing-library/user-event"],
  },
});
