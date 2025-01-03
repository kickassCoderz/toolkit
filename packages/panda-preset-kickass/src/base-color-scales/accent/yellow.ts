import {
    sand,
    sandP3,
    yellow as yellowLight,
    yellowA as yellowALight,
    yellowDark,
    yellowDarkA,
    yellowDarkP3,
    yellowDarkP3A,
    yellowP3 as yellowP3Light,
    yellowP3A as yellowP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const yellow = createKickassUIBaseColorScale({
    contrast: {
        value: {
            base: sand.sand12,
            _p3: sandP3.sand12,
        },
    },
    light: {
        surface: {
            value: {
                base: "#fefbe4cc",
                _p3: "color(display-p3 0.9961 0.9922 0.902 / 0.8)",
            },
        },
        1: {
            value: {
                base: yellowLight.yellow1,
                _p3: yellowP3Light.yellow1,
            },
        },
        2: {
            value: {
                base: yellowLight.yellow2,
                _p3: yellowP3Light.yellow2,
            },
        },
        3: {
            value: {
                base: yellowLight.yellow3,
                _p3: yellowP3Light.yellow3,
            },
        },
        4: {
            value: {
                base: yellowLight.yellow4,
                _p3: yellowP3Light.yellow4,
            },
        },
        5: {
            value: {
                base: yellowLight.yellow5,
                _p3: yellowP3Light.yellow5,
            },
        },
        6: {
            value: {
                base: yellowLight.yellow6,
                _p3: yellowP3Light.yellow6,
            },
        },
        7: {
            value: {
                base: yellowLight.yellow7,
                _p3: yellowP3Light.yellow7,
            },
        },
        8: {
            value: {
                base: yellowLight.yellow8,
                _p3: yellowP3Light.yellow8,
            },
        },
        9: {
            value: {
                base: yellowLight.yellow9,
                _p3: yellowP3Light.yellow9,
            },
        },
        10: {
            value: {
                base: yellowLight.yellow10,
                _p3: yellowP3Light.yellow10,
            },
        },

        11: {
            value: {
                base: yellowLight.yellow11,
                _p3: yellowP3Light.yellow11,
            },
        },
        12: {
            value: {
                base: yellowLight.yellow12,
                _p3: yellowP3Light.yellow12,
            },
        },
        a1: {
            value: {
                base: yellowALight.yellowA1,
                _p3: yellowP3ALight.yellowA1,
            },
        },
        a2: {
            value: {
                base: yellowALight.yellowA2,
                _p3: yellowP3ALight.yellowA2,
            },
        },
        a3: {
            value: {
                base: yellowALight.yellowA3,
                _p3: yellowP3ALight.yellowA3,
            },
        },
        a4: {
            value: {
                base: yellowALight.yellowA4,
                _p3: yellowP3ALight.yellowA4,
            },
        },
        a5: {
            value: {
                base: yellowALight.yellowA5,
                _p3: yellowP3ALight.yellowA5,
            },
        },
        a6: {
            value: {
                base: yellowALight.yellowA6,
                _p3: yellowP3ALight.yellowA6,
            },
        },
        a7: {
            value: {
                base: yellowALight.yellowA7,
                _p3: yellowP3ALight.yellowA7,
            },
        },
        a8: {
            value: {
                base: yellowALight.yellowA8,
                _p3: yellowP3ALight.yellowA8,
            },
        },
        a9: {
            value: {
                base: yellowALight.yellowA9,
                _p3: yellowP3ALight.yellowA9,
            },
        },
        a10: {
            value: {
                base: yellowALight.yellowA10,
                _p3: yellowP3ALight.yellowA10,
            },
        },
        a11: {
            value: {
                base: yellowALight.yellowA11,
                _p3: yellowP3ALight.yellowA11,
            },
        },
        a12: {
            value: {
                base: yellowALight.yellowA12,
                _p3: yellowP3ALight.yellowA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#231f1380",
                _p3: "color(display-p3 0.1333 0.1176 0.0706 / 0.5)",
            },
        },
        1: {
            value: {
                base: yellowDark.yellow1,
                _p3: yellowDarkP3.yellow1,
            },
        },
        2: {
            value: {
                base: yellowDark.yellow2,
                _p3: yellowDarkP3.yellow2,
            },
        },
        3: {
            value: {
                base: yellowDark.yellow3,
                _p3: yellowDarkP3.yellow3,
            },
        },
        4: {
            value: {
                base: yellowDark.yellow4,
                _p3: yellowDarkP3.yellow4,
            },
        },
        5: {
            value: {
                base: yellowDark.yellow5,
                _p3: yellowDarkP3.yellow5,
            },
        },
        6: {
            value: {
                base: yellowDark.yellow6,
                _p3: yellowDarkP3.yellow6,
            },
        },
        7: {
            value: {
                base: yellowDark.yellow7,
                _p3: yellowDarkP3.yellow7,
            },
        },
        8: {
            value: {
                base: yellowDark.yellow8,
                _p3: yellowDarkP3.yellow8,
            },
        },
        9: {
            value: {
                base: yellowDark.yellow9,
                _p3: yellowDarkP3.yellow9,
            },
        },
        10: {
            value: {
                base: yellowDark.yellow10,
                _p3: yellowDarkP3.yellow10,
            },
        },
        11: {
            value: {
                base: yellowDark.yellow11,
                _p3: yellowDarkP3.yellow11,
            },
        },
        12: {
            value: {
                base: yellowDark.yellow12,
                _p3: yellowDarkP3.yellow12,
            },
        },
        a1: {
            value: {
                base: yellowDarkA.yellowA1,
                _p3: yellowDarkP3A.yellowA1,
            },
        },
        a2: {
            value: {
                base: yellowDarkA.yellowA2,
                _p3: yellowDarkP3A.yellowA2,
            },
        },
        a3: {
            value: {
                base: yellowDarkA.yellowA3,
                _p3: yellowDarkP3A.yellowA3,
            },
        },
        a4: {
            value: {
                base: yellowDarkA.yellowA4,
                _p3: yellowDarkP3A.yellowA4,
            },
        },
        a5: {
            value: {
                base: yellowDarkA.yellowA5,
                _p3: yellowDarkP3A.yellowA5,
            },
        },
        a6: {
            value: {
                base: yellowDarkA.yellowA6,
                _p3: yellowDarkP3A.yellowA6,
            },
        },
        a7: {
            value: {
                base: yellowDarkA.yellowA7,
                _p3: yellowDarkP3A.yellowA7,
            },
        },
        a8: {
            value: {
                base: yellowDarkA.yellowA8,
                _p3: yellowDarkP3A.yellowA8,
            },
        },
        a9: {
            value: {
                base: yellowDarkA.yellowA9,
                _p3: yellowDarkP3A.yellowA9,
            },
        },
        a10: {
            value: {
                base: yellowDarkA.yellowA10,
                _p3: yellowDarkP3A.yellowA10,
            },
        },
        a11: {
            value: {
                base: yellowDarkA.yellowA11,
                _p3: yellowDarkP3A.yellowA11,
            },
        },
        a12: {
            value: {
                base: yellowDarkA.yellowA12,
                _p3: yellowDarkP3A.yellowA12,
            },
        },
    },
});
