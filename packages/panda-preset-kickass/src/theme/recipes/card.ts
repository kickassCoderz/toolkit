import { defineSlotRecipe } from "@pandacss/dev";

const backgroundColorVariable = "--card-background-color";
const radiusVariable = "--card-radius";

export const card = defineSlotRecipe({
    className: "card",
    slots: ["root", "header", "body", "footer"],
    jsx: ["Card", "CardRoot"],
    base: {
        root: {
            outline: "none",
            isolation: "isolate",
            position: "relative",
            borderRadius: `var(${radiusVariable})`,
            display: "flex",
            flexDirection: "column",

            _before: {
                content: '""',
                pointerEvents: "none",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                zIndex: "hide",
                borderRadius: `var(${radiusVariable})`,
                backgroundColor: `var(${backgroundColorVariable})`,
            },
        },
        header: {
            width: "full",
        },
        body: {
            width: "full",
        },
        footer: {
            width: "full",
        },
    },
    variants: {
        translucent: {
            true: {
                root: {
                    _before: {
                        backdropFilter: "auto",
                        backdropBlur: "3xl",
                    },
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
                    borderRadius: `var(${radiusVariable})`,
                },
            },
        },
        size: {
            "2xs": {
                root: {
                    [radiusVariable]: "{radii.md}",
                    padding: "2",
                    gap: "2",
                },
            },
            xs: {
                root: {
                    [radiusVariable]: "{radii.lg}",
                    padding: "3",
                    gap: "3",
                },
            },
            sm: {
                root: {
                    [radiusVariable]: "{radii.lg}",
                    padding: "4",
                    gap: "4",
                },
            },
            md: {
                root: {
                    [radiusVariable]: "{radii.xl}",
                    padding: "6",
                    gap: "6",
                },
            },
            lg: {
                root: {
                    [radiusVariable]: "{radii.xl}",
                    padding: "8",
                    gap: "8",
                },
            },
            xl: {
                root: {
                    [radiusVariable]: "{radii.2xl}",
                    padding: "12",
                    gap: "12",
                },
            },
        },
        variant: {
            surface: {
                root: {
                    "&:where(:not(.card__root--translucent_true))": {
                        [backgroundColorVariable]: "{colors.panel}",
                    },

                    "&:where(.card__root--translucent_true)": {
                        [backgroundColorVariable]: "{colors.panel.translucent}",
                    },

                    borderWidth: "thin",
                    borderStyle: "solid",
                    borderColor: "neutral.a6",
                },
            },
            ghost: {
                root: {
                    [backgroundColorVariable]: "{colors.transparent}",

                    _hover: {
                        [backgroundColorVariable]: "{colors.neutral.a3}",
                    },

                    _active: {
                        [backgroundColorVariable]: "{colors.neutral.a4}",
                    },

                    _open: {
                        [backgroundColorVariable]: "{colors.neutral.a4}",

                        _hover: {
                            [backgroundColorVariable]: "{colors.neutral.a4}",
                        },
                    },

                    _focus: {
                        [backgroundColorVariable]: "{colors.neutral.a3}",
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: "xs",
        radius: "rounded",
        variant: "surface",
        translucent: true,
    },
});
