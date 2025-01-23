import tseslint from "typescript-eslint";

import { base, node, prettier } from "./index.js";

export default tseslint.config({
    files: ["**/*.js"],
    extends: [base, node, prettier],
});
