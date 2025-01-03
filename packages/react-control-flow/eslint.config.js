import {
    base,
    browser,
    prettier,
    react,
    tsTypecheckDisabled,
    tsTypechecked,
} from "@kickass-coderz/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        extends: [base, browser, tsTypechecked, react],
        files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
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
    prettier
);
