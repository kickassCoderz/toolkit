import {
    grass as grassLight,
    grassA as grassALight,
    grassDark,
    grassDarkA,
    grassDarkP3,
    grassDarkP3A,
    grassP3 as grassP3Light,
    grassP3A as grassP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const grass = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f3faf3cc",
                _p3: "color(display-p3 0.9569 0.9804 0.9569 / 0.8)",
            },
        },
        1: {
            value: {
                base: grassLight.grass1,
                _p3: grassP3Light.grass1,
            },
        },
        2: {
            value: {
                base: grassLight.grass2,
                _p3: grassP3Light.grass2,
            },
        },
        3: {
            value: {
                base: grassLight.grass3,
                _p3: grassP3Light.grass3,
            },
        },
        4: {
            value: {
                base: grassLight.grass4,
                _p3: grassP3Light.grass4,
            },
        },
        5: {
            value: {
                base: grassLight.grass5,
                _p3: grassP3Light.grass5,
            },
        },
        6: {
            value: {
                base: grassLight.grass6,
                _p3: grassP3Light.grass6,
            },
        },
        7: {
            value: {
                base: grassLight.grass7,
                _p3: grassP3Light.grass7,
            },
        },
        8: {
            value: {
                base: grassLight.grass8,
                _p3: grassP3Light.grass8,
            },
        },
        9: {
            value: {
                base: grassLight.grass9,
                _p3: grassP3Light.grass9,
            },
        },
        10: {
            value: {
                base: grassLight.grass10,
                _p3: grassP3Light.grass10,
            },
        },

        11: {
            value: {
                base: grassLight.grass11,
                _p3: grassP3Light.grass11,
            },
        },
        12: {
            value: {
                base: grassLight.grass12,
                _p3: grassP3Light.grass12,
            },
        },
        a1: {
            value: {
                base: grassALight.grassA1,
                _p3: grassP3ALight.grassA1,
            },
        },
        a2: {
            value: {
                base: grassALight.grassA2,
                _p3: grassP3ALight.grassA2,
            },
        },
        a3: {
            value: {
                base: grassALight.grassA3,
                _p3: grassP3ALight.grassA3,
            },
        },
        a4: {
            value: {
                base: grassALight.grassA4,
                _p3: grassP3ALight.grassA4,
            },
        },
        a5: {
            value: {
                base: grassALight.grassA5,
                _p3: grassP3ALight.grassA5,
            },
        },
        a6: {
            value: {
                base: grassALight.grassA6,
                _p3: grassP3ALight.grassA6,
            },
        },
        a7: {
            value: {
                base: grassALight.grassA7,
                _p3: grassP3ALight.grassA7,
            },
        },
        a8: {
            value: {
                base: grassALight.grassA8,
                _p3: grassP3ALight.grassA8,
            },
        },
        a9: {
            value: {
                base: grassALight.grassA9,
                _p3: grassP3ALight.grassA9,
            },
        },
        a10: {
            value: {
                base: grassALight.grassA10,
                _p3: grassP3ALight.grassA10,
            },
        },
        a11: {
            value: {
                base: grassALight.grassA11,
                _p3: grassP3ALight.grassA11,
            },
        },
        a12: {
            value: {
                base: grassALight.grassA12,
                _p3: grassP3ALight.grassA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#19231b80",
                _p3: "color(display-p3 0.102 0.1333 0.102 / 0.5)",
            },
        },
        1: {
            value: {
                base: grassDark.grass1,
                _p3: grassDarkP3.grass1,
            },
        },
        2: {
            value: {
                base: grassDark.grass2,
                _p3: grassDarkP3.grass2,
            },
        },
        3: {
            value: {
                base: grassDark.grass3,
                _p3: grassDarkP3.grass3,
            },
        },
        4: {
            value: {
                base: grassDark.grass4,
                _p3: grassDarkP3.grass4,
            },
        },
        5: {
            value: {
                base: grassDark.grass5,
                _p3: grassDarkP3.grass5,
            },
        },
        6: {
            value: {
                base: grassDark.grass6,
                _p3: grassDarkP3.grass6,
            },
        },
        7: {
            value: {
                base: grassDark.grass7,
                _p3: grassDarkP3.grass7,
            },
        },
        8: {
            value: {
                base: grassDark.grass8,
                _p3: grassDarkP3.grass8,
            },
        },
        9: {
            value: {
                base: grassDark.grass9,
                _p3: grassDarkP3.grass9,
            },
        },
        10: {
            value: {
                base: grassDark.grass10,
                _p3: grassDarkP3.grass10,
            },
        },
        11: {
            value: {
                base: grassDark.grass11,
                _p3: grassDarkP3.grass11,
            },
        },
        12: {
            value: {
                base: grassDark.grass12,
                _p3: grassDarkP3.grass12,
            },
        },
        a1: {
            value: {
                base: grassDarkA.grassA1,
                _p3: grassDarkP3A.grassA1,
            },
        },
        a2: {
            value: {
                base: grassDarkA.grassA2,
                _p3: grassDarkP3A.grassA2,
            },
        },
        a3: {
            value: {
                base: grassDarkA.grassA3,
                _p3: grassDarkP3A.grassA3,
            },
        },
        a4: {
            value: {
                base: grassDarkA.grassA4,
                _p3: grassDarkP3A.grassA4,
            },
        },
        a5: {
            value: {
                base: grassDarkA.grassA5,
                _p3: grassDarkP3A.grassA5,
            },
        },
        a6: {
            value: {
                base: grassDarkA.grassA6,
                _p3: grassDarkP3A.grassA6,
            },
        },
        a7: {
            value: {
                base: grassDarkA.grassA7,
                _p3: grassDarkP3A.grassA7,
            },
        },
        a8: {
            value: {
                base: grassDarkA.grassA8,
                _p3: grassDarkP3A.grassA8,
            },
        },
        a9: {
            value: {
                base: grassDarkA.grassA9,
                _p3: grassDarkP3A.grassA9,
            },
        },
        a10: {
            value: {
                base: grassDarkA.grassA10,
                _p3: grassDarkP3A.grassA10,
            },
        },
        a11: {
            value: {
                base: grassDarkA.grassA11,
                _p3: grassDarkP3A.grassA11,
            },
        },
        a12: {
            value: {
                base: grassDarkA.grassA12,
                _p3: grassDarkP3A.grassA12,
            },
        },
    },
});
