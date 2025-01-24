import {
    orange as orangeLight,
    orangeA as orangeALight,
    orangeDark,
    orangeDarkA,
    orangeDarkP3,
    orangeDarkP3A,
    orangeP3 as orangeP3Light,
    orangeP3A as orangeP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const orange = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },

    light: {
        surface: {
            value: {
                base: "#fff5e9cc",
                _p3: "color(display-p3 0.9961 0.9608 0.9176 / 0.8)",
            },
        },
        1: {
            value: {
                base: orangeLight.orange1,
                _p3: orangeP3Light.orange1,
            },
        },
        2: {
            value: {
                base: orangeLight.orange2,
                _p3: orangeP3Light.orange2,
            },
        },
        3: {
            value: {
                base: orangeLight.orange3,
                _p3: orangeP3Light.orange3,
            },
        },
        4: {
            value: {
                base: orangeLight.orange4,
                _p3: orangeP3Light.orange4,
            },
        },
        5: {
            value: {
                base: orangeLight.orange5,
                _p3: orangeP3Light.orange5,
            },
        },
        6: {
            value: {
                base: orangeLight.orange6,
                _p3: orangeP3Light.orange6,
            },
        },
        7: {
            value: {
                base: orangeLight.orange7,
                _p3: orangeP3Light.orange7,
            },
        },
        8: {
            value: {
                base: orangeLight.orange8,
                _p3: orangeP3Light.orange8,
            },
        },
        9: {
            value: {
                base: orangeLight.orange9,
                _p3: orangeP3Light.orange9,
            },
        },
        10: {
            value: {
                base: orangeLight.orange10,
                _p3: orangeP3Light.orange10,
            },
        },

        11: {
            value: {
                base: orangeLight.orange11,
                _p3: orangeP3Light.orange11,
            },
        },
        12: {
            value: {
                base: orangeLight.orange12,
                _p3: orangeP3Light.orange12,
            },
        },
        a1: {
            value: {
                base: orangeALight.orangeA1,
                _p3: orangeP3ALight.orangeA1,
            },
        },
        a2: {
            value: {
                base: orangeALight.orangeA2,
                _p3: orangeP3ALight.orangeA2,
            },
        },
        a3: {
            value: {
                base: orangeALight.orangeA3,
                _p3: orangeP3ALight.orangeA3,
            },
        },
        a4: {
            value: {
                base: orangeALight.orangeA4,
                _p3: orangeP3ALight.orangeA4,
            },
        },
        a5: {
            value: {
                base: orangeALight.orangeA5,
                _p3: orangeP3ALight.orangeA5,
            },
        },
        a6: {
            value: {
                base: orangeALight.orangeA6,
                _p3: orangeP3ALight.orangeA6,
            },
        },
        a7: {
            value: {
                base: orangeALight.orangeA7,
                _p3: orangeP3ALight.orangeA7,
            },
        },
        a8: {
            value: {
                base: orangeALight.orangeA8,
                _p3: orangeP3ALight.orangeA8,
            },
        },
        a9: {
            value: {
                base: orangeALight.orangeA9,
                _p3: orangeP3ALight.orangeA9,
            },
        },
        a10: {
            value: {
                base: orangeALight.orangeA10,
                _p3: orangeP3ALight.orangeA10,
            },
        },
        a11: {
            value: {
                base: orangeALight.orangeA11,
                _p3: orangeP3ALight.orangeA11,
            },
        },
        a12: {
            value: {
                base: orangeALight.orangeA12,
                _p3: orangeP3ALight.orangeA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#271d1380",
                _p3: "color(display-p3 0.1412 0.1098 0.0706 / 0.5)",
            },
        },
        1: {
            value: {
                base: orangeDark.orange1,
                _p3: orangeDarkP3.orange1,
            },
        },
        2: {
            value: {
                base: orangeDark.orange2,
                _p3: orangeDarkP3.orange2,
            },
        },
        3: {
            value: {
                base: orangeDark.orange3,
                _p3: orangeDarkP3.orange3,
            },
        },
        4: {
            value: {
                base: orangeDark.orange4,
                _p3: orangeDarkP3.orange4,
            },
        },
        5: {
            value: {
                base: orangeDark.orange5,
                _p3: orangeDarkP3.orange5,
            },
        },
        6: {
            value: {
                base: orangeDark.orange6,
                _p3: orangeDarkP3.orange6,
            },
        },
        7: {
            value: {
                base: orangeDark.orange7,
                _p3: orangeDarkP3.orange7,
            },
        },
        8: {
            value: {
                base: orangeDark.orange8,
                _p3: orangeDarkP3.orange8,
            },
        },
        9: {
            value: {
                base: orangeDark.orange9,
                _p3: orangeDarkP3.orange9,
            },
        },
        10: {
            value: {
                base: orangeDark.orange10,
                _p3: orangeDarkP3.orange10,
            },
        },
        11: {
            value: {
                base: orangeDark.orange11,
                _p3: orangeDarkP3.orange11,
            },
        },
        12: {
            value: {
                base: orangeDark.orange12,
                _p3: orangeDarkP3.orange12,
            },
        },
        a1: {
            value: {
                base: orangeDarkA.orangeA1,
                _p3: orangeDarkP3A.orangeA1,
            },
        },
        a2: {
            value: {
                base: orangeDarkA.orangeA2,
                _p3: orangeDarkP3A.orangeA2,
            },
        },
        a3: {
            value: {
                base: orangeDarkA.orangeA3,
                _p3: orangeDarkP3A.orangeA3,
            },
        },
        a4: {
            value: {
                base: orangeDarkA.orangeA4,
                _p3: orangeDarkP3A.orangeA4,
            },
        },
        a5: {
            value: {
                base: orangeDarkA.orangeA5,
                _p3: orangeDarkP3A.orangeA5,
            },
        },
        a6: {
            value: {
                base: orangeDarkA.orangeA6,
                _p3: orangeDarkP3A.orangeA6,
            },
        },
        a7: {
            value: {
                base: orangeDarkA.orangeA7,
                _p3: orangeDarkP3A.orangeA7,
            },
        },
        a8: {
            value: {
                base: orangeDarkA.orangeA8,
                _p3: orangeDarkP3A.orangeA8,
            },
        },
        a9: {
            value: {
                base: orangeDarkA.orangeA9,
                _p3: orangeDarkP3A.orangeA9,
            },
        },
        a10: {
            value: {
                base: orangeDarkA.orangeA10,
                _p3: orangeDarkP3A.orangeA10,
            },
        },
        a11: {
            value: {
                base: orangeDarkA.orangeA11,
                _p3: orangeDarkP3A.orangeA11,
            },
        },
        a12: {
            value: {
                base: orangeDarkA.orangeA12,
                _p3: orangeDarkP3A.orangeA12,
            },
        },
    },
});
