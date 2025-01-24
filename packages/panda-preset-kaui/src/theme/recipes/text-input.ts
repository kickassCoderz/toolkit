import { defineSlotRecipe } from "@pandacss/dev";

const borderRadiusVariable = "--text-input-radius";

export const textInput = defineSlotRecipe({
    className: "text-input",
    slots: ["root", "input", "slot"],
    jsx: ["TextInput", "TextInputRoot"],
    base: {
        root: {
            display: "flex",
        },
        input: {
            width: "full",
            height: "full",
            fontFamily: "sans",
            fontWeight: "regular",
            backgroundColor: "transparent",
            outline: "none",
        },
        slot: {
            display: "flex",
            alignItems: "center",
        },
    },
    variants: {
        fullWidth: {
            true: {
                root: {
                    width: "full",
                },
            },
        },
        radius: {
            none: {
                root: {
                    borderRadius: "none",
                },
            },
            rounded: {
                root: {
                    borderRadius: `var(${borderRadiusVariable})`,
                },
            },
            full: {
                root: {
                    borderRadius: "full",
                },
            },
        },
        size: {
            xs: {
                root: {
                    height: "6", //24px
                    [borderRadiusVariable]: "{radii.sm}",
                    paddingX: "1.5",
                    gap: "1.5",
                },
                input: {
                    textStyle: "xs",
                },
                slot: {
                    fontSize: "sm",
                },
            },
            sm: {
                root: {
                    height: "8", //32px
                    [borderRadiusVariable]: "{radii.sm}",
                    paddingX: "2",
                    gap: "2",
                },
                input: {
                    textStyle: "sm",
                },
                slot: {
                    fontSize: "md",
                },
            },
            md: {
                root: {
                    height: "10", //40px
                    [borderRadiusVariable]: "{radii.md}",
                    paddingX: "3",
                    gap: "3",
                },
                input: {
                    textStyle: "md",
                },
                slot: {
                    fontSize: "lg",
                },
            },
        },
        variant: {
            surface: {
                root: {
                    borderStyle: "solid",
                    borderWidth: "thin",
                    borderColor: "neutral.a7",
                    backgroundColor: "surface",

                    _hover: {
                        borderColor: "neutral.a8",
                    },
                    _focusWithin: {
                        borderColor: "colorPalette.a8",

                        _hover: {
                            borderColor: "colorPalette.a8",
                        },
                    },
                },
                input: {
                    color: "neutral.12",

                    _placeholder: {
                        color: "neutral.9",
                    },
                },
                slot: {
                    color: "neutral.11",
                },
            },
            classic: {
                root: {
                    boxShadow: "1",
                    backgroundColor: "surface",
                },
                input: {
                    color: "neutral.12",

                    _placeholder: {
                        color: "neutral.9",
                    },
                },
                slot: {
                    color: "neutral.11",
                },
            },
            soft: {
                root: {
                    backgroundColor: "neutral.a3",
                },
                input: {
                    color: "neutral.12",

                    _placeholder: {
                        color: "neutral.9",
                    },
                },
                slot: {
                    color: "neutral.12",
                },
            },
            ghost: {
                root: {
                    backgroundColor: "transparent",

                    _hover: {
                        backgroundColor: "neutral.a3",
                    },

                    _focusWithin: {
                        backgroundColor: "neutral.a3",
                    },
                },
                input: {
                    color: "neutral.12",

                    _placeholder: {
                        color: "neutral.9",
                    },
                },
                slot: {
                    color: "neutral.12",
                },
            },
            plain: {
                root: {
                    backgroundColor: "transparent",
                },
                input: {
                    color: "neutral.12",

                    _placeholder: {
                        color: "neutral.9",
                    },
                },
                slot: {
                    color: "neutral.a11",
                },
            },
        },
    },
    defaultVariants: {
        size: "sm",
        radius: "rounded",
        variant: "surface",
    },
});
