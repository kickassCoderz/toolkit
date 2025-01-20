import { defineRecipe } from "@pandacss/dev";

export const skeleton = defineRecipe({
    className: "skeleton",
    jsx: ["Skeleton"],
    base: {
        borderRadius: "sm",
    },
    variants: {
        isLoading: {
            true: {
                backgroundImage: "none!",
                backgroundClip: "border-box!",
                border: "none!",
                boxShadow: "none!",
                boxDecorationBreak: "clone!",
                color: "transparent!",
                outline: "none!",
                pointerEvents: "none!",
                userSelect: "none!",

                /*
                 * Take font differences out of equation for inline Skeletons that just wrap text.
                 * This makes the dimensions consistent between the following non-Skeleton and Skeleton text:
                 * ```
                 * <Text>Example text</Text>
                 *
                 * <Text>
                 *   <Skeleton>Example text</Skeleton>
                 * </Text>
                 * ```
                 *
                 * Will NOT collapse Skeletons as the browsers use line-height on inline elements just for alignment.
                 */
                "&:where([data-inline-skeleton])": {
                    lineHeight: "0",
                    /* Font metrics on Arial yield much nicer height for the text background bounding box */
                    fontFamily: " Arial, sans-serif",
                },

                "&:where(:empty)": {
                    display: "block",
                    height: "3",
                },
                "*,&::before,&::after": {
                    visibility: "hidden",
                },
            },
        },
        variant: {
            pulse: {
                animation: "skeleton-pulse!",
            },
        },
    },
});
