import {
    olive as oliveLight,
    oliveA as oliveALight,
    oliveDark,
    oliveDarkA,
    oliveDarkP3,
    oliveDarkP3A,
    oliveP3 as oliveP3Light,
    oliveP3A as oliveP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const olive = createKickassUIBaseColorScale({
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
                base: oliveLight.olive1,
                _p3: oliveP3Light.olive1,
            },
        },
        2: {
            value: {
                base: oliveLight.olive2,
                _p3: oliveP3Light.olive2,
            },
        },
        3: {
            value: {
                base: oliveLight.olive3,
                _p3: oliveP3Light.olive3,
            },
        },
        4: {
            value: {
                base: oliveLight.olive4,
                _p3: oliveP3Light.olive4,
            },
        },
        5: {
            value: {
                base: oliveLight.olive5,
                _p3: oliveP3Light.olive5,
            },
        },
        6: {
            value: {
                base: oliveLight.olive6,
                _p3: oliveP3Light.olive6,
            },
        },
        7: {
            value: {
                base: oliveLight.olive7,
                _p3: oliveP3Light.olive7,
            },
        },
        8: {
            value: {
                base: oliveLight.olive8,
                _p3: oliveP3Light.olive8,
            },
        },
        9: {
            value: {
                base: oliveLight.olive9,
                _p3: oliveP3Light.olive9,
            },
        },
        10: {
            value: {
                base: oliveLight.olive10,
                _p3: oliveP3Light.olive10,
            },
        },

        11: {
            value: {
                base: oliveLight.olive11,
                _p3: oliveP3Light.olive11,
            },
        },
        12: {
            value: {
                base: oliveLight.olive12,
                _p3: oliveP3Light.olive12,
            },
        },
        a1: {
            value: {
                base: oliveALight.oliveA1,
                _p3: oliveP3ALight.oliveA1,
            },
        },
        a2: {
            value: {
                base: oliveALight.oliveA2,
                _p3: oliveP3ALight.oliveA2,
            },
        },
        a3: {
            value: {
                base: oliveALight.oliveA3,
                _p3: oliveP3ALight.oliveA3,
            },
        },
        a4: {
            value: {
                base: oliveALight.oliveA4,
                _p3: oliveP3ALight.oliveA4,
            },
        },
        a5: {
            value: {
                base: oliveALight.oliveA5,
                _p3: oliveP3ALight.oliveA5,
            },
        },
        a6: {
            value: {
                base: oliveALight.oliveA6,
                _p3: oliveP3ALight.oliveA6,
            },
        },
        a7: {
            value: {
                base: oliveALight.oliveA7,
                _p3: oliveP3ALight.oliveA7,
            },
        },
        a8: {
            value: {
                base: oliveALight.oliveA8,
                _p3: oliveP3ALight.oliveA8,
            },
        },
        a9: {
            value: {
                base: oliveALight.oliveA9,
                _p3: oliveP3ALight.oliveA9,
            },
        },
        a10: {
            value: {
                base: oliveALight.oliveA10,
                _p3: oliveP3ALight.oliveA10,
            },
        },
        a11: {
            value: {
                base: oliveALight.oliveA11,
                _p3: oliveP3ALight.oliveA11,
            },
        },
        a12: {
            value: {
                base: oliveALight.oliveA12,
                _p3: oliveP3ALight.oliveA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#1f201e80",
                _p3: "color(display-p3 0.1176 0.1255 0.1176 / 0.5)",
            },
        },
        1: {
            value: {
                base: oliveDark.olive1,
                _p3: oliveDarkP3.olive1,
            },
        },
        2: {
            value: {
                base: oliveDark.olive2,
                _p3: oliveDarkP3.olive2,
            },
        },
        3: {
            value: {
                base: oliveDark.olive3,
                _p3: oliveDarkP3.olive3,
            },
        },
        4: {
            value: {
                base: oliveDark.olive4,
                _p3: oliveDarkP3.olive4,
            },
        },
        5: {
            value: {
                base: oliveDark.olive5,
                _p3: oliveDarkP3.olive5,
            },
        },
        6: {
            value: {
                base: oliveDark.olive6,
                _p3: oliveDarkP3.olive6,
            },
        },
        7: {
            value: {
                base: oliveDark.olive7,
                _p3: oliveDarkP3.olive7,
            },
        },
        8: {
            value: {
                base: oliveDark.olive8,
                _p3: oliveDarkP3.olive8,
            },
        },
        9: {
            value: {
                base: oliveDark.olive9,
                _p3: oliveDarkP3.olive9,
            },
        },
        10: {
            value: {
                base: oliveDark.olive10,
                _p3: oliveDarkP3.olive10,
            },
        },
        11: {
            value: {
                base: oliveDark.olive11,
                _p3: oliveDarkP3.olive11,
            },
        },
        12: {
            value: {
                base: oliveDark.olive12,
                _p3: oliveDarkP3.olive12,
            },
        },
        a1: {
            value: {
                base: oliveDarkA.oliveA1,
                _p3: oliveDarkP3A.oliveA1,
            },
        },
        a2: {
            value: {
                base: oliveDarkA.oliveA2,
                _p3: oliveDarkP3A.oliveA2,
            },
        },
        a3: {
            value: {
                base: oliveDarkA.oliveA3,
                _p3: oliveDarkP3A.oliveA3,
            },
        },
        a4: {
            value: {
                base: oliveDarkA.oliveA4,
                _p3: oliveDarkP3A.oliveA4,
            },
        },
        a5: {
            value: {
                base: oliveDarkA.oliveA5,
                _p3: oliveDarkP3A.oliveA5,
            },
        },
        a6: {
            value: {
                base: oliveDarkA.oliveA6,
                _p3: oliveDarkP3A.oliveA6,
            },
        },
        a7: {
            value: {
                base: oliveDarkA.oliveA7,
                _p3: oliveDarkP3A.oliveA7,
            },
        },
        a8: {
            value: {
                base: oliveDarkA.oliveA8,
                _p3: oliveDarkP3A.oliveA8,
            },
        },
        a9: {
            value: {
                base: oliveDarkA.oliveA9,
                _p3: oliveDarkP3A.oliveA9,
            },
        },
        a10: {
            value: {
                base: oliveDarkA.oliveA10,
                _p3: oliveDarkP3A.oliveA10,
            },
        },
        a11: {
            value: {
                base: oliveDarkA.oliveA11,
                _p3: oliveDarkP3A.oliveA11,
            },
        },
        a12: {
            value: {
                base: oliveDarkA.oliveA12,
                _p3: oliveDarkP3A.oliveA12,
            },
        },
    },
});
