import { defineTokens } from "@pandacss/dev";

export const borders = defineTokens.borders({
    none: {
        value: "none",
    },
    default: {
        value: "{borderWidths.thin} solid {colors.neutral.a6}",
    },
});
