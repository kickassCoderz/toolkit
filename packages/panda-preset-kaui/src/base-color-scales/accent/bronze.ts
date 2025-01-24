import {
    bronze as bronzeLight,
    bronzeA as bronzeALight,
    bronzeDark,
    bronzeDarkA,
    bronzeDarkP3,
    bronzeDarkP3A,
    bronzeP3 as bronzeP3Light,
    bronzeP3A as bronzeP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const bronze = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fdf5f3cc",
                _p3: "color(display-p3 0.9843 0.9608 0.9529 / 0.8)",
            },
        },
        1: {
            value: {
                base: bronzeLight.bronze1,
                _p3: bronzeP3Light.bronze1,
            },
        },
        2: {
            value: {
                base: bronzeLight.bronze2,
                _p3: bronzeP3Light.bronze2,
            },
        },
        3: {
            value: {
                base: bronzeLight.bronze3,
                _p3: bronzeP3Light.bronze3,
            },
        },
        4: {
            value: {
                base: bronzeLight.bronze4,
                _p3: bronzeP3Light.bronze4,
            },
        },
        5: {
            value: {
                base: bronzeLight.bronze5,
                _p3: bronzeP3Light.bronze5,
            },
        },
        6: {
            value: {
                base: bronzeLight.bronze6,
                _p3: bronzeP3Light.bronze6,
            },
        },
        7: {
            value: {
                base: bronzeLight.bronze7,
                _p3: bronzeP3Light.bronze7,
            },
        },
        8: {
            value: {
                base: bronzeLight.bronze8,
                _p3: bronzeP3Light.bronze8,
            },
        },
        9: {
            value: {
                base: bronzeLight.bronze9,
                _p3: bronzeP3Light.bronze9,
            },
        },
        10: {
            value: {
                base: bronzeLight.bronze10,
                _p3: bronzeP3Light.bronze10,
            },
        },

        11: {
            value: {
                base: bronzeLight.bronze11,
                _p3: bronzeP3Light.bronze11,
            },
        },
        12: {
            value: {
                base: bronzeLight.bronze12,
                _p3: bronzeP3Light.bronze12,
            },
        },
        a1: {
            value: {
                base: bronzeALight.bronzeA1,
                _p3: bronzeP3ALight.bronzeA1,
            },
        },
        a2: {
            value: {
                base: bronzeALight.bronzeA2,
                _p3: bronzeP3ALight.bronzeA2,
            },
        },
        a3: {
            value: {
                base: bronzeALight.bronzeA3,
                _p3: bronzeP3ALight.bronzeA3,
            },
        },
        a4: {
            value: {
                base: bronzeALight.bronzeA4,
                _p3: bronzeP3ALight.bronzeA4,
            },
        },
        a5: {
            value: {
                base: bronzeALight.bronzeA5,
                _p3: bronzeP3ALight.bronzeA5,
            },
        },
        a6: {
            value: {
                base: bronzeALight.bronzeA6,
                _p3: bronzeP3ALight.bronzeA6,
            },
        },
        a7: {
            value: {
                base: bronzeALight.bronzeA7,
                _p3: bronzeP3ALight.bronzeA7,
            },
        },
        a8: {
            value: {
                base: bronzeALight.bronzeA8,
                _p3: bronzeP3ALight.bronzeA8,
            },
        },
        a9: {
            value: {
                base: bronzeALight.bronzeA9,
                _p3: bronzeP3ALight.bronzeA9,
            },
        },
        a10: {
            value: {
                base: bronzeALight.bronzeA10,
                _p3: bronzeP3ALight.bronzeA10,
            },
        },
        a11: {
            value: {
                base: bronzeALight.bronzeA11,
                _p3: bronzeP3ALight.bronzeA11,
            },
        },
        a12: {
            value: {
                base: bronzeALight.bronzeA12,
                _p3: bronzeP3ALight.bronzeA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#27211d80",
                _p3: "color(display-p3 0.1412 0.1255 0.1176 / 0.5)",
            },
        },
        1: {
            value: {
                base: bronzeDark.bronze1,
                _p3: bronzeDarkP3.bronze1,
            },
        },
        2: {
            value: {
                base: bronzeDark.bronze2,
                _p3: bronzeDarkP3.bronze2,
            },
        },
        3: {
            value: {
                base: bronzeDark.bronze3,
                _p3: bronzeDarkP3.bronze3,
            },
        },
        4: {
            value: {
                base: bronzeDark.bronze4,
                _p3: bronzeDarkP3.bronze4,
            },
        },
        5: {
            value: {
                base: bronzeDark.bronze5,
                _p3: bronzeDarkP3.bronze5,
            },
        },
        6: {
            value: {
                base: bronzeDark.bronze6,
                _p3: bronzeDarkP3.bronze6,
            },
        },
        7: {
            value: {
                base: bronzeDark.bronze7,
                _p3: bronzeDarkP3.bronze7,
            },
        },
        8: {
            value: {
                base: bronzeDark.bronze8,
                _p3: bronzeDarkP3.bronze8,
            },
        },
        9: {
            value: {
                base: bronzeDark.bronze9,
                _p3: bronzeDarkP3.bronze9,
            },
        },
        10: {
            value: {
                base: bronzeDark.bronze10,
                _p3: bronzeDarkP3.bronze10,
            },
        },
        11: {
            value: {
                base: bronzeDark.bronze11,
                _p3: bronzeDarkP3.bronze11,
            },
        },
        12: {
            value: {
                base: bronzeDark.bronze12,
                _p3: bronzeDarkP3.bronze12,
            },
        },
        a1: {
            value: {
                base: bronzeDarkA.bronzeA1,
                _p3: bronzeDarkP3A.bronzeA1,
            },
        },
        a2: {
            value: {
                base: bronzeDarkA.bronzeA2,
                _p3: bronzeDarkP3A.bronzeA2,
            },
        },
        a3: {
            value: {
                base: bronzeDarkA.bronzeA3,
                _p3: bronzeDarkP3A.bronzeA3,
            },
        },
        a4: {
            value: {
                base: bronzeDarkA.bronzeA4,
                _p3: bronzeDarkP3A.bronzeA4,
            },
        },
        a5: {
            value: {
                base: bronzeDarkA.bronzeA5,
                _p3: bronzeDarkP3A.bronzeA5,
            },
        },
        a6: {
            value: {
                base: bronzeDarkA.bronzeA6,
                _p3: bronzeDarkP3A.bronzeA6,
            },
        },
        a7: {
            value: {
                base: bronzeDarkA.bronzeA7,
                _p3: bronzeDarkP3A.bronzeA7,
            },
        },
        a8: {
            value: {
                base: bronzeDarkA.bronzeA8,
                _p3: bronzeDarkP3A.bronzeA8,
            },
        },
        a9: {
            value: {
                base: bronzeDarkA.bronzeA9,
                _p3: bronzeDarkP3A.bronzeA9,
            },
        },
        a10: {
            value: {
                base: bronzeDarkA.bronzeA10,
                _p3: bronzeDarkP3A.bronzeA10,
            },
        },
        a11: {
            value: {
                base: bronzeDarkA.bronzeA11,
                _p3: bronzeDarkP3A.bronzeA11,
            },
        },
        a12: {
            value: {
                base: bronzeDarkA.bronzeA12,
                _p3: bronzeDarkP3A.bronzeA12,
            },
        },
    },
});
