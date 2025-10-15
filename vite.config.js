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
});
