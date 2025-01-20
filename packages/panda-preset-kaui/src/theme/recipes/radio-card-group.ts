import { radioGroupAnatomy } from "@ark-ui/react/radio-group";
import { defineSlotRecipe } from "@pandacss/dev";

export const radioCardGroup = defineSlotRecipe({
    className: "radio-card-group",
    slots: radioGroupAnatomy.keys(),
    jsx: ["RadioCardGroup", "RadioCardGroupRoot"],
    base: {
        root: {},
        indicator: {},
        label: {},
        item: {},
        itemControl: {},
        itemText: {},
    },
    variants: {
        size: {
            xs: {
                item: {
                    borderRadius: "md",
                },
                itemText: {},
                itemControl: {}, //14
            },
            sm: {
                item: {
                    borderRadius: "md",
                },
                itemControl: {}, //16
            },
            md: {
                item: {
                    borderRadius: "lg",
                },
                itemControl: {}, //20
            },
        },
        variant: {},
    },
});
