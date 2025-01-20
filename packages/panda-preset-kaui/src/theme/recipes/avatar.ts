import { avatarAnatomy } from "@ark-ui/react/avatar";
import { defineSlotRecipe } from "@pandacss/dev";

const radiusVariable = "--avatar-radius";

export const avatar = defineSlotRecipe({
    className: "avatar",
    slots: avatarAnatomy.keys(),
    jsx: ["Avatar", "AvatarRoot"],

    base: {
        root: {
            overflow: "clip",
            flexShrink: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
        },
        image: {
            objectFit: "cover",
        },
        fallback: {
            fontFamily: "body",
            fontWeight: "medium",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
        },
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
                    borderRadius: `var(${radiusVariable})`,
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
                    [radiusVariable]: "{radii.sm}",
                    width: "6",
                    height: "6",
                },
                fallback: {
                    textStyle: "xs",
                },
            },
            sm: {
                root: {
                    [radiusVariable]: "{radii.sm}",
                    width: "8",
                    height: "8",
                },
                fallback: {
                    textStyle: "sm",
                },
            },
            md: {
                root: {
                    [radiusVariable]: "{radii.md}",
                    width: "10",
                    height: "10",
                },
                fallback: {
                    textStyle: "md",
                },
            },
            lg: {
                root: {
                    [radiusVariable]: "{radii.md}",
                    width: "12",
                    height: "12",
                },
                fallback: {
                    textStyle: "lg",
                },
            },
            xl: {
                root: {
                    [radiusVariable]: "{radii.lg}",
                    width: "16",
                    height: "16",
                },
                fallback: {
                    textStyle: "2xl",
                },
            },
            "2xl": {
                root: {
                    [radiusVariable]: "{radii.xl}",
                    width: "20",
                    height: "20",
                },
                fallback: {
                    textStyle: "3xl",
                },
            },
            "3xl": {
                root: {
                    [radiusVariable]: "{radii.xl}",
                    width: "24",
                    height: "24",
                },
                fallback: {
                    textStyle: "3xl",
                },
            },
            "4xl": {
                root: {
                    [radiusVariable]: "{radii.2xl}",
                    width: "32",
                    height: "32",
                },
                fallback: {
                    textStyle: "4xl",
                },
            },
            "5xl": {
                root: {
                    [radiusVariable]: "{radii.2xl}",
                    width: "40",
                    height: "40",
                },
                fallback: {
                    textStyle: "5xl",
                },
            },
        },
        variant: {
            solid: {
                root: {
                    backgroundColor: "colorPalette.9",
                    color: "colorPalette.contrast",
                },
            },
            soft: {
                root: {
                    backgroundColor: "colorPalette.a3",
                    color: "colorPalette.11",
                },
            },
        },
    },
    defaultVariants: {
        size: "md",
        variant: "soft",
        radius: "full",
    },
});
