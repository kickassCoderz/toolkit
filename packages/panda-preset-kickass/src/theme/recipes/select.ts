import { selectAnatomy } from "@ark-ui/react/select";
import { defineSlotRecipe } from "@pandacss/dev";

export const select = defineSlotRecipe({
    className: "select",
    slots: selectAnatomy.keys(),
    jsx: ["Select", "SelectRoot"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
        },
        label: {
            fontFamily: "sans",
            fontWeight: "medium",
            color: "neutral.12",
        },
        control: {
            width: "full",
        },
        trigger: {
            width: "full",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: "0",
            userSelect: "none",
            verticalAlign: "top",
            fontFamily: "sans",
            textAlign: "start",
            transition: "common",
            transitionDuration: "fast",

            _focusVisible: {
                outlineWidth: "normal",
                outlineStyle: "solid",
                outlineColor: "colorPalette.a8",
            },

            _disabled: {
                cursor: "not-allowed",
            },
        },
        valueText: {
            truncate: true,
        },
        indicator: {
            display: "flex",
            alignItems: "center",
        },
        clearTrigger: {},
        positioner: {},
        content: {
            overflow: "hidden",
            backgroundColor: "panel",
            boxShadow: "5",
            border: "default",
            outline: "none",
        },
        itemGroup: {},
        itemGroupLabel: {
            truncate: true,
            fontWeight: "medium",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        item: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            userSelect: "none",
            fontFamily: "sans",
            gap: "4",

            _disabled: {
                cursor: "not-allowed",
            },
        },
        itemText: {
            truncate: true,
        },
        itemIndicator: {
            display: "flex",
            alignItems: "center",
        },
    },
    variants: {
        hideLabel: {
            true: {
                label: {
                    srOnly: true,
                },
            },
        },

        fullWidth: {
            true: {
                root: {
                    width: "full",
                },
            },
            false: {
                root: {
                    width: "fit",
                },
                control: {
                    width: "fit",
                },
            },
        },
        size: {
            xs: {
                label: {
                    textStyle: "xs",
                },
                trigger: {
                    height: "6",
                    gap: "1",
                    textStyle: "xs",
                    borderRadius: "sm",
                    paddingX: "2",
                },
                content: {
                    padding: "1",
                    borderRadius: "md",
                },
                itemGroupLabel: {
                    paddingX: "2",
                    textStyle: "xs",
                },
                item: {
                    height: "6",
                    textStyle: "xs",
                    borderRadius: "sm",
                    paddingX: "2",
                },
            },
            sm: {
                label: {
                    textStyle: "sm",
                },
                trigger: {
                    height: "8",
                    gap: "1.5",
                    textStyle: "sm",
                    borderRadius: "sm",
                    paddingX: "3",
                },
                content: {
                    padding: "2",
                    borderRadius: "lg",
                },
                itemGroupLabel: {
                    paddingX: "3",
                    textStyle: "sm",
                    height: "8",
                },
                item: {
                    height: "8",
                    textStyle: "sm",
                    borderRadius: "sm",
                    paddingX: "3",
                },
            },
            md: {
                label: {
                    textStyle: "md",
                },
                trigger: {
                    height: "10",
                    gap: "2",
                    textStyle: "md",
                    borderRadius: "md",
                    paddingX: "4",
                },
                content: {
                    padding: "2",
                    borderRadius: "lg",
                },
                itemGroupLabel: {
                    paddingX: "4",
                    textStyle: "md",
                },
                item: {
                    height: "8",
                    textStyle: "md",
                    borderRadius: "sm",
                    paddingX: "4",
                },
            },
        },
        variant: {
            surface: {
                trigger: {
                    color: "neutral.12",
                    backgroundColor: "surface",
                    border: "1px solid {colors.neutral.a7}",

                    _hover: {
                        borderColor: "neutral.a8",
                    },
                    _open: {
                        borderColor: "colorPalette.a8",

                        _hover: {
                            borderColor: "colorPalette.a8",
                        },
                    },
                    _focus: {
                        borderColor: "colorPalette.a8",

                        _hover: {
                            borderColor: "colorPalette.a8",
                        },
                    },
                    _disabled: {
                        color: "neutral.a11",
                        backgroundColor: "neutral.a2",
                        borderColor: "neutral.a6",
                    },

                    _placeholderShown: {
                        color: "neutral.9",
                    },
                },
                indicator: {
                    color: "neutral.12",
                },
            },
            soft: {
                trigger: {
                    color: "colorPalette.12",
                    backgroundColor: "colorPalette.a3",

                    _hover: {
                        backgroundColor: "colorPalette.a4",
                    },
                    _open: {
                        backgroundColor: "colorPalette.a4",
                    },
                    _disabled: {
                        color: "neutral.a11",
                        backgroundColor: "neutral.a3",
                    },
                },
                indicator: {
                    color: "colorPalette.12",
                },
            },
            ghost: {
                trigger: {
                    color: "colorPalette.12",
                    backgroundColor: "transparent",

                    _hover: {
                        backgroundColor: "colorPalette.a3",
                    },
                    _open: {
                        backgroundColor: "colorPalette.a3",
                    },
                    _disabled: {
                        color: "neutral.a11",
                        backgroundColor: "transparent",
                    },
                },
                indicator: {
                    color: "colorPalette.12",
                },
            },
        },
        menuVariant: {
            solid: {
                item: {
                    color: "neutral.12",
                    backgroundColor: "transparent",
                    _highlighted: {
                        backgroundColor: "colorPalette.9",
                        color: "colorPalette.contrast",
                    },
                    _disabled: {
                        color: "neutral.a8",
                    },
                },
            },
            soft: {
                item: {
                    color: "neutral.12",
                    backgroundColor: "transparent",

                    _highlighted: {
                        backgroundColor: "colorPalette.a4",
                        color: "colorPalette.12",
                    },
                    _disabled: {
                        color: "neutral.a8",
                    },
                },
            },
        },
    },
    defaultVariants: {
        fullWidth: false,
        variant: "surface",
        menuVariant: "solid",
    },
});
