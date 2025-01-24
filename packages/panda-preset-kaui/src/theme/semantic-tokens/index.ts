import { defineSemanticTokens } from "@pandacss/dev";

import { colors } from "./colors";
import { shadows } from "./shadows";
import { fonts } from "./typography";

export const semanticTokens = defineSemanticTokens({
    colors,
    fonts,
    shadows,
});
