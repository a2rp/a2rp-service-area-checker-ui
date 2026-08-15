import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
    return {
        plugins: [react()],
        base: "/service-area-checker-ui/",
        build: {
            minify: "esbuild",
            sourcemap: false,
        },
        define: {
            __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
        },
    };
});
