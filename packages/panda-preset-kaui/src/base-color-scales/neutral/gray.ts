import {
    gray as grayLight,
    grayA as grayALight,
    grayDark,
    grayDarkA,
    grayDarkP3,
    grayDarkP3A,
    grayP3 as grayP3Light,
    grayP3A as grayP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const gray = createKickassUIBaseColorScale({
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
                base: grayLight.gray1,
                _p3: grayP3Light.gray1,
            },
        },
        2: {
            value: {
                base: grayLight.gray2,
                _p3: grayP3Light.gray2,
            },
        },
        3: {
            value: {
                base: grayLight.gray3,
                _p3: grayP3Light.gray3,
            },
        },
        4: {
            value: {
                base: grayLight.gray4,
                _p3: grayP3Light.gray4,
            },
        },
        5: {
            value: {
                base: grayLight.gray5,
                _p3: grayP3Light.gray5,
            },
        },
        6: {
            value: {
                base: grayLight.gray6,
                _p3: grayP3Light.gray6,
            },
        },
        7: {
            value: {
                base: grayLight.gray7,
                _p3: grayP3Light.gray7,
            },
        },
        8: {
            value: {
                base: grayLight.gray8,
                _p3: grayP3Light.gray8,
            },
        },
        9: {
            value: {
                base: grayLight.gray9,
                _p3: grayP3Light.gray9,
            },
        },
        10: {
            value: {
                base: grayLight.gray10,
                _p3: grayP3Light.gray10,
            },
        },

        11: {
            value: {
                base: grayLight.gray11,
                _p3: grayP3Light.gray11,
            },
        },
        12: {
            value: {
                base: grayLight.gray12,
                _p3: grayP3Light.gray12,
            },
        },
        a1: {
            value: {
                base: grayALight.grayA1,
                _p3: grayP3ALight.grayA1,
            },
        },
        a2: {
            value: {
                base: grayALight.grayA2,
                _p3: grayP3ALight.grayA2,
            },
        },
        a3: {
            value: {
                base: grayALight.grayA3,
                _p3: grayP3ALight.grayA3,
            },
        },
        a4: {
            value: {
                base: grayALight.grayA4,
                _p3: grayP3ALight.grayA4,
            },
        },
        a5: {
            value: {
                base: grayALight.grayA5,
                _p3: grayP3ALight.grayA5,
            },
        },
        a6: {
            value: {
                base: grayALight.grayA6,
                _p3: grayP3ALight.grayA6,
            },
        },
        a7: {
            value: {
                base: grayALight.grayA7,
                _p3: grayP3ALight.grayA7,
            },
        },
        a8: {
            value: {
                base: grayALight.grayA8,
                _p3: grayP3ALight.grayA8,
            },
        },
        a9: {
            value: {
                base: grayALight.grayA9,
                _p3: grayP3ALight.grayA9,
            },
        },
        a10: {
            value: {
                base: grayALight.grayA10,
                _p3: grayP3ALight.grayA10,
            },
        },
        a11: {
            value: {
                base: grayALight.grayA11,
                _p3: grayP3ALight.grayA11,
            },
        },
        a12: {
            value: {
                base: grayALight.grayA12,
                _p3: grayP3ALight.grayA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#21212180",
                _p3: "color(display-p3 0.1255 0.1255 0.1255 / 0.5)",
            },
        },
        1: {
            value: {
                base: grayDark.gray1,
                _p3: grayDarkP3.gray1,
            },
        },
        2: {
            value: {
                base: grayDark.gray2,
                _p3: grayDarkP3.gray2,
            },
        },
        3: {
            value: {
                base: grayDark.gray3,
                _p3: grayDarkP3.gray3,
            },
        },
        4: {
            value: {
                base: grayDark.gray4,
                _p3: grayDarkP3.gray4,
            },
        },
        5: {
            value: {
                base: grayDark.gray5,
                _p3: grayDarkP3.gray5,
            },
        },
        6: {
            value: {
                base: grayDark.gray6,
                _p3: grayDarkP3.gray6,
            },
        },
        7: {
            value: {
                base: grayDark.gray7,
                _p3: grayDarkP3.gray7,
            },
        },
        8: {
            value: {
                base: grayDark.gray8,
                _p3: grayDarkP3.gray8,
            },
        },
        9: {
            value: {
                base: grayDark.gray9,
                _p3: grayDarkP3.gray9,
            },
        },
        10: {
            value: {
                base: grayDark.gray10,
                _p3: grayDarkP3.gray10,
            },
        },
        11: {
            value: {
                base: grayDark.gray11,
                _p3: grayDarkP3.gray11,
            },
        },
        12: {
            value: {
                base: grayDark.gray12,
                _p3: grayDarkP3.gray12,
            },
        },
        a1: {
            value: {
                base: grayDarkA.grayA1,
                _p3: grayDarkP3A.grayA1,
            },
        },
        a2: {
            value: {
                base: grayDarkA.grayA2,
                _p3: grayDarkP3A.grayA2,
            },
        },
        a3: {
            value: {
                base: grayDarkA.grayA3,
                _p3: grayDarkP3A.grayA3,
            },
        },
        a4: {
            value: {
                base: grayDarkA.grayA4,
                _p3: grayDarkP3A.grayA4,
            },
        },
        a5: {
            value: {
                base: grayDarkA.grayA5,
                _p3: grayDarkP3A.grayA5,
            },
        },
        a6: {
            value: {
                base: grayDarkA.grayA6,
                _p3: grayDarkP3A.grayA6,
            },
        },
        a7: {
            value: {
                base: grayDarkA.grayA7,
                _p3: grayDarkP3A.grayA7,
            },
        },
        a8: {
            value: {
                base: grayDarkA.grayA8,
                _p3: grayDarkP3A.grayA8,
            },
        },
        a9: {
            value: {
                base: grayDarkA.grayA9,
                _p3: grayDarkP3A.grayA9,
            },
        },
        a10: {
            value: {
                base: grayDarkA.grayA10,
                _p3: grayDarkP3A.grayA10,
            },
        },
        a11: {
            value: {
                base: grayDarkA.grayA11,
                _p3: grayDarkP3A.grayA11,
            },
        },
        a12: {
            value: {
                base: grayDarkA.grayA12,
                _p3: grayDarkP3A.grayA12,
            },
        },
    },
});
