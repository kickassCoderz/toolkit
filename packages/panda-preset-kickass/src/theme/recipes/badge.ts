import { defineRecipe } from "@pandacss/dev";

const badgeRadiusVariable = "--badge-radius";

export const badge = defineRecipe({
    className: "badge",
    jsx: ["Badge"],
    base: {
        userSelect: "none",
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        fontFamily: "sans",
        fontWeight: "medium",
        flexShrink: "0",
        height: "fit",
        width: "fit",
    },
    variants: {
        size: {
            xs: {
                textStyle: "xs",
                paddingX: "1.5",
                paddingY: "0.5",
                gap: "1.5",
                [badgeRadiusVariable]: "{radii.xs}",
            },
            sm: {
                textStyle: "xs",
                paddingY: "1",
                paddingX: "2",
                gap: "1.5",
                [badgeRadiusVariable]: "{radii.sm}",
            },
            md: {
                textStyle: "sm",
                paddingY: "1",
                paddingX: "2.5",
                gap: "2",
                [badgeRadiusVariable]: "{radii.sm}",
            },
        },
        radius: {
            none: {
                borderRadius: "none",
            },
            rounded: {
                borderRadius: `var(${badgeRadiusVariable})`,
            },
            full: {
                borderRadius: "full",
            },
        },
        variant: {
            solid: {
                backgroundColor: "colorPalette.9",
                color: "colorPalette.contrast",
            },
            soft: {
                backgroundColor: "colorPalette.a3",
                color: "colorPalette.a11",
            },
            surface: {
                backgroundColor: "colorPalette.surface",
                boxShadow: "inset 0 0 0 1px {colors.colorPalette.a6}",
                color: "colorPalette.a11",
            },
            outlined: {
                boxShadow: " inset 0 0 0 1px {colors.colorPalette.a8}",
                color: "colorPalette.a11",
            },
        },
    },
});
