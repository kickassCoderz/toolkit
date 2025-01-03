import {
    blue as blueLight,
    blueA as blueALight,
    blueDark,
    blueDarkA,
    blueDarkP3,
    blueDarkP3A,
    blueP3 as blueP3Light,
    blueP3A as blueP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const blue = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f1f9ffcc",
                _p3: "color(display-p3 0.9529 0.9765 0.9961 / 0.8)",
            },
        },
        1: {
            value: {
                base: blueLight.blue1,
                _p3: blueP3Light.blue1,
            },
        },
        2: {
            value: {
                base: blueLight.blue2,
                _p3: blueP3Light.blue2,
            },
        },
        3: {
            value: {
                base: blueLight.blue3,
                _p3: blueP3Light.blue3,
            },
        },
        4: {
            value: {
                base: blueLight.blue4,
                _p3: blueP3Light.blue4,
            },
        },
        5: {
            value: {
                base: blueLight.blue5,
                _p3: blueP3Light.blue5,
            },
        },
        6: {
            value: {
                base: blueLight.blue6,
                _p3: blueP3Light.blue6,
            },
        },
        7: {
            value: {
                base: blueLight.blue7,
                _p3: blueP3Light.blue7,
            },
        },
        8: {
            value: {
                base: blueLight.blue8,
                _p3: blueP3Light.blue8,
            },
        },
        9: {
            value: {
                base: blueLight.blue9,
                _p3: blueP3Light.blue9,
            },
        },
        10: {
            value: {
                base: blueLight.blue10,
                _p3: blueP3Light.blue10,
            },
        },

        11: {
            value: {
                base: blueLight.blue11,
                _p3: blueP3Light.blue11,
            },
        },
        12: {
            value: {
                base: blueLight.blue12,
                _p3: blueP3Light.blue12,
            },
        },
        a1: {
            value: {
                base: blueALight.blueA1,
                _p3: blueP3ALight.blueA1,
            },
        },
        a2: {
            value: {
                base: blueALight.blueA2,
                _p3: blueP3ALight.blueA2,
            },
        },
        a3: {
            value: {
                base: blueALight.blueA3,
                _p3: blueP3ALight.blueA3,
            },
        },
        a4: {
            value: {
                base: blueALight.blueA4,
                _p3: blueP3ALight.blueA4,
            },
        },
        a5: {
            value: {
                base: blueALight.blueA5,
                _p3: blueP3ALight.blueA5,
            },
        },
        a6: {
            value: {
                base: blueALight.blueA6,
                _p3: blueP3ALight.blueA6,
            },
        },
        a7: {
            value: {
                base: blueALight.blueA7,
                _p3: blueP3ALight.blueA7,
            },
        },
        a8: {
            value: {
                base: blueALight.blueA8,
                _p3: blueP3ALight.blueA8,
            },
        },
        a9: {
            value: {
                base: blueALight.blueA9,
                _p3: blueP3ALight.blueA9,
            },
        },
        a10: {
            value: {
                base: blueALight.blueA10,
                _p3: blueP3ALight.blueA10,
            },
        },
        a11: {
            value: {
                base: blueALight.blueA11,
                _p3: blueP3ALight.blueA11,
            },
        },
        a12: {
            value: {
                base: blueALight.blueA12,
                _p3: blueP3ALight.blueA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#11213d80",
                _p3: "color(display-p3 0.0706 0.1255 0.2196 / 0.5)",
            },
        },
        1: {
            value: {
                base: blueDark.blue1,
                _p3: blueDarkP3.blue1,
            },
        },
        2: {
            value: {
                base: blueDark.blue2,
                _p3: blueDarkP3.blue2,
            },
        },
        3: {
            value: {
                base: blueDark.blue3,
                _p3: blueDarkP3.blue3,
            },
        },
        4: {
            value: {
                base: blueDark.blue4,
                _p3: blueDarkP3.blue4,
            },
        },
        5: {
            value: {
                base: blueDark.blue5,
                _p3: blueDarkP3.blue5,
            },
        },
        6: {
            value: {
                base: blueDark.blue6,
                _p3: blueDarkP3.blue6,
            },
        },
        7: {
            value: {
                base: blueDark.blue7,
                _p3: blueDarkP3.blue7,
            },
        },
        8: {
            value: {
                base: blueDark.blue8,
                _p3: blueDarkP3.blue8,
            },
        },
        9: {
            value: {
                base: blueDark.blue9,
                _p3: blueDarkP3.blue9,
            },
        },
        10: {
            value: {
                base: blueDark.blue10,
                _p3: blueDarkP3.blue10,
            },
        },
        11: {
            value: {
                base: blueDark.blue11,
                _p3: blueDarkP3.blue11,
            },
        },
        12: {
            value: {
                base: blueDark.blue12,
                _p3: blueDarkP3.blue12,
            },
        },
        a1: {
            value: {
                base: blueDarkA.blueA1,
                _p3: blueDarkP3A.blueA1,
            },
        },
        a2: {
            value: {
                base: blueDarkA.blueA2,
                _p3: blueDarkP3A.blueA2,
            },
        },
        a3: {
            value: {
                base: blueDarkA.blueA3,
                _p3: blueDarkP3A.blueA3,
            },
        },
        a4: {
            value: {
                base: blueDarkA.blueA4,
                _p3: blueDarkP3A.blueA4,
            },
        },
        a5: {
            value: {
                base: blueDarkA.blueA5,
                _p3: blueDarkP3A.blueA5,
            },
        },
        a6: {
            value: {
                base: blueDarkA.blueA6,
                _p3: blueDarkP3A.blueA6,
            },
        },
        a7: {
            value: {
                base: blueDarkA.blueA7,
                _p3: blueDarkP3A.blueA7,
            },
        },
        a8: {
            value: {
                base: blueDarkA.blueA8,
                _p3: blueDarkP3A.blueA8,
            },
        },
        a9: {
            value: {
                base: blueDarkA.blueA9,
                _p3: blueDarkP3A.blueA9,
            },
        },
        a10: {
            value: {
                base: blueDarkA.blueA10,
                _p3: blueDarkP3A.blueA10,
            },
        },
        a11: {
            value: {
                base: blueDarkA.blueA11,
                _p3: blueDarkP3A.blueA11,
            },
        },
        a12: {
            value: {
                base: blueDarkA.blueA12,
                _p3: blueDarkP3A.blueA12,
            },
        },
    },
});
