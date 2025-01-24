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
        extends: [base, node, tsTypechecked],
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
    prettier,
    {
        ignores: ["dist"],
    }
);
