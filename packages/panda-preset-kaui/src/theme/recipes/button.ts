import { defineRecipe } from "@pandacss/dev";

const borderRadiusVariable = "--button-radius";

const solidColorVariable = "--button-solid-color";
const solidBackgroundColorVariable = "--button-solid-background-color";
const solidFilterBrightnessVariable = "--button-solid-filter-brightness";
const solidFilterSaturateVariable = "--button-solid-filter-saturate";

const surfaceColorVariable = "--button-surface-color";

const softColorVariable = "--button-soft-color";

const ghostColorVariable = "--button-ghost-color";

const outlinedColorVariable = "--button-outlined-color";
const outlinedBackgroundColorVariable = "--button-outlined-background-color";
const outlinedBorderColorVariable = "--button-outlined-border-color";

export const button = defineRecipe({
    className: "button",
    base: {
        all: "unset",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        userSelect: "none",
        verticalAlign: "top",
        fontFamily: "body",
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "medium",
        cursor: "default",
        whiteSpace: "nowrap",
        transition: "common",
        transitionDuration: "moderate",
        height: "fit",

        "&:where(a)": {
            cursor: "pointer",
        },

        _disabled: {
            cursor: "not-allowed",
        },
    },
    variants: {
        justify: {
            start: {
                justifyContent: "flex-start",
            },
            center: {
                justifyContent: "center",
            },
            end: {
                justifyContent: "flex-end",
            },
            between: {
                justifyContent: "space-between",
            },
        },
        fullWidth: {
            true: {
                width: "full",
            },
            false: {
                width: "fit",
            },
        },
        radius: {
            none: {
                borderRadius: "none",
            },
            rounded: {
                borderRadius: `var(${borderRadiusVariable})`,
            },
            full: {
                borderRadius: "full",
            },
        },
        size: {
            xs: {
                textStyle: "xs",
                minHeight: "6",
                paddingX: "2",
                gap: "1",
                [borderRadiusVariable]: "{radii.xs}",

                "& :where(svg)": {
                    fontSize: "md",
                },
            },
            sm: {
                textStyle: "sm",
                minHeight: "8",
                paddingX: "3",
                gap: "2",
                [borderRadiusVariable]: "{radii.sm}",

                "& :where(svg)": {
                    fontSize: "md",
                },
            },
            md: {
                textStyle: "md",
                minHeight: "10",
                paddingX: "4",
                gap: "3",
                [borderRadiusVariable]: "{radii.md}",

                "& :where(svg)": {
                    fontSize: "lg",
                },
            },
            lg: {
                textStyle: "lg",
                minHeight: "12",
                paddingX: "6",
                gap: "3",
                [borderRadiusVariable]: "{radii.lg}",

                "& :where(svg)": {
                    fontSize: "xl",
                },
            },
        },
        highContrast: {
            true: {
                [solidColorVariable]: "{colors.neutral.1}",
                [solidBackgroundColorVariable]: "{colors.colorPalette.12}",
                [surfaceColorVariable]: "{colors.colorPalette.12}",
                [softColorVariable]: "{colors.colorPalette.12}",
                [ghostColorVariable]: "{colors.colorPalette.12}",
                [outlinedColorVariable]: "{colors.colorPalette.12}",
                [outlinedBackgroundColorVariable]: "transparent",
                [outlinedBorderColorVariable]: "{colors.colorPalette.a11}",

                _hover: {
                    [solidBackgroundColorVariable]: "{colors.colorPalette.12}",
                    [solidFilterBrightnessVariable]: "1.18",
                    [solidFilterSaturateVariable]: "1.3",
                    [outlinedBackgroundColorVariable]: "{colors.colorPalette.a2}",
                    // [outlinedBorderColorVariable]: "{colors.colorPalette.a11}",
                },

                _active: {
                    [solidFilterBrightnessVariable]: "0.95",
                    [solidFilterSaturateVariable]: "1.2",
                    [outlinedBackgroundColorVariable]: "{colors.colorPalette.a3}",
                    // [outlinedBorderColorVariable]: "{colors.colorPalette.a12}",
                },
            },
            false: {
                [solidColorVariable]: "{colors.colorPalette.contrast}",
                [solidBackgroundColorVariable]: "{colors.colorPalette.9}",
                [surfaceColorVariable]: "{colors.colorPalette.11}",
                [softColorVariable]: "{colors.colorPalette.11}",
                [ghostColorVariable]: "{colors.colorPalette.11}",
                [outlinedColorVariable]: "{colors.colorPalette.11}",
                [outlinedBackgroundColorVariable]: "transparent",
                [outlinedBorderColorVariable]: "{colors.colorPalette.a8}",

                _hover: {
                    [solidBackgroundColorVariable]: "{colors.colorPalette.10}",
                    [solidFilterBrightnessVariable]: "/*-*/ /*-*/",
                    [solidFilterSaturateVariable]: "/*-*/ /*-*/",
                    [outlinedBackgroundColorVariable]: "{colors.colorPalette.a2}",
                },

                _active: {
                    [solidBackgroundColorVariable]: "{colors.colorPalette.10}",
                    [solidFilterBrightnessVariable]: "1.08",
                    [solidFilterSaturateVariable]: "/*-*/ /*-*/",
                    [outlinedBackgroundColorVariable]: "{colors.colorPalette.a3}",
                },
            },
        },
        variant: {
            solid: {
                color: `var(${solidColorVariable})`,
                backgroundColor: `var(${solidBackgroundColorVariable})`,

                "& :where(svg)": {
                    opacity: "0.9",
                },

                _hover: {
                    filter: "auto",
                    brightness: `var(${solidFilterBrightnessVariable})`,
                    saturation: `var(${solidFilterSaturateVariable})`,
                },

                _active: {
                    filter: "auto",
                    brightness: `var(${solidFilterBrightnessVariable})`,
                    saturation: `var(${solidFilterSaturateVariable})`,
                },
            },
            soft: {
                color: `var(${softColorVariable})`,
                backgroundColor: "colorPalette.a3",

                "& :where(svg)": {
                    opacity: "0.9",
                },

                _hover: {
                    backgroundColor: "colorPalette.a4",
                },
                _active: {
                    backgroundColor: "colorPalette.a5",
                },
            },
            ghost: {
                color: `var(${ghostColorVariable})`,
                backgroundColor: "transparent",

                "& :where(svg)": {
                    opacity: "0.9",
                },

                _hover: {
                    backgroundColor: "colorPalette.a3",
                },
                _active: {
                    backgroundColor: "colorPalette.a4",
                },
            },
            surface: {
                color: `var(${surfaceColorVariable})`,
                backgroundColor: "colorPalette.surface",
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: "colorPalette.a7",

                "& :where(svg)": {
                    opacity: "0.9",
                },

                _hover: {
                    borderColor: "colorPalette.a8",
                },

                _active: {
                    backgroundColor: "colorPalette.a3",
                },
            },
            outlined: {
                color: `var(${outlinedColorVariable})`,
                backgroundColor: `var(${outlinedBackgroundColorVariable})`,
                borderStyle: "solid",
                borderWidth: "thin",
                borderColor: `var(${outlinedBorderColorVariable})`,
            },
        },
    },
});
