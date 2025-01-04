import { defineRecipe } from "@pandacss/dev";

export const section = defineRecipe({
    className: "section",
    jsx: ["Section"],
    base: {
        flexShrink: "0",
    },
    variants: {
        size: {
            xs: {
                paddingY: "6",
            }, //24
            sm: {
                paddingY: "10",
            }, //40
            md: {
                paddingY: "16",
            }, //64
            lg: {
                paddingY: "20",
            },
        },
    },
});
