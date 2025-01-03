import {
    gold as goldLight,
    goldA as goldALight,
    goldDark,
    goldDarkA,
    goldDarkP3,
    goldDarkP3A,
    goldP3 as goldP3Light,
    goldP3A as goldP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const gold = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f9f8efcc",
                _p3: "color(display-p3 0.9765 0.9725 0.9412 / 0.8)",
            },
        },
        1: {
            value: {
                base: goldLight.gold1,
                _p3: goldP3Light.gold1,
            },
        },
        2: {
            value: {
                base: goldLight.gold2,
                _p3: goldP3Light.gold2,
            },
        },
        3: {
            value: {
                base: goldLight.gold3,
                _p3: goldP3Light.gold3,
            },
        },
        4: {
            value: {
                base: goldLight.gold4,
                _p3: goldP3Light.gold4,
            },
        },
        5: {
            value: {
                base: goldLight.gold5,
                _p3: goldP3Light.gold5,
            },
        },
        6: {
            value: {
                base: goldLight.gold6,
                _p3: goldP3Light.gold6,
            },
        },
        7: {
            value: {
                base: goldLight.gold7,
                _p3: goldP3Light.gold7,
            },
        },
        8: {
            value: {
                base: goldLight.gold8,
                _p3: goldP3Light.gold8,
            },
        },
        9: {
            value: {
                base: goldLight.gold9,
                _p3: goldP3Light.gold9,
            },
        },
        10: {
            value: {
                base: goldLight.gold10,
                _p3: goldP3Light.gold10,
            },
        },

        11: {
            value: {
                base: goldLight.gold11,
                _p3: goldP3Light.gold11,
            },
        },
        12: {
            value: {
                base: goldLight.gold12,
                _p3: goldP3Light.gold12,
            },
        },
        a1: {
            value: {
                base: goldALight.goldA1,
                _p3: goldP3ALight.goldA1,
            },
        },
        a2: {
            value: {
                base: goldALight.goldA2,
                _p3: goldP3ALight.goldA2,
            },
        },
        a3: {
            value: {
                base: goldALight.goldA3,
                _p3: goldP3ALight.goldA3,
            },
        },
        a4: {
            value: {
                base: goldALight.goldA4,
                _p3: goldP3ALight.goldA4,
            },
        },
        a5: {
            value: {
                base: goldALight.goldA5,
                _p3: goldP3ALight.goldA5,
            },
        },
        a6: {
            value: {
                base: goldALight.goldA6,
                _p3: goldP3ALight.goldA6,
            },
        },
        a7: {
            value: {
                base: goldALight.goldA7,
                _p3: goldP3ALight.goldA7,
            },
        },
        a8: {
            value: {
                base: goldALight.goldA8,
                _p3: goldP3ALight.goldA8,
            },
        },
        a9: {
            value: {
                base: goldALight.goldA9,
                _p3: goldP3ALight.goldA9,
            },
        },
        a10: {
            value: {
                base: goldALight.goldA10,
                _p3: goldP3ALight.goldA10,
            },
        },
        a11: {
            value: {
                base: goldALight.goldA11,
                _p3: goldP3ALight.goldA11,
            },
        },
        a12: {
            value: {
                base: goldALight.goldA12,
                _p3: goldP3ALight.goldA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#25231d80",
                _p3: "color(display-p3 0.1412 0.1333 0.1098 / 0.5)",
            },
        },
        1: {
            value: {
                base: goldDark.gold1,
                _p3: goldDarkP3.gold1,
            },
        },
        2: {
            value: {
                base: goldDark.gold2,
                _p3: goldDarkP3.gold2,
            },
        },
        3: {
            value: {
                base: goldDark.gold3,
                _p3: goldDarkP3.gold3,
            },
        },
        4: {
            value: {
                base: goldDark.gold4,
                _p3: goldDarkP3.gold4,
            },
        },
        5: {
            value: {
                base: goldDark.gold5,
                _p3: goldDarkP3.gold5,
            },
        },
        6: {
            value: {
                base: goldDark.gold6,
                _p3: goldDarkP3.gold6,
            },
        },
        7: {
            value: {
                base: goldDark.gold7,
                _p3: goldDarkP3.gold7,
            },
        },
        8: {
            value: {
                base: goldDark.gold8,
                _p3: goldDarkP3.gold8,
            },
        },
        9: {
            value: {
                base: goldDark.gold9,
                _p3: goldDarkP3.gold9,
            },
        },
        10: {
            value: {
                base: goldDark.gold10,
                _p3: goldDarkP3.gold10,
            },
        },
        11: {
            value: {
                base: goldDark.gold11,
                _p3: goldDarkP3.gold11,
            },
        },
        12: {
            value: {
                base: goldDark.gold12,
                _p3: goldDarkP3.gold12,
            },
        },
        a1: {
            value: {
                base: goldDarkA.goldA1,
                _p3: goldDarkP3A.goldA1,
            },
        },
        a2: {
            value: {
                base: goldDarkA.goldA2,
                _p3: goldDarkP3A.goldA2,
            },
        },
        a3: {
            value: {
                base: goldDarkA.goldA3,
                _p3: goldDarkP3A.goldA3,
            },
        },
        a4: {
            value: {
                base: goldDarkA.goldA4,
                _p3: goldDarkP3A.goldA4,
            },
        },
        a5: {
            value: {
                base: goldDarkA.goldA5,
                _p3: goldDarkP3A.goldA5,
            },
        },
        a6: {
            value: {
                base: goldDarkA.goldA6,
                _p3: goldDarkP3A.goldA6,
            },
        },
        a7: {
            value: {
                base: goldDarkA.goldA7,
                _p3: goldDarkP3A.goldA7,
            },
        },
        a8: {
            value: {
                base: goldDarkA.goldA8,
                _p3: goldDarkP3A.goldA8,
            },
        },
        a9: {
            value: {
                base: goldDarkA.goldA9,
                _p3: goldDarkP3A.goldA9,
            },
        },
        a10: {
            value: {
                base: goldDarkA.goldA10,
                _p3: goldDarkP3A.goldA10,
            },
        },
        a11: {
            value: {
                base: goldDarkA.goldA11,
                _p3: goldDarkP3A.goldA11,
            },
        },
        a12: {
            value: {
                base: goldDarkA.goldA12,
                _p3: goldDarkP3A.goldA12,
            },
        },
    },
});
