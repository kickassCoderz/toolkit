import { fieldAnatomy } from "@ark-ui/react/field";
import { defineSlotRecipe } from "@pandacss/dev";

export const inputField = defineSlotRecipe({
    className: "input-field",
    slots: fieldAnatomy.extendWith("labelContainer").keys(),
    jsx: ["InputField", "InputFieldRoot"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
        },
        labelContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1",
        },
        label: {
            fontFamily: "sans",
            fontWeight: "medium",
            color: "neutral.12",
            textStyle: "sm",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
        },
        errorText: {
            fontFamily: "sans",
            fontWeight: "regular",
            textStyle: "xs",
            color: "colorPalette.11",
        },
        helperText: {
            fontFamily: "sans",
            fontWeight: "regular",
            textStyle: "xs",
        },
    },
});
