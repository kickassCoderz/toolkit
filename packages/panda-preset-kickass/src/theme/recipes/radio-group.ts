import { radioGroupAnatomy } from "@ark-ui/react/radio-group";
import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroup = defineSlotRecipe({
    className: "radio-group",
    slots: radioGroupAnatomy.keys(),
    jsx: ["RadioGroup", "RadioGroupRoot"],
    base: {
        root: {
            display: "flex",
            flexWrap: "wrap",

            _horizontal: {
                flexDirection: "row",
            },

            _vertical: {
                flexDirection: "column",
            },
        },
        indicator: {},
        label: {},
        item: {
            display: "flex",
            alignItems: "center",
            gap: "2",
            width: "fit",
            userSelect: "none",
        },
        itemControl: {
            borderRadius: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            _before: {
                content: "''",
                borderRadius: "full",
                backgroundColor: "transparent",
            },
        },
        itemText: {
            fontFamily: "sans",
            fontWeight: "medium",
        },
    },
    variants: {
        size: {
            xs: {
                root: {
                    _horizontal: {
                        gap: "3",
                    },
                },
                item: {
                    borderRadius: "md",
                    gap: "1.5",
                },
                itemText: {
                    textStyle: "xs",
                },
                itemControl: {
                    width: "3.5",
                    height: "3.5",

                    _before: {
                        width: "5.6px",
                        height: "5.6px",
                    },
                }, //14
            },
            sm: {
                root: {
                    _horizontal: {
                        gap: "4",
                    },
                },
                item: {
                    borderRadius: "md",
                    gap: "1.5",
                },
                itemText: {
                    textStyle: "sm",
                },
                itemControl: {
                    width: "4",
                    height: "4",

                    _before: {
                        width: "6.6px",
                        height: "6.6px",
                    },
                }, //16
            },
            md: {
                root: {
                    _horizontal: {
                        gap: "6",
                    },
                },
                item: {
                    borderRadius: "lg",
                    gap: "2",
                },
                itemText: {
                    textStyle: "md",
                },
                itemControl: {
                    width: "5",
                    height: "5",

                    _before: {
                        width: "2",
                        height: "2",
                    },
                }, //20
            },
        },
        variant: {
            surface: {
                itemControl: {
                    backgroundColor: "surface",
                    borderColor: "neutral.a7",
                    borderWidth: "thin",
                    borderStyle: "solid",

                    _checked: {
                        backgroundColor: "colorPalette.9",

                        _before: {
                            backgroundColor: "colorPalette.contrast",
                        },
                    },
                },
            },
            soft: {
                itemControl: {
                    backgroundColor: "neutral.a4",

                    _checked: {
                        backgroundColor: "colorPalette.a4",

                        _before: {
                            backgroundColor: "colorPalette.a11",
                        },
                    },
                },
            },
        },
    },
});
