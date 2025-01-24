import { anatomy } from "@ark-ui/anatomy/tooltip";
import { defineSlotRecipe } from "@pandacss/dev";

const arrowBackgroundVariable = "--arrow-background";
const arrowSizeVariable = "--arrow-size";

export const tooltip = defineSlotRecipe({
    className: "tooltip",
    slots: anatomy.keys(),
    jsx: ["Tooltip", "TooltipRoot"],
    base: {
        trigger: {},
        positioner: {},
        content: {
            userSelect: "none",
            paddingX: "2",
            paddingY: "1",
            borderRadius: "sm",
            backgroundColor: "neutral.12",
            color: "neutral.1",
            fontFamily: "sans",
            textStyle: "xs",
            fontWeight: "regular",
            maxWidth: "80",
        },
        arrow: {
            [arrowSizeVariable]: "{sizes.2}",
            [arrowBackgroundVariable]: "{colors.neutral.12}",
        },
        arrowTip: {},
    },
});
