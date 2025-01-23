import { anatomy } from "@ark-ui/anatomy/switch";
import { defineSlotRecipe } from "@pandacss/dev";

export const switchRecipe = defineSlotRecipe({
    className: "switch",
    slots: anatomy.keys(),
    jsx: ["Switch", "SwitchRoot"],
    base: {
        root: {
            display: "flex",
            alignItems: "center",
            gap: "2",
            userSelect: "none",
            width: "fit",
        },
        label: {
            fontFamily: "body",
            fontWeight: "medium",
            color: "neutral.12",
        },
        control: {
            display: "flex",
            flexShrink: "0",
            borderRadius: "full",
            transition: "common",
            transitionDuration: "fast",
        },
        thumb: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "full",
            transitionProperty: "transform, background-color",
            transitionDuration: "fast",

            _checked: {
                transform: "translateX(calc(100% - 2px))",
            },
        },
    },
    variants: {
        size: {
            xs: {
                control: {
                    height: "4",
                    width: "7",
                },
                thumb: {
                    width: "3.5",
                    height: "3.5",
                },
                label: {
                    textStyle: "xs",
                },
            },
            sm: {
                control: {
                    height: "5",
                    width: "9",
                },
                thumb: {
                    width: "4.5",
                    height: "4.5",
                },
                label: {
                    textStyle: "sm",
                },
            },
            md: {
                control: {
                    height: "6",
                    width: "11",
                },
                thumb: {
                    width: "5.5",
                    height: "5.5",
                },
                label: {
                    textStyle: "md",
                },
            },
        },
        variant: {
            surface: {
                control: {
                    border: "1px solid {colors.neutral.a5}",
                    backgroundColor: "neutral.a3",

                    _hover: {
                        backgroundColor: "neutral.a4",
                    },

                    _checked: {
                        backgroundColor: "neutral.a4",
                        backgroundImage:
                            " linear-gradient(to right,{colors.colorPalette.a9} 100%, #0000 60%)",
                    },
                },
                thumb: {
                    backgroundColor: "white",
                    boxShadow:
                        "0 0 1px 1px {colors.black.a2}, 0 1px 1px {colors.black.a1}, 0 2px 4px -1px {colors.black.a1}",

                    _checked: {
                        backgroundColor: "colorPalette.contrast",
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: "sm",
        variant: "surface",
    },
});
