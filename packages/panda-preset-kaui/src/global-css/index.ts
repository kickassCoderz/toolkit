import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
    html: {
        textRendering: "optimizeLegibility",
        WebkitTapHighlightColor: "transparent",
        overscrollBehavior: "none",
        "--global-font-body": "{fonts.body}",
        "--global-font-mono": "{fonts.mono}",
        "--global-color-border": "{colors.neutral.a6}",

        scrollbarWidth: "thin",
        scrollbarColor: "{colors.neutral.a8} {colors.neutral.a3}",

        _scrollbar: {
            width: "1.5",
        },
        _scrollbarTrack: {
            background: "neutral.a3",
        },
        _scrollbarThumb: {
            background: "neutral.a8",
            borderRadius: "md",
        },
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
