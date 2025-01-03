import tseslint from "typescript-eslint";

import { base, node } from "./index.js";

export default tseslint.config({
    files: ["**/*.js"],
    extends: [base, node],
});
