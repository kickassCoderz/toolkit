import { Link } from "@tanstack/react-router";
import { BoltIcon } from "lucide-react";

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
        },
    },
});

type LogoProperties = Readonly<
    RecipeVariantProps<typeof logoRecipe> & {
        className?: string | undefined;
    }
>;

export function Logo({ hideText, interactive, size = "md", className }: LogoProperties) {
    const classes = logoRecipe({ hideText, size, interactive });

    return (
        <Link to="/" className={cx(classes.root, className)}>
            <span className={classes.icon}>
                <Icon>
                    <BoltIcon />
                </Icon>
            </span>
            <span className={classes.text}>Kickass Toolkit</span>
        </Link>
    );
}
