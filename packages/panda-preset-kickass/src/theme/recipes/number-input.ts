import { numberInputAnatomy } from "@ark-ui/react/number-input";
import { defineSlotRecipe } from "@pandacss/dev";

const borderRadiusVariable = "--number-input-radius";

export const numberInput = defineSlotRecipe({
    className: "number-input",
    slots: numberInputAnatomy.keys(),
    jsx: ["NumberInput", "NumberInputRoot"],
    base: {
        root: {
            position: "relative",
            isolation: "isolate",
            display: "inline-flex",
            flexDirection: "row",
            transition: "common",
            transitionDuration: "fast",
        },
        scrubber: {},
        label: {},
        input: {
            width: "full",
            flexGrow: "1",
            fontFamily: "sans",
            fontWeight: "regular",
            backgroundColor: "transparent",
            outline: "none",
        },
        control: {
            display: "flex",
            flexDirection: "column",
            flexShrink: "0",
        },
        decrementTrigger: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: "1",
            transitionProperty: "background-color",
            transitionDuration: "moderate",

            _disabled: {
                cursor: "not-allowed",
            },
        },
        incrementTrigger: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: "1",
            transitionProperty: "background-color",
            transitionDuration: "moderate",

            _disabled: {
                cursor: "not-allowed",
            },
        },
        valueText: {},
    },
    variants: {
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
                },
                input: {
                    paddingX: "1.5",
                    textStyle: "xs",
                },
                control: {
                    textStyle: "2xs",
                    width: "3",
                },
            },
            sm: {
                root: {
                    height: "8", //32px
                    [borderRadiusVariable]: "{radii.sm}",
                },
                input: {
                    paddingX: "2",
                    textStyle: "sm",
                },
                control: {
                    width: "4",
                    textStyle: "xs",
                },
            },
            md: {
                root: {
                    height: "10", //40px
                    [borderRadiusVariable]: "{radii.md}",
                },
                input: {
                    paddingX: "3",
                    textStyle: "md",
                },
                control: {
                    width: "6",
                    textStyle: "sm",
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
                control: {
                    borderLeft: "default",
                },
                incrementTrigger: {
                    color: "neutral.a11",
                    backgroundColor: "transparent",
                    borderBottom: "default",

                    _hover: {
                        backgroundColor: "neutral.a3",
                    },
                    _active: {
                        backgroundColor: "neutral.a4",
                    },
                },
                decrementTrigger: {
                    color: "neutral.a11",
                    backgroundColor: "transparent",

                    _hover: {
                        backgroundColor: "neutral.a3",
                    },
                    _active: {
                        backgroundColor: "neutral.a4",
                    },
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
                    color: "neutral.a11",
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
        radius: "rounded",
        size: "md",
    },
});
