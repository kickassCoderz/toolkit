import { defineSlotRecipe } from "@pandacss/dev";

export const dataList = defineSlotRecipe({
    className: "data-list",
    slots: ["root", "item", "itemLabel", "itemValue"],
    jsx: ["DataList", "DataListRoot"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
        },
        item: {
            display: "grid",
            gridTemplateColumns: "min({spacing.24}) 1fr",
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
        },
        itemLabel: {
            color: "neutral.11",
            fontWeight: "regular",
            fontFamily: "sans",
            display: "flex",
            alignItems: "center",
        },
        itemValue: {
            color: "neutral.12",
            fontWeight: "regular",
            fontFamily: "sans",
            display: "flex",
            alignItems: "center",
        },
    },
    variants: {
        size: {
            sm: {
                root: {
                    gap: "3",
                },
                item: {
                    gap: "3",
                },
                itemLabel: {
                    textStyle: "xs",
                },
                itemValue: {
                    textStyle: "xs",
                },
            },
            md: {
                root: {
                    gap: "4",
                },
                item: {
                    gap: "4",
                },
                itemLabel: {
                    textStyle: "sm",
                },
                itemValue: {
                    textStyle: "sm",
                },
            },
            lg: {
                root: {
                    gap: "5",
                },
                item: {
                    gap: "5",
                },
                itemLabel: {
                    textStyle: "md",
                },
                itemValue: {
                    textStyle: "md",
                },
            },
        },
    },
});
