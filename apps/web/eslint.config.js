import {
    base,
    browser,
    node,
    prettier,
    react,
    tsTypecheckDisabled,
    tsTypechecked,
} from "@kickass-coderz/eslint-config";
import pluginRouter from "@tanstack/eslint-plugin-router";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        name: "Base",
        files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
        extends: [base, tsTypechecked],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.app.json", "./tsconfig.node.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.{js,cjs,mjs}"],
        extends: [tsTypecheckDisabled],
    },
    {
        name: "Configs",
        files: ["*.config.{ts,js,mjs,cjs}"],
        extends: [node],
    },
    {
        name: "App",
        files: ["app/**/*.{ts,tsx}"],
        extends: [browser, react, pluginRouter.configs["flat/recommended"]],
        plugins: {
            "react-refresh": reactRefresh,
        },
        rules: {
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        },
    },
    prettier,
    {
        ignores: [".vercel/", ".output/", ".vinxi/", "styled-system/*", "app/routeTree.gen.ts"],
    }
);
