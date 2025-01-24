import {
    base,
    node,
    prettier,
    tsTypecheckDisabled,
    tsTypechecked,
} from "@kickass-coderz/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        extends: [base, tsTypechecked],
        files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}", "**/*.d.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        name: "Configs",
        files: ["*.config.{ts,js,mjs,cjs}"],
        extends: [node],
    },
    {
        files: ["**/*.{js,cjs,mjs}"],
        extends: [tsTypecheckDisabled],
    },
    prettier
);
