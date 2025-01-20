import {
    mauve as mauveLight,
    mauveA as mauveALight,
    mauveDark,
    mauveDarkA,
    mauveDarkP3,
    mauveDarkP3A,
    mauveP3 as mauveP3Light,
    mauveP3A as mauveP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const mauve = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#ffffffcc",
                _p3: "color(display-p3 1 1 1 / 0.8)",
            },
        },
        1: {
            value: {
                base: mauveLight.mauve1,
                _p3: mauveP3Light.mauve1,
            },
        },
        2: {
            value: {
                base: mauveLight.mauve2,
                _p3: mauveP3Light.mauve2,
            },
        },
        3: {
            value: {
                base: mauveLight.mauve3,
                _p3: mauveP3Light.mauve3,
            },
        },
        4: {
            value: {
                base: mauveLight.mauve4,
                _p3: mauveP3Light.mauve4,
            },
        },
        5: {
            value: {
                base: mauveLight.mauve5,
                _p3: mauveP3Light.mauve5,
            },
        },
        6: {
            value: {
                base: mauveLight.mauve6,
                _p3: mauveP3Light.mauve6,
            },
        },
        7: {
            value: {
                base: mauveLight.mauve7,
                _p3: mauveP3Light.mauve7,
            },
        },
        8: {
            value: {
                base: mauveLight.mauve8,
                _p3: mauveP3Light.mauve8,
            },
        },
        9: {
            value: {
                base: mauveLight.mauve9,
                _p3: mauveP3Light.mauve9,
            },
        },
        10: {
            value: {
                base: mauveLight.mauve10,
                _p3: mauveP3Light.mauve10,
            },
        },

        11: {
            value: {
                base: mauveLight.mauve11,
                _p3: mauveP3Light.mauve11,
            },
        },
        12: {
            value: {
                base: mauveLight.mauve12,
                _p3: mauveP3Light.mauve12,
            },
        },
        a1: {
            value: {
                base: mauveALight.mauveA1,
                _p3: mauveP3ALight.mauveA1,
            },
        },
        a2: {
            value: {
                base: mauveALight.mauveA2,
                _p3: mauveP3ALight.mauveA2,
            },
        },
        a3: {
            value: {
                base: mauveALight.mauveA3,
                _p3: mauveP3ALight.mauveA3,
            },
        },
        a4: {
            value: {
                base: mauveALight.mauveA4,
                _p3: mauveP3ALight.mauveA4,
            },
        },
        a5: {
            value: {
                base: mauveALight.mauveA5,
                _p3: mauveP3ALight.mauveA5,
            },
        },
        a6: {
            value: {
                base: mauveALight.mauveA6,
                _p3: mauveP3ALight.mauveA6,
            },
        },
        a7: {
            value: {
                base: mauveALight.mauveA7,
                _p3: mauveP3ALight.mauveA7,
            },
        },
        a8: {
            value: {
                base: mauveALight.mauveA8,
                _p3: mauveP3ALight.mauveA8,
            },
        },
        a9: {
            value: {
                base: mauveALight.mauveA9,
                _p3: mauveP3ALight.mauveA9,
            },
        },
        a10: {
            value: {
                base: mauveALight.mauveA10,
                _p3: mauveP3ALight.mauveA10,
            },
        },
        a11: {
            value: {
                base: mauveALight.mauveA11,
                _p3: mauveP3ALight.mauveA11,
            },
        },
        a12: {
            value: {
                base: mauveALight.mauveA12,
                _p3: mauveP3ALight.mauveA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#22212380",
                _p3: "color(display-p3 0.1333 0.1255 0.1333 / 0.5)",
            },
        },
        1: {
            value: {
                base: mauveDark.mauve1,
                _p3: mauveDarkP3.mauve1,
            },
        },
        2: {
            value: {
                base: mauveDark.mauve2,
                _p3: mauveDarkP3.mauve2,
            },
        },
        3: {
            value: {
                base: mauveDark.mauve3,
                _p3: mauveDarkP3.mauve3,
            },
        },
        4: {
            value: {
                base: mauveDark.mauve4,
                _p3: mauveDarkP3.mauve4,
            },
        },
        5: {
            value: {
                base: mauveDark.mauve5,
                _p3: mauveDarkP3.mauve5,
            },
        },
        6: {
            value: {
                base: mauveDark.mauve6,
                _p3: mauveDarkP3.mauve6,
            },
        },
        7: {
            value: {
                base: mauveDark.mauve7,
                _p3: mauveDarkP3.mauve7,
            },
        },
        8: {
            value: {
                base: mauveDark.mauve8,
                _p3: mauveDarkP3.mauve8,
            },
        },
        9: {
            value: {
                base: mauveDark.mauve9,
                _p3: mauveDarkP3.mauve9,
            },
        },
        10: {
            value: {
                base: mauveDark.mauve10,
                _p3: mauveDarkP3.mauve10,
            },
        },
        11: {
            value: {
                base: mauveDark.mauve11,
                _p3: mauveDarkP3.mauve11,
            },
        },
        12: {
            value: {
                base: mauveDark.mauve12,
                _p3: mauveDarkP3.mauve12,
            },
        },
        a1: {
            value: {
                base: mauveDarkA.mauveA1,
                _p3: mauveDarkP3A.mauveA1,
            },
        },
        a2: {
            value: {
                base: mauveDarkA.mauveA2,
                _p3: mauveDarkP3A.mauveA2,
            },
        },
        a3: {
            value: {
                base: mauveDarkA.mauveA3,
                _p3: mauveDarkP3A.mauveA3,
            },
        },
        a4: {
            value: {
                base: mauveDarkA.mauveA4,
                _p3: mauveDarkP3A.mauveA4,
            },
        },
        a5: {
            value: {
                base: mauveDarkA.mauveA5,
                _p3: mauveDarkP3A.mauveA5,
            },
        },
        a6: {
            value: {
                base: mauveDarkA.mauveA6,
                _p3: mauveDarkP3A.mauveA6,
            },
        },
        a7: {
            value: {
                base: mauveDarkA.mauveA7,
                _p3: mauveDarkP3A.mauveA7,
            },
        },
        a8: {
            value: {
                base: mauveDarkA.mauveA8,
                _p3: mauveDarkP3A.mauveA8,
            },
        },
        a9: {
            value: {
                base: mauveDarkA.mauveA9,
                _p3: mauveDarkP3A.mauveA9,
            },
        },
        a10: {
            value: {
                base: mauveDarkA.mauveA10,
                _p3: mauveDarkP3A.mauveA10,
            },
        },
        a11: {
            value: {
                base: mauveDarkA.mauveA11,
                _p3: mauveDarkP3A.mauveA11,
            },
        },
        a12: {
            value: {
                base: mauveDarkA.mauveA12,
                _p3: mauveDarkP3A.mauveA12,
            },
        },
    },
});
