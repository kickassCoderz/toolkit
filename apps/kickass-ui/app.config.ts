import path from "node:path";

import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
    server: {
        preset: "vercel",
        prerender: {
            routes: ["/"],
            crawlLinks: true,
        },
    },
    vite: {
        resolve: {
            alias: {
                "~shared": path.resolve("app/shared"),
                "~entities": path.resolve("app/entities"),
                "~features": path.resolve("app/features"),
                "~widgets": path.resolve("app/widgets"),
                "~styled-system": path.resolve("styled-system"),
                "~site-content": path.resolve("./.velite"),
            },
        },
    },
});
