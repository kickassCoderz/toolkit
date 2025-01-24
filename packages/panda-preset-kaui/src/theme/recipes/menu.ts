import { anatomy } from "@ark-ui/anatomy/menu";
import { defineSlotRecipe } from "@pandacss/dev";

export const menu = defineSlotRecipe({
    className: "menu",
    slots: anatomy.keys(),
    jsx: ["Menu", "MenuRoot"],
    base: {
        positioner: {},
        content: {
            backgroundColor: "panel.translucent",
            boxShadow: "5",
            border: "default",
            outline: "none",
            backdropFilter: "auto",
            backdropBlur: "3xl",
        },
        item: {
            display: "flex",
            alignItems: "center",
            gap: "2",
            position: "relative",
            outline: "none",
            userSelect: "none",
            color: "neutral.12",
            fontFamily: "body",
            fontWeight: "regular",

            _disabled: {
                cursor: "not-allowed",
                color: "neutral.a8",
            },
        },
        itemText: {},
        itemIndicator: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        triggerItem: {
            display: "flex",
            alignItems: "center",
            gap: "2",
            position: "relative",
            outline: "none",
            userSelect: "none",
            color: "neutral.12",

            _disabled: {
                cursor: "not-allowed",
                color: "neutral.a8",
            },
        },
        separator: {
            height: "px",
            marginY: "2",
            borderColor: "neutral.a6",
        },
        itemGroupLabel: {
            fontFamily: "body",
            fontWeight: "medium",
            color: "neutral.11",
            userSelect: "none",
        },
    },
    variants: {
        size: {
            xs: {
                content: {
                    padding: "1",
                    borderRadius: "md",
                },
                item: {
                    minHeight: "6",
                    paddingX: "2",
                    textStyle: "xs",
                    borderRadius: "xs",
                },
                triggerItem: {
                    minHeight: "6",
                    paddingX: "2",
                    textStyle: "xs",
                    borderRadius: "xs",
                },
                separator: {
                    marginX: "2",
                },
                itemGroupLabel: {
                    textStyle: "xs",
                    paddingX: "2",
                },
            },
            sm: {
                content: {
                    padding: "2",
                    borderRadius: "lg",
                },
                item: {
                    minHeight: "8",
                    paddingX: "3",
                    textStyle: "sm",
                    borderRadius: "sm",
                },
                triggerItem: {
                    minHeight: "8",
                    paddingX: "3",
                    textStyle: "sm",
                    borderRadius: "sm",
                },
                separator: {
                    marginX: "3",
                },
                itemGroupLabel: {
                    textStyle: "xs",
                    paddingX: "3",
                    paddingY: "1.5",
                },
            },
        },
        variant: {
            solid: {
                item: {
                    _highlighted: {
                        backgroundColor: "colorPalette.9",
                        color: "colorPalette.contrast",
                    },
                },
                triggerItem: {
                    _highlighted: {
                        backgroundColor: "colorPalette.9",
                        color: "colorPalette.contrast",
                    },
                    _open: {
                        backgroundColor: "neutral.a3",
                    },
                },
            },
            soft: {
                item: {
                    _highlighted: {
                        backgroundColor: "colorPalette.a4",
                    },

                    _open: {
                        backgroundColor: "colorPalette.a3",
                    },
                },
            },
        },
    },
    defaultVariants: {
        variant: "solid",
        size: "sm",
    },
});
