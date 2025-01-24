import { anatomy } from "@ark-ui/anatomy/segment-group";
import { defineSlotRecipe } from "@pandacss/dev";

const rootRadiusVariable = "--segment-group-root-radius";
const itemRadiusVariable = "--segment-group-item-radius";
const indicatorRadiusVariable = "--segment-group-indicator-radius";

export const segmentGroup = defineSlotRecipe({
    className: "segment-group",
    slots: anatomy.keys(),
    jsx: ["SegmentGroupRoot", "SegmentGroup"],
    base: {
        root: {
            width: "fit",
            display: "flex",
            alignItems: "center",
            position: "relative",
            backgroundColor: "neutral.a3",
            // bgGradient: "to-r",
            // gradientFrom: "neutral.a3",
            // gradientTo: "neutral.a3",
            padding: "0.5",
            userSelect: "none",
            isolation: "isolate",
        },
        item: {
            height: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans",
            fontWeight: "medium",
            backgroundColor: "transparent",
            color: "neutral.a11",
            zIndex: "1",
            transition: "common",
            transitionDuration: "moderate",
            whiteSpace: "nowrap",

            _hover: {
                color: "neutral.12",
            },
            _checked: {
                color: "neutral.12",
            },
        },
        itemControl: {
            srOnly: true,
        },
        itemText: {
            display: "flex",
            alignItems: "center",
        },
        indicator: {
            height: "var(--height)",
            width: "var(--width)",
            backgroundColor: "neutral.a5",
        },
        label: {},
    },
    variants: {
        radius: {
            none: {
                root: {
                    borderRadius: "none",
                },
                item: {
                    borderRadius: "none",
                },
                indicator: {
                    borderRadius: "none",
                },
            },
            rounded: {
                root: {
                    borderRadius: `var(${rootRadiusVariable})`,
                },
                item: {
                    borderRadius: `var(${itemRadiusVariable})`,
                },
                indicator: {
                    borderRadius: `var(${indicatorRadiusVariable})`,
                },
            },
            full: {
                root: {
                    borderRadius: "full",
                },
                item: {
                    borderRadius: "full",
                },
                indicator: {
                    borderRadius: "full",
                },
            },
        },
        size: {
            xs: {
                root: {
                    height: "6",
                    [rootRadiusVariable]: "calc({radii.sm} + {spacing.0.5})",
                },
                item: {
                    textStyle: "xs",
                    paddingX: "3",
                    gap: "1",
                    [itemRadiusVariable]: "{radii.sm}",
                },
                itemText: {
                    gap: "inherit",
                },
                indicator: {
                    [indicatorRadiusVariable]: "{radii.sm}",
                },
            },
            sm: {
                root: {
                    height: "8",
                    [rootRadiusVariable]: "calc({radii.sm} + {spacing.0.5})",
                },
                item: {
                    textStyle: "sm",
                    paddingX: "4",
                    gap: "2",
                    [itemRadiusVariable]: "{radii.sm}",
                },
                itemText: {
                    gap: "inherit",
                },
                indicator: {
                    [indicatorRadiusVariable]: "{radii.sm}",
                },
            },
            md: {
                root: {
                    height: "10",
                    [rootRadiusVariable]: "calc({radii.md} + {spacing.0.5})",
                },
                item: {
                    textStyle: "md",
                    paddingX: "4",
                    gap: "3",
                    [itemRadiusVariable]: "{radii.md}",
                },
                itemText: {
                    gap: "inherit",
                },
                indicator: {
                    [indicatorRadiusVariable]: "{radii.md}",
                },
            },
        },
    },
    defaultVariants: {
        radius: "rounded",
        size: "sm",
    },
});
