import { defineRecipe } from "@pandacss/dev";

const borderRadiusVariable = "--icon-button-radius";

const solidColorVariable = "--icon-button-solid-color";
const solidBackgroundColorVariable = "--icon-button-solid-background-color";
const solidFilterBrightnessVariable = "--icon-button-solid-filter-brightness";
const solidFilterSaturateVariable = "--icon-button-solid-filter-saturate";

const surfaceColorVariable = "--icon-button-surface-color";

const softColorVariable = "--icon-button-soft-color";

const ghostColorVariable = "--icon-button-ghost-color";

const outlinedColorVariable = "--icon-button-outlined-color";
const outlinedBackgroundColorVariable = "--icon-button-outlined-background-color";
const outlinedBorderColorVariable = "--icon-button-outlined-border-color";

export const iconButton = defineRecipe({
    className: "icon-button",
    base: {
        all: "unset",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        verticalAlign: "top",
        fontFamily: "body",
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "medium",
        cursor: "default",
        transition: "common",
        transitionDuration: "moderate",
        flexShrink: "0",

        "&:where(a)": {
            cursor: "pointer",
        },

        _disabled: {
            cursor: "not-allowed",
        },
    },
    variants: {
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
                textStyle: "md",
                height: "6",
                width: "6",
                gap: "1",
                [borderRadiusVariable]: "{radii.xs}",
            },
            sm: {
                textStyle: "md",
                height: "8",
                width: "8",
                gap: "2",
                [borderRadiusVariable]: "{radii.sm}",
            },
            md: {
                textStyle: "lg",
                height: "10",
                width: "10",
                gap: "3",
                [borderRadiusVariable]: "{radii.md}",
            },
            lg: {
                textStyle: "xl",
                height: "12",
                width: "12",
                gap: "3",
                [borderRadiusVariable]: "{radii.lg}",
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
                },

                _active: {
                    [solidFilterBrightnessVariable]: "0.95",
                    [solidFilterSaturateVariable]: "1.2",
                    [outlinedBackgroundColorVariable]: "{colors.colorPalette.a3}",
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
