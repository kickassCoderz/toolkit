import {
    pink as pinkLight,
    pinkA as pinkALight,
    pinkDark,
    pinkDarkA,
    pinkDarkP3,
    pinkDarkP3A,
    pinkP3 as pinkP3Light,
    pinkP3A as pinkP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const pink = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fef5facc",
                _p3: "color(display-p3 0.9922 0.9608 0.9804 / 0.8)",
            },
        },
        1: {
            value: {
                base: pinkLight.pink1,
                _p3: pinkP3Light.pink1,
            },
        },
        2: {
            value: {
                base: pinkLight.pink2,
                _p3: pinkP3Light.pink2,
            },
        },
        3: {
            value: {
                base: pinkLight.pink3,
                _p3: pinkP3Light.pink3,
            },
        },
        4: {
            value: {
                base: pinkLight.pink4,
                _p3: pinkP3Light.pink4,
            },
        },
        5: {
            value: {
                base: pinkLight.pink5,
                _p3: pinkP3Light.pink5,
            },
        },
        6: {
            value: {
                base: pinkLight.pink6,
                _p3: pinkP3Light.pink6,
            },
        },
        7: {
            value: {
                base: pinkLight.pink7,
                _p3: pinkP3Light.pink7,
            },
        },
        8: {
            value: {
                base: pinkLight.pink8,
                _p3: pinkP3Light.pink8,
            },
        },
        9: {
            value: {
                base: pinkLight.pink9,
                _p3: pinkP3Light.pink9,
            },
        },
        10: {
            value: {
                base: pinkLight.pink10,
                _p3: pinkP3Light.pink10,
            },
        },

        11: {
            value: {
                base: pinkLight.pink11,
                _p3: pinkP3Light.pink11,
            },
        },
        12: {
            value: {
                base: pinkLight.pink12,
                _p3: pinkP3Light.pink12,
            },
        },
        a1: {
            value: {
                base: pinkALight.pinkA1,
                _p3: pinkP3ALight.pinkA1,
            },
        },
        a2: {
            value: {
                base: pinkALight.pinkA2,
                _p3: pinkP3ALight.pinkA2,
            },
        },
        a3: {
            value: {
                base: pinkALight.pinkA3,
                _p3: pinkP3ALight.pinkA3,
            },
        },
        a4: {
            value: {
                base: pinkALight.pinkA4,
                _p3: pinkP3ALight.pinkA4,
            },
        },
        a5: {
            value: {
                base: pinkALight.pinkA5,
                _p3: pinkP3ALight.pinkA5,
            },
        },
        a6: {
            value: {
                base: pinkALight.pinkA6,
                _p3: pinkP3ALight.pinkA6,
            },
        },
        a7: {
            value: {
                base: pinkALight.pinkA7,
                _p3: pinkP3ALight.pinkA7,
            },
        },
        a8: {
            value: {
                base: pinkALight.pinkA8,
                _p3: pinkP3ALight.pinkA8,
            },
        },
        a9: {
            value: {
                base: pinkALight.pinkA9,
                _p3: pinkP3ALight.pinkA9,
            },
        },
        a10: {
            value: {
                base: pinkALight.pinkA10,
                _p3: pinkP3ALight.pinkA10,
            },
        },
        a11: {
            value: {
                base: pinkALight.pinkA11,
                _p3: pinkP3ALight.pinkA11,
            },
        },
        a12: {
            value: {
                base: pinkALight.pinkA12,
                _p3: pinkP3ALight.pinkA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#31132980",
                _p3: "color(display-p3 0.1725 0.0784 0.149 / 0.5)",
            },
        },
        1: {
            value: {
                base: pinkDark.pink1,
                _p3: pinkDarkP3.pink1,
            },
        },
        2: {
            value: {
                base: pinkDark.pink2,
                _p3: pinkDarkP3.pink2,
            },
        },
        3: {
            value: {
                base: pinkDark.pink3,
                _p3: pinkDarkP3.pink3,
            },
        },
        4: {
            value: {
                base: pinkDark.pink4,
                _p3: pinkDarkP3.pink4,
            },
        },
        5: {
            value: {
                base: pinkDark.pink5,
                _p3: pinkDarkP3.pink5,
            },
        },
        6: {
            value: {
                base: pinkDark.pink6,
                _p3: pinkDarkP3.pink6,
            },
        },
        7: {
            value: {
                base: pinkDark.pink7,
                _p3: pinkDarkP3.pink7,
            },
        },
        8: {
            value: {
                base: pinkDark.pink8,
                _p3: pinkDarkP3.pink8,
            },
        },
        9: {
            value: {
                base: pinkDark.pink9,
                _p3: pinkDarkP3.pink9,
            },
        },
        10: {
            value: {
                base: pinkDark.pink10,
                _p3: pinkDarkP3.pink10,
            },
        },
        11: {
            value: {
                base: pinkDark.pink11,
                _p3: pinkDarkP3.pink11,
            },
        },
        12: {
            value: {
                base: pinkDark.pink12,
                _p3: pinkDarkP3.pink12,
            },
        },
        a1: {
            value: {
                base: pinkDarkA.pinkA1,
                _p3: pinkDarkP3A.pinkA1,
            },
        },
        a2: {
            value: {
                base: pinkDarkA.pinkA2,
                _p3: pinkDarkP3A.pinkA2,
            },
        },
        a3: {
            value: {
                base: pinkDarkA.pinkA3,
                _p3: pinkDarkP3A.pinkA3,
            },
        },
        a4: {
            value: {
                base: pinkDarkA.pinkA4,
                _p3: pinkDarkP3A.pinkA4,
            },
        },
        a5: {
            value: {
                base: pinkDarkA.pinkA5,
                _p3: pinkDarkP3A.pinkA5,
            },
        },
        a6: {
            value: {
                base: pinkDarkA.pinkA6,
                _p3: pinkDarkP3A.pinkA6,
            },
        },
        a7: {
            value: {
                base: pinkDarkA.pinkA7,
                _p3: pinkDarkP3A.pinkA7,
            },
        },
        a8: {
            value: {
                base: pinkDarkA.pinkA8,
                _p3: pinkDarkP3A.pinkA8,
            },
        },
        a9: {
            value: {
                base: pinkDarkA.pinkA9,
                _p3: pinkDarkP3A.pinkA9,
            },
        },
        a10: {
            value: {
                base: pinkDarkA.pinkA10,
                _p3: pinkDarkP3A.pinkA10,
            },
        },
        a11: {
            value: {
                base: pinkDarkA.pinkA11,
                _p3: pinkDarkP3A.pinkA11,
            },
        },
        a12: {
            value: {
                base: pinkDarkA.pinkA12,
                _p3: pinkDarkP3A.pinkA12,
            },
        },
    },
});
