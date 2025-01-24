import { defineSlotRecipe } from "@pandacss/dev";

const spinnerAnimationDurationVariable = "--spinner-animation-duration";

export const spinner = defineSlotRecipe({
    className: "spinner",
    slots: ["root", "leaf"],
    jsx: ["Spinner", "SpinnerRoot"],
    base: {
        root: {
            [spinnerAnimationDurationVariable]: "800ms",
            display: "block",
            position: "relative",
            opacity: "0.65",
        },
        leaf: {
            position: "absolute",
            top: "0",
            left: " calc(50% - 12.5% / 2)",
            width: "12.5%",
            height: "full",
            animation: `spinner-leaf-fade var(${spinnerAnimationDurationVariable}) linear infinite`,

            _before: {
                content: "''",
                display: "block",
                width: "full",
                height: "30%",
                borderRadius: "xs",
                backgroundColor: "current",
            },

            "&:where(:nth-child(1))": {
                transform: "rotate(0deg)",
                animationDelay: `calc(-8 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(2))": {
                transform: "rotate(45deg)",
                animationDelay: `calc(-7 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(3))": {
                transform: "rotate(90deg)",
                animationDelay: `calc(-6 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(4))": {
                transform: "rotate(135deg)",
                animationDelay: `calc(-5 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(5))": {
                transform: "rotate(180deg)",
                animationDelay: `calc(-4 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(6))": {
                transform: "rotate(225deg)",
                animationDelay: `calc(-3 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(7))": {
                transform: "rotate(270deg)",
                animationDelay: `calc(-2 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
            "&:where(:nth-child(8))": {
                transform: "rotate(315deg)",
                animationDelay: `calc(-1 / 8 * var(${spinnerAnimationDurationVariable}))`,
            },
        },
    },
    variants: {
        size: {
            xs: {
                root: {
                    width: "3",
                    height: "3",
                },
            },
            sm: {
                root: {
                    width: "4",
                    height: "4",
                },
            },
            md: {
                root: {
                    width: "calc(1.25 * {sizes.4})",
                    height: "calc(1.25 * {sizes.4})",
                },
            },
        },
    },
});
