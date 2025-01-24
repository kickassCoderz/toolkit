import { defineSlotRecipe } from "@pandacss/dev";

const solidColorVariable = "--callout-solid-color";
const solidBackgroundColorVariable = "--callout-solid-background";
const softColorVariable = "--callout-soft-color";
const outlinedColorVariable = "--callout-outlined-color";

export const callout = defineSlotRecipe({
    className: "callout",
    slots: ["root", "icon", "content", "title", "description"],
    jsx: ["Callout", "CalloutRoot"],
    base: {
        root: {
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
            fontFamily: "sans",
        },
        title: {
            fontWeight: "medium",
        },
        description: {
            fontWeight: "regular",
        },
        icon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: "0",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
        },
    },
    variants: {
        highContrast: {
            true: {
                root: {
                    [solidColorVariable]: "{colors.colorPalette.9}",
                    [solidBackgroundColorVariable]: "{colors.colorPalette.contrast}",
                    [softColorVariable]: "{colors.colorPalette.12}",
                    [outlinedColorVariable]: "{colors.colorPalette.12}",
                },
            },
            false: {
                root: {
                    [solidColorVariable]: "{colors.colorPalette.contrast}",
                    [solidBackgroundColorVariable]: "{colors.colorPalette.9}",
                    [softColorVariable]: "{colors.colorPalette.11}",
                    [outlinedColorVariable]: "{colors.colorPalette.11}",
                },
            },
        },
        variant: {
            solid: {
                root: {
                    backgroundColor: `var(${solidBackgroundColorVariable})`,
                    color: `var(${solidColorVariable})`,
                },
            },
            soft: {
                root: {
                    backgroundColor: "colorPalette.a3",
                    color: `var(${softColorVariable})`,
                },
            },
            outlined: {
                root: {
                    color: `var(${outlinedColorVariable})`,
                    border: "1px solid {colors.colorPalette.a7}",
                },
            },
            surface: {
                root: {
                    color: `var(${outlinedColorVariable})`,
                    border: "1px solid {colors.colorPalette.a6}",
                    backgroundColor: "colorPalette.surface",
                },
            },
        },
        size: {
            sm: {
                root: {
                    gap: "2",
                    px: "3",
                    py: "3",
                    textStyle: "xs",
                    borderRadius: "md",
                },

                icon: {
                    textStyle: "lg",
                },
            },
            md: {
                root: {
                    gap: "3",
                    px: "4",
                    py: "4",
                    textStyle: "sm",
                    borderRadius: "lg",
                },
                icon: {
                    textStyle: "xl",
                },
            },
            lg: {
                root: {
                    gap: "3",
                    px: "5",
                    py: "5",
                    textStyle: "md",
                    borderRadius: "xl",
                },
                icon: {
                    textStyle: "2xl",
                },
            },
        },
    },
    defaultVariants: {
        variant: "soft",
        size: "md",
        highContrast: false,
    },
});
