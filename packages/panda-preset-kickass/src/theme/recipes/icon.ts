import { defineRecipe } from "@pandacss/dev";

export const icon = defineRecipe({
    className: "icon",
    jsx: ["Icon"],
    base: {
        overflow: "visible",
        display: "inline-block",
        flexShrink: "0",
        verticalAlign: "middle",
        width: "em",
        height: "em",
        color: "inherit",
        fontSize: "inherit",
    },
});
