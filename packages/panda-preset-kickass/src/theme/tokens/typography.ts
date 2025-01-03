import { defineTokens } from "@pandacss/dev";

export const fontSizes = defineTokens.fontSizes({
    "2xs": {
        value: "0.625rem", //10px
    },
    xs: {
        value: "0.75rem", //12px
    },
    sm: {
        value: "0.875rem", //14px
    },
    md: {
        value: "1rem", //16px
    },
    lg: {
        value: "1.125rem", //18px
    },
    xl: {
        value: "1.25rem", //20px
    },
    "2xl": {
        value: "1.5rem", //24px
    },
    "3xl": {
        value: "1.75rem", //28px
    },
    "4xl": {
        value: "2.25rem", //36px
    },
    "5xl": {
        value: "3.75rem", //60px
    },
});

export const fontWeights = defineTokens.fontWeights({
    light: {
        value: "300",
    },
    regular: {
        value: "400",
    },
    medium: {
        value: "500",
    },
    semiBold: {
        value: "600",
    },
    bold: {
        value: "700",
    },
});

export const letterSpacings = defineTokens.letterSpacings({
    "2xs": {
        value: "0.00125em",
    },
    xs: {
        value: "0.0025em",
    },
    sm: {
        value: "0em",
    },
    md: {
        value: "0em",
    },
    lg: {
        value: "-0.0025em",
    },
    xl: {
        value: "-0.005em",
    },
    "2xl": {
        value: "-0.00625em",
    },
    "3xl": {
        value: "-0.0075em",
    },
    "4xl": {
        value: "-0.01em",
    },
    "5xl": {
        value: "-0.025em",
    },
});

export const lineHeights = defineTokens.lineHeights({
    "2xs": {
        value: "0.875rem", //14px
    },
    xs: {
        value: "1rem", //16px
    },
    sm: {
        value: "1.25rem", //20px
    },
    md: {
        value: "1.5rem", //24px
    },
    lg: {
        value: "1.625rem", //26px
    },
    xl: {
        value: "1.75rem", //28px
    },
    "2xl": {
        value: "1.875rem", //30px
    },
    "3xl": {
        value: "2.25rem", //36px
    },
    "4xl": {
        value: "2.5rem", //40px
    },
    "5xl": {
        value: "3.75rem", //60px
    },
});

export const fonts = defineTokens.fonts({
    sans: {
        value: [
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            '"Noto Sans"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
    },
    serif: {
        value: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
    },
    mono: {
        value: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace",
        ],
    },
});
