import {
    teal as tealLight,
    tealA as tealALight,
    tealDark,
    tealDarkA,
    tealDarkP3,
    tealDarkP3A,
    tealP3 as tealP3Light,
    tealP3A as tealP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const teal = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f0faf8cc",
                _p3: "color(display-p3 0.9451 0.9804 0.9725 / 0.8)",
            },
        },
        1: {
            value: {
                base: tealLight.teal1,
                _p3: tealP3Light.teal1,
            },
        },
        2: {
            value: {
                base: tealLight.teal2,
                _p3: tealP3Light.teal2,
            },
        },
        3: {
            value: {
                base: tealLight.teal3,
                _p3: tealP3Light.teal3,
            },
        },
        4: {
            value: {
                base: tealLight.teal4,
                _p3: tealP3Light.teal4,
            },
        },
        5: {
            value: {
                base: tealLight.teal5,
                _p3: tealP3Light.teal5,
            },
        },
        6: {
            value: {
                base: tealLight.teal6,
                _p3: tealP3Light.teal6,
            },
        },
        7: {
            value: {
                base: tealLight.teal7,
                _p3: tealP3Light.teal7,
            },
        },
        8: {
            value: {
                base: tealLight.teal8,
                _p3: tealP3Light.teal8,
            },
        },
        9: {
            value: {
                base: tealLight.teal9,
                _p3: tealP3Light.teal9,
            },
        },
        10: {
            value: {
                base: tealLight.teal10,
                _p3: tealP3Light.teal10,
            },
        },

        11: {
            value: {
                base: tealLight.teal11,
                _p3: tealP3Light.teal11,
            },
        },
        12: {
            value: {
                base: tealLight.teal12,
                _p3: tealP3Light.teal12,
            },
        },
        a1: {
            value: {
                base: tealALight.tealA1,
                _p3: tealP3ALight.tealA1,
            },
        },
        a2: {
            value: {
                base: tealALight.tealA2,
                _p3: tealP3ALight.tealA2,
            },
        },
        a3: {
            value: {
                base: tealALight.tealA3,
                _p3: tealP3ALight.tealA3,
            },
        },
        a4: {
            value: {
                base: tealALight.tealA4,
                _p3: tealP3ALight.tealA4,
            },
        },
        a5: {
            value: {
                base: tealALight.tealA5,
                _p3: tealP3ALight.tealA5,
            },
        },
        a6: {
            value: {
                base: tealALight.tealA6,
                _p3: tealP3ALight.tealA6,
            },
        },
        a7: {
            value: {
                base: tealALight.tealA7,
                _p3: tealP3ALight.tealA7,
            },
        },
        a8: {
            value: {
                base: tealALight.tealA8,
                _p3: tealP3ALight.tealA8,
            },
        },
        a9: {
            value: {
                base: tealALight.tealA9,
                _p3: tealP3ALight.tealA9,
            },
        },
        a10: {
            value: {
                base: tealALight.tealA10,
                _p3: tealP3ALight.tealA10,
            },
        },
        a11: {
            value: {
                base: tealALight.tealA11,
                _p3: tealP3ALight.tealA11,
            },
        },
        a12: {
            value: {
                base: tealALight.tealA12,
                _p3: tealP3ALight.tealA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#13272580",
                _p3: "color(display-p3 0.0863 0.149 0.1412 / 0.5)",
            },
        },
        1: {
            value: {
                base: tealDark.teal1,
                _p3: tealDarkP3.teal1,
            },
        },
        2: {
            value: {
                base: tealDark.teal2,
                _p3: tealDarkP3.teal2,
            },
        },
        3: {
            value: {
                base: tealDark.teal3,
                _p3: tealDarkP3.teal3,
            },
        },
        4: {
            value: {
                base: tealDark.teal4,
                _p3: tealDarkP3.teal4,
            },
        },
        5: {
            value: {
                base: tealDark.teal5,
                _p3: tealDarkP3.teal5,
            },
        },
        6: {
            value: {
                base: tealDark.teal6,
                _p3: tealDarkP3.teal6,
            },
        },
        7: {
            value: {
                base: tealDark.teal7,
                _p3: tealDarkP3.teal7,
            },
        },
        8: {
            value: {
                base: tealDark.teal8,
                _p3: tealDarkP3.teal8,
            },
        },
        9: {
            value: {
                base: tealDark.teal9,
                _p3: tealDarkP3.teal9,
            },
        },
        10: {
            value: {
                base: tealDark.teal10,
                _p3: tealDarkP3.teal10,
            },
        },
        11: {
            value: {
                base: tealDark.teal11,
                _p3: tealDarkP3.teal11,
            },
        },
        12: {
            value: {
                base: tealDark.teal12,
                _p3: tealDarkP3.teal12,
            },
        },
        a1: {
            value: {
                base: tealDarkA.tealA1,
                _p3: tealDarkP3A.tealA1,
            },
        },
        a2: {
            value: {
                base: tealDarkA.tealA2,
                _p3: tealDarkP3A.tealA2,
            },
        },
        a3: {
            value: {
                base: tealDarkA.tealA3,
                _p3: tealDarkP3A.tealA3,
            },
        },
        a4: {
            value: {
                base: tealDarkA.tealA4,
                _p3: tealDarkP3A.tealA4,
            },
        },
        a5: {
            value: {
                base: tealDarkA.tealA5,
                _p3: tealDarkP3A.tealA5,
            },
        },
        a6: {
            value: {
                base: tealDarkA.tealA6,
                _p3: tealDarkP3A.tealA6,
            },
        },
        a7: {
            value: {
                base: tealDarkA.tealA7,
                _p3: tealDarkP3A.tealA7,
            },
        },
        a8: {
            value: {
                base: tealDarkA.tealA8,
                _p3: tealDarkP3A.tealA8,
            },
        },
        a9: {
            value: {
                base: tealDarkA.tealA9,
                _p3: tealDarkP3A.tealA9,
            },
        },
        a10: {
            value: {
                base: tealDarkA.tealA10,
                _p3: tealDarkP3A.tealA10,
            },
        },
        a11: {
            value: {
                base: tealDarkA.tealA11,
                _p3: tealDarkP3A.tealA11,
            },
        },
        a12: {
            value: {
                base: tealDarkA.tealA12,
                _p3: tealDarkP3A.tealA12,
            },
        },
    },
});
