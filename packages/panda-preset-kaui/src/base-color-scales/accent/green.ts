import {
    green as greenLight,
    greenA as greenALight,
    greenDark,
    greenDarkA,
    greenDarkP3,
    greenDarkP3A,
    greenP3 as greenP3Light,
    greenP3A as greenP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const green = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f1faf4cc",
                _p3: "color(display-p3 0.9569 0.9804 0.9608 / 0.8)",
            },
        },
        1: {
            value: {
                base: greenLight.green1,
                _p3: greenP3Light.green1,
            },
        },
        2: {
            value: {
                base: greenLight.green2,
                _p3: greenP3Light.green2,
            },
        },
        3: {
            value: {
                base: greenLight.green3,
                _p3: greenP3Light.green3,
            },
        },
        4: {
            value: {
                base: greenLight.green4,
                _p3: greenP3Light.green4,
            },
        },
        5: {
            value: {
                base: greenLight.green5,
                _p3: greenP3Light.green5,
            },
        },
        6: {
            value: {
                base: greenLight.green6,
                _p3: greenP3Light.green6,
            },
        },
        7: {
            value: {
                base: greenLight.green7,
                _p3: greenP3Light.green7,
            },
        },
        8: {
            value: {
                base: greenLight.green8,
                _p3: greenP3Light.green8,
            },
        },
        9: {
            value: {
                base: greenLight.green9,
                _p3: greenP3Light.green9,
            },
        },
        10: {
            value: {
                base: greenLight.green10,
                _p3: greenP3Light.green10,
            },
        },

        11: {
            value: {
                base: greenLight.green11,
                _p3: greenP3Light.green11,
            },
        },
        12: {
            value: {
                base: greenLight.green12,
                _p3: greenP3Light.green12,
            },
        },
        a1: {
            value: {
                base: greenALight.greenA1,
                _p3: greenP3ALight.greenA1,
            },
        },
        a2: {
            value: {
                base: greenALight.greenA2,
                _p3: greenP3ALight.greenA2,
            },
        },
        a3: {
            value: {
                base: greenALight.greenA3,
                _p3: greenP3ALight.greenA3,
            },
        },
        a4: {
            value: {
                base: greenALight.greenA4,
                _p3: greenP3ALight.greenA4,
            },
        },
        a5: {
            value: {
                base: greenALight.greenA5,
                _p3: greenP3ALight.greenA5,
            },
        },
        a6: {
            value: {
                base: greenALight.greenA6,
                _p3: greenP3ALight.greenA6,
            },
        },
        a7: {
            value: {
                base: greenALight.greenA7,
                _p3: greenP3ALight.greenA7,
            },
        },
        a8: {
            value: {
                base: greenALight.greenA8,
                _p3: greenP3ALight.greenA8,
            },
        },
        a9: {
            value: {
                base: greenALight.greenA9,
                _p3: greenP3ALight.greenA9,
            },
        },
        a10: {
            value: {
                base: greenALight.greenA10,
                _p3: greenP3ALight.greenA10,
            },
        },
        a11: {
            value: {
                base: greenALight.greenA11,
                _p3: greenP3ALight.greenA11,
            },
        },
        a12: {
            value: {
                base: greenALight.greenA12,
                _p3: greenP3ALight.greenA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#15251d80",
                _p3: "color(display-p3 0.0941 0.1412 0.1098 / 0.5)",
            },
        },
        1: {
            value: {
                base: greenDark.green1,
                _p3: greenDarkP3.green1,
            },
        },
        2: {
            value: {
                base: greenDark.green2,
                _p3: greenDarkP3.green2,
            },
        },
        3: {
            value: {
                base: greenDark.green3,
                _p3: greenDarkP3.green3,
            },
        },
        4: {
            value: {
                base: greenDark.green4,
                _p3: greenDarkP3.green4,
            },
        },
        5: {
            value: {
                base: greenDark.green5,
                _p3: greenDarkP3.green5,
            },
        },
        6: {
            value: {
                base: greenDark.green6,
                _p3: greenDarkP3.green6,
            },
        },
        7: {
            value: {
                base: greenDark.green7,
                _p3: greenDarkP3.green7,
            },
        },
        8: {
            value: {
                base: greenDark.green8,
                _p3: greenDarkP3.green8,
            },
        },
        9: {
            value: {
                base: greenDark.green9,
                _p3: greenDarkP3.green9,
            },
        },
        10: {
            value: {
                base: greenDark.green10,
                _p3: greenDarkP3.green10,
            },
        },
        11: {
            value: {
                base: greenDark.green11,
                _p3: greenDarkP3.green11,
            },
        },
        12: {
            value: {
                base: greenDark.green12,
                _p3: greenDarkP3.green12,
            },
        },
        a1: {
            value: {
                base: greenDarkA.greenA1,
                _p3: greenDarkP3A.greenA1,
            },
        },
        a2: {
            value: {
                base: greenDarkA.greenA2,
                _p3: greenDarkP3A.greenA2,
            },
        },
        a3: {
            value: {
                base: greenDarkA.greenA3,
                _p3: greenDarkP3A.greenA3,
            },
        },
        a4: {
            value: {
                base: greenDarkA.greenA4,
                _p3: greenDarkP3A.greenA4,
            },
        },
        a5: {
            value: {
                base: greenDarkA.greenA5,
                _p3: greenDarkP3A.greenA5,
            },
        },
        a6: {
            value: {
                base: greenDarkA.greenA6,
                _p3: greenDarkP3A.greenA6,
            },
        },
        a7: {
            value: {
                base: greenDarkA.greenA7,
                _p3: greenDarkP3A.greenA7,
            },
        },
        a8: {
            value: {
                base: greenDarkA.greenA8,
                _p3: greenDarkP3A.greenA8,
            },
        },
        a9: {
            value: {
                base: greenDarkA.greenA9,
                _p3: greenDarkP3A.greenA9,
            },
        },
        a10: {
            value: {
                base: greenDarkA.greenA10,
                _p3: greenDarkP3A.greenA10,
            },
        },
        a11: {
            value: {
                base: greenDarkA.greenA11,
                _p3: greenDarkP3A.greenA11,
            },
        },
        a12: {
            value: {
                base: greenDarkA.greenA12,
                _p3: greenDarkP3A.greenA12,
            },
        },
    },
});
