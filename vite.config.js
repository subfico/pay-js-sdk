import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
			outDir: "dist",
		}),
	],
	build: {
		lib: {
			entry: "src/index.tsx",
			name: "subfi-pay-sdk",
			fileName: (format) => `subfi-pay-sdk.${format}.js`,
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
});
