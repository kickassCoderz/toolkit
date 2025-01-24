import { defineTokens } from "@pandacss/dev";

import { spacing } from "./spacing";

const largeSizes = {
    xs: { value: "20rem" }, // 320px
    sm: { value: "24rem" }, // 384px
    md: { value: "28rem" }, //  448px
    lg: { value: "32rem" }, // 512px
    xl: { value: "36rem" }, // 576px
    "2xl": { value: "42rem" }, // 672px
    "3xl": { value: "48rem" }, // 768px
    "4xl": { value: "56rem" }, // 896px
    "5xl": { value: "64rem" }, // 1024px
    "6xl": { value: "72rem" }, // 1152px
    "7xl": { value: "80rem" }, // 1280px
    "8xl": { value: "90rem" }, // 1440px
};

export const sizes = defineTokens.sizes({
    ...spacing,
    ...largeSizes,
    viewportWidth: { value: "100dvw" },
    viewportHeight: { value: "100dvh" },
    prose: { value: "65ch" },
    full: { value: "100%" },
    min: { value: "min-content" },
    max: { value: "max-content" },
    fit: { value: "fit-content" },
});
