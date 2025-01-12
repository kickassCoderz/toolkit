import { Link, type LinkOptions } from "@tanstack/react-router";
import { SwatchBookIcon } from "lucide-react";
import type React from "react";

import { Icon } from "~shared/design-system/icon";
import { cx, type RecipeVariantProps, sva } from "~styled-system/css";

const logoRecipe = sva({
    slots: ["root", "icon", "text"],
    base: {
        root: {
            outline: "none",
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            userSelect: "none",
            width: "fit",
        },
        icon: {
            backgroundColor: "accent.9",
            color: "accent.contrast",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontWeight: "bold",
            fontFamily: "sans",
            color: "neutral.12",
            whiteSpace: "nowrap",
        },
    },
    variants: {
        hideText: {
            true: {
                text: {
                    srOnly: true,
                },
            },
        },
        interactive: {
            true: {
                root: {
                    maskImage: "linear-gradient(60deg,black 25%,rgba(0, 0, 0, 0.2) 50%,black 75%)",
                    maskSize: "400%",
                    maskPosition: "0%",

                    _hover: {
                        maskPosition: "100%",
                    },

                    _focusVisible: {
                        maskPosition: "100%",
                    },
                },
            },
        },
        size: {
            sm: {
                root: {
                    gap: "2",
                    transition: "mask-position 1s ease",
                },
                icon: {
                    width: "7",
                    height: "7",
                    borderRadius: "md",
                    fontSize: "md",
                },
                text: {
                    textStyle: "md",
                },
            },
            md: {
                root: {
                    gap: "2",
                    transition: "mask-position 1s ease",
                },
                icon: {
                    width: "8",
                    height: "8",
                    borderRadius: "xl",
                    fontSize: "md",
                },
                text: {
                    textStyle: "xl",
                },
            },
            lg: {
                root: {
                    gap: "4",
                    transition: "mask-position 0.7s ease",
                },
                icon: {
                    width: "12",
                    height: "12",
                    borderRadius: "2xl",
                    fontSize: "3xl",
                },
                text: {
                    textStyle: "3xl",
                },
            },
            xl: {
                root: {
                    gap: "4",
                    transition: "mask-position 0.7s ease",
                },
                icon: {
                    width: "16",
                    height: "16",
                    borderRadius: "3xl",
                    fontSize: "4xl",
                },
                text: { textStyle: "4xl" },
            },
        },
    },
});

type LogoProperties = Readonly<
    LinkOptions &
        RecipeVariantProps<typeof logoRecipe> & {
            className?: string | undefined;
            icon?: React.JSX.Element;
            label?: React.ReactNode;
        }
>;

export function Logo({
    hideText,
    interactive,
    size = "md",
    icon = (
        <Icon>
            <SwatchBookIcon />
        </Icon>
    ),
    label = "Kickass UI",
    to = "/",
    className,
    ...rest
}: LogoProperties) {
    const classes = logoRecipe({ hideText, size, interactive });

    return (
        <Link to={to} {...rest} className={cx(classes.root, className)}>
            <span className={classes.icon}>{icon}</span>
            <span className={classes.text}>{label}</span>
        </Link>
    );
}
