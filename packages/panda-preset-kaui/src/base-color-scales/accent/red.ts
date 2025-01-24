import {
    red as redLight,
    redA as redALight,
    redDark,
    redDarkA,
    redDarkP3,
    redDarkP3A,
    redP3 as redP3Light,
    redP3A as redP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const red = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fff5f5cc",
                _p3: "color(display-p3 0.9961 0.9647 0.9647 / 0.8)",
            },
        },
        1: {
            value: {
                base: redLight.red1,
                _p3: redP3Light.red1,
            },
        },
        2: {
            value: {
                base: redLight.red2,
                _p3: redP3Light.red2,
            },
        },
        3: {
            value: {
                base: redLight.red3,
                _p3: redP3Light.red3,
            },
        },
        4: {
            value: {
                base: redLight.red4,
                _p3: redP3Light.red4,
            },
        },
        5: {
            value: {
                base: redLight.red5,
                _p3: redP3Light.red5,
            },
        },
        6: {
            value: {
                base: redLight.red6,
                _p3: redP3Light.red6,
            },
        },
        7: {
            value: {
                base: redLight.red7,
                _p3: redP3Light.red7,
            },
        },
        8: {
            value: {
                base: redLight.red8,
                _p3: redP3Light.red8,
            },
        },
        9: {
            value: {
                base: redLight.red9,
                _p3: redP3Light.red9,
            },
        },
        10: {
            value: {
                base: redLight.red10,
                _p3: redP3Light.red10,
            },
        },

        11: {
            value: {
                base: redLight.red11,
                _p3: redP3Light.red11,
            },
        },
        12: {
            value: {
                base: redLight.red12,
                _p3: redP3Light.red12,
            },
        },
        a1: {
            value: {
                base: redALight.redA1,
                _p3: redP3ALight.redA1,
            },
        },
        a2: {
            value: {
                base: redALight.redA2,
                _p3: redP3ALight.redA2,
            },
        },
        a3: {
            value: {
                base: redALight.redA3,
                _p3: redP3ALight.redA3,
            },
        },
        a4: {
            value: {
                base: redALight.redA4,
                _p3: redP3ALight.redA4,
            },
        },
        a5: {
            value: {
                base: redALight.redA5,
                _p3: redP3ALight.redA5,
            },
        },
        a6: {
            value: {
                base: redALight.redA6,
                _p3: redP3ALight.redA6,
            },
        },
        a7: {
            value: {
                base: redALight.redA7,
                _p3: redP3ALight.redA7,
            },
        },
        a8: {
            value: {
                base: redALight.redA8,
                _p3: redP3ALight.redA8,
            },
        },
        a9: {
            value: {
                base: redALight.redA9,
                _p3: redP3ALight.redA9,
            },
        },
        a10: {
            value: {
                base: redALight.redA10,
                _p3: redP3ALight.redA10,
            },
        },
        a11: {
            value: {
                base: redALight.redA11,
                _p3: redP3ALight.redA11,
            },
        },
        a12: {
            value: {
                base: redALight.redA12,
                _p3: redP3ALight.redA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#2f151780",
                _p3: "color(display-p3 0.1647 0.0863 0.0863 / 0.5)",
            },
        },
        1: {
            value: {
                base: redDark.red1,
                _p3: redDarkP3.red1,
            },
        },
        2: {
            value: {
                base: redDark.red2,
                _p3: redDarkP3.red2,
            },
        },
        3: {
            value: {
                base: redDark.red3,
                _p3: redDarkP3.red3,
            },
        },
        4: {
            value: {
                base: redDark.red4,
                _p3: redDarkP3.red4,
            },
        },
        5: {
            value: {
                base: redDark.red5,
                _p3: redDarkP3.red5,
            },
        },
        6: {
            value: {
                base: redDark.red6,
                _p3: redDarkP3.red6,
            },
        },
        7: {
            value: {
                base: redDark.red7,
                _p3: redDarkP3.red7,
            },
        },
        8: {
            value: {
                base: redDark.red8,
                _p3: redDarkP3.red8,
            },
        },
        9: {
            value: {
                base: redDark.red9,
                _p3: redDarkP3.red9,
            },
        },
        10: {
            value: {
                base: redDark.red10,
                _p3: redDarkP3.red10,
            },
        },
        11: {
            value: {
                base: redDark.red11,
                _p3: redDarkP3.red11,
            },
        },
        12: {
            value: {
                base: redDark.red12,
                _p3: redDarkP3.red12,
            },
        },
        a1: {
            value: {
                base: redDarkA.redA1,
                _p3: redDarkP3A.redA1,
            },
        },
        a2: {
            value: {
                base: redDarkA.redA2,
                _p3: redDarkP3A.redA2,
            },
        },
        a3: {
            value: {
                base: redDarkA.redA3,
                _p3: redDarkP3A.redA3,
            },
        },
        a4: {
            value: {
                base: redDarkA.redA4,
                _p3: redDarkP3A.redA4,
            },
        },
        a5: {
            value: {
                base: redDarkA.redA5,
                _p3: redDarkP3A.redA5,
            },
        },
        a6: {
            value: {
                base: redDarkA.redA6,
                _p3: redDarkP3A.redA6,
            },
        },
        a7: {
            value: {
                base: redDarkA.redA7,
                _p3: redDarkP3A.redA7,
            },
        },
        a8: {
            value: {
                base: redDarkA.redA8,
                _p3: redDarkP3A.redA8,
            },
        },
        a9: {
            value: {
                base: redDarkA.redA9,
                _p3: redDarkP3A.redA9,
            },
        },
        a10: {
            value: {
                base: redDarkA.redA10,
                _p3: redDarkP3A.redA10,
            },
        },
        a11: {
            value: {
                base: redDarkA.redA11,
                _p3: redDarkP3A.redA11,
            },
        },
        a12: {
            value: {
                base: redDarkA.redA12,
                _p3: redDarkP3A.redA12,
            },
        },
    },
});
