import { base, node } from "@kickass-coderz/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config({
    files: ["**/*.js"],
    extends: [base, node],
});
