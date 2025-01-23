import { anatomy } from "@ark-ui/anatomy/tabs";
import { defineSlotRecipe } from "@pandacss/dev";

export const tabs = defineSlotRecipe({
    className: "tabs",
    slots: anatomy.extendWith("triggerInner").keys(),
    jsx: ["Tabs", "TabsRoot"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
        },
        list: {
            flexShrink: "0",
            display: "flex",
            justifyContent: "flex-start",
            position: "relative",
            borderBottom: "default",
            scrollbarWidth: "none",
        },
        trigger: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: "0",
            userSelect: "none",
            fontFamily: "body",
            fontWeight: "medium",
            position: "relative",
            color: "neutral.a11",
            transition: "common",
            transitionDuration: "moderate",

            _after: {
                content: "''",
                position: "absolute",
                zIndex: "-1",
                backgroundColor: "transparent",
                transition: "common",
                transitionDuration: "moderate",
            },

            _hover: {
                color: "neutral.12",
                _after: {
                    backgroundColor: "neutral.a3",
                },
            },
            _selected: {
                color: "neutral.12",
            },
        },
        triggerInner: {},

        indicator: {
            bottom: "-px",
            height: "0.5",
            backgroundColor: "colorPalette.9",
            width: "var(--width)",
            borderRadius: "full",
        },
        content: {
            position: "relative",
        },
    },
    variants: {
        size: {
            sm: {
                trigger: {
                    paddingX: "2",
                    textStyle: "xs",
                    height: "8",

                    _after: {
                        paddingX: "1",
                        paddingY: "0.5",
                        height: "5",
                        width: "calc(100% -  {spacing.2})",
                        borderRadius: "xs",
                    },
                },
            },
            md: {
                root: {
                    gap: "4",
                },
                trigger: {
                    paddingX: "4",
                    textStyle: "sm",
                    height: "10",
                    gap: "1.5",

                    _after: {
                        paddingX: "2",
                        paddingY: "1",
                        height: "7",
                        width: "calc(100% - {spacing.4})",
                        borderRadius: "sm",
                    },
                },
            },
        },
    },
});
