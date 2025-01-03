import { defineRecipe } from "@pandacss/dev";

const solidColorVariable = "--typography-solid-color";
const solidBackgroundColorVariable = "--typography-solid-background-color";
const softColorVariable = "--typography-soft-color";
const softBackgroundColorVariable = "--typography-soft-background-color";
const outlinedColorVariable = "--typography-outlined-color";
const outlinedBorderColorVariable = "--typography-outlined-border-color";
const plainColorVariable = "--typography-plain-color";

export const typography = defineRecipe({
    className: "typography",
    jsx: ["Text", "Heading", "Em", "Strong", "Quote", "Link", "Code", "Kbd"],
    base: {},
    variants: {
        truncate: {
            true: {
                truncate: true,
            },
        },
        select: {
            none: {
                userSelect: "none",
            },
        },
        style: {
            normal: {
                fontStyle: "normal",
            },
            italic: {
                fontStyle: "italic",
            },
        },
        align: {
            left: {
                textAlign: "left",
            },
            center: {
                textAlign: "center",
            },
            right: {
                textAlign: "right",
            },
        },
        wrap: {
            nowrap: {
                whiteSpace: "nowrap",
            },
            balance: {
                whiteSpace: "normal",
                textWrap: "balance",
            },
            pretty: {
                whiteSpace: "normal",
                textWrap: "pretty",
            },
        },
        family: {
            inherit: {
                fontFamily: "inherit",
            },
            sans: {
                fontFamily: "sans",
            },
            serif: {
                fontFamily: "serif",
            },
            mono: {
                fontFamily: "mono",
            },
        },
        weight: {
            light: {
                fontWeight: "light",
            },
            regular: {
                fontWeight: "regular",
            },
            medium: {
                fontWeight: "medium",
            },
            semiBold: {
                fontWeight: "semiBold",
            },
            bold: {
                fontWeight: "bold",
            },
        },
        size: {
            inherit: {
                textStyle: "inherit",
            },
            "2xs": {
                textStyle: "2xs",
            },
            xs: {
                textStyle: "xs",
            },
            sm: {
                textStyle: "sm",
            },
            md: {
                textStyle: "md",
            },
            lg: {
                textStyle: "lg",
            },
            xl: {
                textStyle: "xl",
            },
            "2xl": {
                textStyle: "2xl",
            },
            "3xl": {
                textStyle: "3xl",
            },
            "4xl": {
                textStyle: "4xl",
            },
            "5xl": {
                textStyle: "5xl",
            },
        },
        highContrast: {
            true: {
                [solidColorVariable]: "{colors.colorPalette.9}",
                [solidBackgroundColorVariable]: "{colors.colorPalette.contrast}",
                [softColorVariable]: "{colors.colorPalette.12}",
                [softBackgroundColorVariable]: "{colors.colorPalette.a3}",
                [outlinedColorVariable]: "{colors.colorPalette.12}",
                [outlinedBorderColorVariable]: "{colors.colorPalette.a11}",
                [plainColorVariable]: "{colors.colorPalette.12}",
            },
            false: {
                [solidColorVariable]: "{colors.colorPalette.contrast}",
                [solidBackgroundColorVariable]: "{colors.colorPalette.9}",
                [softColorVariable]: "{colors.colorPalette.11}",
                [softBackgroundColorVariable]: "{colors.colorPalette.a3}",
                [outlinedColorVariable]: "{colors.colorPalette.11}",
                [outlinedBorderColorVariable]: "{colors.colorPalette.a8}",
                [plainColorVariable]: "{colors.colorPalette.11}",
            },
        },
        underline: {
            never: {
                textDecoration: "none",
            },
            always: {
                textDecorationStyle: "solid",
                textDecorationThickness: "1px",
                textDecorationColor: "colorPalette.a6",
                textDecorationLine: "underline",
                textUnderlineOffset: "calc(0.025em + 2px)",
            },
            hover: {
                textDecorationColor: "transparent",
                _hover: {
                    textDecorationStyle: "solid",
                    textDecorationThickness: "1px",
                    textDecorationColor: "colorPalette.a6",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "calc(0.025em + 2px)",
                },
            },
        },
        variant: {
            solid: {
                backgroundColor: `var(${solidBackgroundColorVariable})`,
                color: `var(${solidColorVariable})`,
                borderRadius: "calc(0.5px + 0.2em)",
                padding: "0.1em 0.25em",
            },
            soft: {
                backgroundColor: `var(${softBackgroundColorVariable})`,
                color: `var(${softColorVariable})`,
                borderRadius: "calc(0.5px + 0.2em)",
                padding: "0.1em 0.25em",
            },
            outlined: {
                color: `var(${outlinedColorVariable})`,
                border: `1px solid var(${outlinedBorderColorVariable})`,
                borderRadius: "calc(0.5px + 0.2em)",
                padding: "0.1em 0.25em",
            },
            plain: {
                color: `var(${plainColorVariable})`,
            },
        },
        type: {
            em: {
                fontSize: "calc(1.18 * 1em)",
            },
            quote: {
                fontSize: "calc(1.18 * 1em)",
            },
            code: {
                fontSize: "calc(0.95 * 0.95 * 1em)",
            },
            kbd: {
                height: "fit",
                width: "fit",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "text-top",
                position: "relative",
                top: "-0.03em",
                fontSize: "0.75em",
                lineHeight: "1.7em",
                minWidth: "1.75em",
                paddingX: "0.5em",
                paddingBottom: "0.05em",
                wordSpacing: "-0.1em",
                borderRadius: "0.35em",
                color: "colorPalette.12",
                backgroundColor: "colorPalette.1",
                boxShadow:
                    "inset 0 -0.05em 0.5em {colors.neutral.a3}, inset 0 0.05em {colors.neutral.a11}, inset 0 0.25em 0.5em {colors.neutral.a2}, inset 0 -0.1em {colors.overlay.black.a11}, 0 0 0 0.075em {colors.neutral.a7}, 0 0.08em 0.17em {colors.overlay.black.a12}",
            },
        },
    },
});
