import { defineSemanticTokens } from "@pandacss/dev";

import { colors } from "./colors";
import { fonts } from "./typography";

export const semanticTokens = defineSemanticTokens({
    colors,
    fonts,
});
