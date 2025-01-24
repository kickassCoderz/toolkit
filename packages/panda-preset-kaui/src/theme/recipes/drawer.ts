import { anatomy } from "@ark-ui/anatomy/dialog";
import { defineSlotRecipe } from "@pandacss/dev";

const drawerAnatomy = anatomy.extendWith("body", "header", "footer");

const drawerSizeVariable = "--drawer-size";

export const drawer = defineSlotRecipe({
    className: "drawer",
    slots: drawerAnatomy.keys(),
    jsx: ["Drawer", "DrawerRoot"],
    base: {
        backdrop: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "full",
            height: "full",
            backgroundColor: "overlay",
            _open: {
                animationName: "fade-in",
                animationDuration: "slow",
            },
            _closed: {
                animationName: "fade-out",
                animationDuration: "moderate",
            },
        },
        positioner: {
            flexShrink: "0",
            position: "fixed",
            overscrollBehaviorY: "none",
        },
        content: {
            width: "full",
            height: "full",
            display: "flex",
            flexDirection: "column",
            boxShadow: "6",
            position: "relative",
            overflow: "hidden",

            _open: {
                animationDuration: "slowest",
                animationTimingFunction: "ease-in-smooth",
            },
            _closed: {
                animationDuration: "slower",
                animationTimingFunction: "ease-in-smooth",
            },
        },
        header: {
            padding: "2",
            width: "full",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            gap: "2",
        },
        footer: {
            padding: "2",
            width: "full",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            gap: "2",
        },
        body: {
            width: "full",
            minHeight: "0",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            position: "relative",
            padding: "2",
            gap: "4",
        },
        title: {},
        description: {},
        trigger: {},
        closeTrigger: {},
    },
    variants: {
        floating: {
            true: {
                positioner: {
                    padding: "2",
                },
                content: {
                    borderRadius: "lg",
                    border: "default",
                },
            },
        },
        translucent: {
            true: {
                content: {
                    backdropFilter: "auto",
                    backdropBlur: "3xl",
                    backgroundColor: "panel.translucent",
                },
            },
            false: {
                content: {
                    backgroundColor: "panel",
                },
            },
        },
        size: {
            "2xs": {
                positioner: {
                    [drawerSizeVariable]: "{sizes.64}",
                },
            },
            xs: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.xs}",
                },
            },
            sm: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.md}",
                },
            },
            md: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.lg}",
                },
            },
            lg: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.2xl}",
                },
            },
            xl: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.4xl}",
                },
            },
            full: {
                positioner: {
                    [drawerSizeVariable]: "{sizes.64}",
                },
                content: {
                    width: "100vw",
                },
            },
        },
        placement: {
            left: {
                positioner: {
                    top: "0",
                    left: "0",
                    width: `var(${drawerSizeVariable})`,
                    height: "viewportHeight",
                },
                content: {
                    borderRight: "default",
                    _open: {
                        animationName: {
                            base: "slide-from-left-full, fade-in",
                            _rtl: "slide-from-right-full, fade-in",
                        },
                    },
                    _closed: {
                        animationName: {
                            base: "slide-to-left-full, fade-out",
                            _rtl: "slide-to-right-full, fade-out",
                        },
                    },
                },
            },
            right: {
                positioner: {
                    top: "0",
                    right: "0",
                    width: `var(${drawerSizeVariable})`,
                    height: "viewportHeight",
                },
                content: {
                    borderLeft: "default",
                    _open: {
                        animationName: {
                            base: "slide-from-right-full, fade-in",
                            _rtl: "slide-from-left-full, fade-in",
                        },
                    },
                    _closed: {
                        animationName: {
                            base: "slide-to-right-full, fade-out",
                            _rtl: "slide-to-right-full, fade-out",
                        },
                    },
                },
            },
            top: {
                positioner: {
                    top: "0",
                    right: "0",
                    height: `var(${drawerSizeVariable})`,
                    width: "viewportWidth",
                },
                content: {
                    borderBottom: "default",
                    _open: { animationName: "slide-from-top-full, fade-in" },
                    _closed: { animationName: "slide-to-top-full, fade-out" },
                },
            },
            bottom: {
                positioner: {
                    bottom: "0",
                    left: "0",
                    height: `var(${drawerSizeVariable})`,
                    width: "viewportWidth",
                },
                content: {
                    borderTop: "default",
                    _open: { animationName: "slide-from-bottom-full, fade-in" },
                    _closed: { animationName: "slide-to-bottom-full, fade-out" },
                },
            },
        },
    },
    defaultVariants: {
        size: "xs",
        placement: "left",
        translucent: false,
    },
});
