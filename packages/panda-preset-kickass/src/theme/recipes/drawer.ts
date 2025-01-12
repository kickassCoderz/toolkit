import { dialogAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

const drawerAnatomy = dialogAnatomy.extendWith("body", "header", "footer");

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
            width: "viewportWidth",
            height: "viewportHeight",
            flexShrink: "0",
            position: "fixed",
            top: "0",
            left: "0",
            overscrollBehaviorY: "none",
            display: "flex",
        },
        content: {
            width: "full",
            height: "full",
            display: "flex",
            flexDirection: "column",
            borderRight: "default",
            boxShadow: "6",
            position: "relative",
            overflow: "hidden",
            borderRadius: "md",

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
        },
        title: {},
        description: {},
        trigger: {},
        closeTrigger: {},
    },
    variants: {
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
                content: {
                    maxW: "64",
                },
            },
            xs: {
                content: {
                    maxW: "xs",
                },
            },
            sm: {
                content: {
                    maxW: "md",
                },
            },
            md: {
                content: {
                    maxW: "lg",
                },
            },
            lg: {
                content: {
                    maxW: "2xl",
                },
            },
            xl: {
                content: {
                    maxW: "4xl",
                },
            },
            full: {
                content: {
                    maxW: "100vw",
                },
            },
        },
        placement: {
            left: {
                positioner: {
                    justifyContent: "flex-start",
                },
                content: {
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
                    justifyContent: "flex-end",
                },
                content: {
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
        },
    },
    defaultVariants: {
        size: "xs",
        placement: "left",
        translucent: true,
    },
});
