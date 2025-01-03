import { defineSlotRecipe } from "@pandacss/dev";

export const table = defineSlotRecipe({
    className: "table",
    slots: [
        "root",
        "header",
        "body",
        "row",
        "cell",
        "columnHeaderCell",
        "rowHeaderCell",
        "caption",
    ],
    jsx: ["TableRoot"],
    base: {
        root: {
            " --table-row-box-shadow": "inset 0 -1px {colors.neutral.a6}",
            width: "full",
            textAlign: "left",
            verticalAlign: "top",
            borderCollapse: "separate",
            borderRadius: "calc(var(--table-border-radius) - 1px)",
            borderSpacing: "0",
            // Makes "height: 100%" work on content inside cells
            height: "0",
            fontFamily: "sans",
        },
        header: {
            verticalAlign: "inherit",
        },
        body: {
            verticalAlign: "inherit",
        },
        row: {
            verticalAlign: "inherit",
            color: "neutral.12",
        },
        cell: {
            verticalAlign: "inherit",
            padding: "var(--table-cell-padding)",
            /* Works as min-height */
            height: "var(--table-cell-min-height)",
            boxShadow: " var(--table-row-box-shadow)",
            backgroundColor: " var(--table-row-background-color)",
        },
        columnHeaderCell: {
            fontWeight: "bold",
        },
        rowHeaderCell: {
            fontWeight: "regular",
        },
        caption: {
            captionSide: "bottom",
            fontFamily: "sans",
            fontWeight: "regular",
            color: "neutral.11",
            textStyle: "xs",
            paddingTop: "4",
        },
    },
    variants: {
        interactive: {
            true: {
                body: {
                    "& tr": {
                        _hover: {
                            backgroundColor: "neutral.a2",
                        },
                    },
                },
            },
        },
        size: {
            xs: {
                root: {
                    "--table-border-radius": "{radii.md}",
                    " --table-cell-padding": "{spacing.2}",
                    "--table-cell-min-height": "{size.9}",
                    textStyle: "sm",
                },
            },
            sm: {
                root: {
                    "--table-border-radius": "{radii.lg}",
                    "--table-cell-padding": "{spacing.3}",
                    "--table-cell-min-height": "{size.11}",
                    textStyle: "sm",
                },
            },
            md: {
                root: {
                    "--table-border-radius": "{radii.lg}",
                    "--table-cell-padding": "{spacing.3} {spacing.4}", //12 16
                    "--table-cell-min-height": "{size.12}",
                    textStyle: "md",
                },
            },
        },
        variant: {
            surface: {
                root: {
                    border: "default",
                    borderRadius: "var(--table-border-radius)",
                    backgroundColor: "panel",
                    backgroundClip: "padding-box",
                    position: "relative",
                    // add backgroup filter blurt
                    overflow: "hidden",
                },
                header: {
                    "--table-row-background-color": "{colors.neutral.a2}",
                },
                body: {
                    "& :where(.table__row:last-of-type)": {
                        "--table-row-box-shadow": "none",
                    },
                },
            },
            ghost: {
                root: {
                    "--table-row-background-color": "transparent",
                },
            },
        },
    },
    defaultVariants: {
        size: "sm",
        variant: "ghost",
    },
});
