import { defineSemanticTokens } from "@pandacss/dev";

export const fonts = defineSemanticTokens.fonts({
    heading: {
        value: "{fonts.sans}",
    },
    body: {
        value: "{fonts.sans}",
    },
});
