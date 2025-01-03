import { defineRecipe } from "@pandacss/dev";

export const textarea = defineRecipe({
    className: "textarea",
    jsx: ["TextareaInput"],
    base: {
        fontFamily: "sans",
        fontWeight: "regular",
        outline: "none",
    },
    variants: {
        resize: {
            horizontal: {
                resize: "horizontal",
            },
            vertical: {
                resize: "vertical",
            },
            none: {
                resize: "none",
            },
            both: {
                resize: "both",
            },
        },
        size: {
            xs: {
                borderRadius: "sm",
                paddingY: "1",
                paddingX: "1.5",
                textStyle: "xs",
            },
            sm: {
                borderRadius: "sm",
                paddingY: "1.5",
                paddingX: "2",
                textStyle: "sm",
            },
            md: {
                borderRadius: "md",
                paddingY: "2",
                paddingX: "3",
                textStyle: "md",
            },
        },
        variant: {
            surface: {
                color: "neutral.12",
                backgroundColor: "surface",
                borderStyle: "solid",
                borderWidth: "thin",

                borderColor: "neutral.a7",

                _hover: {
                    borderColor: "neutral.a8",
                },

                _focus: {
                    borderColor: "colorPalette.a8",

                    _hover: {
                        borderColor: "colorPalette.a8",
                    },
                },

                _placeholder: {
                    color: "neutral.9",
                },
            },
        },
    },
    defaultVariants: {
        resize: "vertical",
    },
});
