import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
    "skeleton-pulse": {
        from: {
            backgroundColor: "neutral.a3",
        },
        to: {
            backgroundColor: "neutral.a4",
        },
    },
    "spinner-leaf-fade": {
        from: {
            opacity: "1",
        },
        to: {
            opacity: "0.25",
        },
    },
});
