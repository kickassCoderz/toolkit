import { defineTokens } from "@pandacss/dev";

export const radii = defineTokens.radii({
    none: { value: "0rem" },
    xs: { value: "2px" }, //2px
    sm: { value: "4px" }, //4px
    md: { value: "6px" }, //6px
    lg: { value: "8px" }, //8px
    xl: { value: "12px" }, //12px
    "2xl": { value: "16px" }, //16px
    "3xl": { value: "24px" }, //24px
    full: { value: "9999px" },
});
