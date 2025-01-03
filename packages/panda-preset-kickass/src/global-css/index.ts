import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
    html: {
        textRendering: "optimizeLegibility",
        WebkitTapHighlightColor: "transparent",
        overscrollBehavior: "none",
        "--global-font-body": "{fonts.body}",
        "--global-font-mono": "{fonts.mono}",
        "--global-color-border": "{colors.neutral.a6}",
    },
    body: {
        overscrollBehavior: "none",
        width: "full",
        minHeight: "viewportHeight",
        position: "relative",
        color: "neutral.12",
        backgroundColor: "background",
    },

    "*::selection": {
        bg: "accent.a4",
    },
});
