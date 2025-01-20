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
                projectService: true,
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
        name: "Lib",
        files: ["src/**/*.{ts,tsx}"],
        extends: [browser, react],
    },
    prettier,
    {
        ignores: ["dist/", "styled-system/*"],
    }
);
