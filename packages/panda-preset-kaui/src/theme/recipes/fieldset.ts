import { fieldsetAnatomy } from "@ark-ui/react/fieldset";
import { defineSlotRecipe } from "@pandacss/dev";

export const fieldset = defineSlotRecipe({
    className: "fieldset",
    slots: fieldsetAnatomy.extendWith("legendContainer", "content").keys(),
    jsx: ["Fieldset", "FieldsetRoot"],
    base: {
        root: {
            display: "flex",
        },
        legendContainer: {},
        legend: {
            fontFamily: "sans",
            color: "neutral.12",
            fontWeight: "medium",

            _disabled: {
                opacity: "0.5",
            },
        },
        content: {
            display: "flex",
            flexDirection: "column",
        },
        helperText: {
            fontFamily: "sans",
            color: "neutral.11",
        },
        errorText: {
            fontFamily: "sans",
            display: "inline-flex",
            alignItems: "center",
            color: "colorPalette.11",
            gap: "2",
            fontWeight: "medium",
            textStyle: "sm",
        },
    },
    variants: {
        orientation: {
            horizontal: {
                root: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "16",
                },
                content: {},
            },
            vertical: {
                root: {
                    flexDirection: "column",
                    width: "full",
                },
            },
        },
        size: {
            xs: {
                root: { gap: "2" },
                content: { gap: "1.5" },
                legend: { textStyle: "sm" },
                helperText: { textStyle: "xs" },
            },
            sm: {
                root: { gap: "4" },
                content: { gap: "4" },
                legend: { textStyle: "sm" },
                helperText: { textStyle: "sm" },
            },
            md: {
                root: { gap: "6" },
                content: { gap: "4" },
                legend: { textStyle: "md" },
                helperText: { textStyle: "sm" },
            },
        },
    },
});
