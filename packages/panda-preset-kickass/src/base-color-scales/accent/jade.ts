import {
    jade as jadeLight,
    jadeA as jadeALight,
    jadeDark,
    jadeDarkA,
    jadeDarkP3,
    jadeDarkP3A,
    jadeP3 as jadeP3Light,
    jadeP3A as jadeP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const jade = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f1faf5cc",
                _p3: "color(display-p3 0.9529 0.9804 0.9608 / 0.8)",
            },
        },
        1: {
            value: {
                base: jadeLight.jade1,
                _p3: jadeP3Light.jade1,
            },
        },
        2: {
            value: {
                base: jadeLight.jade2,
                _p3: jadeP3Light.jade2,
            },
        },
        3: {
            value: {
                base: jadeLight.jade3,
                _p3: jadeP3Light.jade3,
            },
        },
        4: {
            value: {
                base: jadeLight.jade4,
                _p3: jadeP3Light.jade4,
            },
        },
        5: {
            value: {
                base: jadeLight.jade5,
                _p3: jadeP3Light.jade5,
            },
        },
        6: {
            value: {
                base: jadeLight.jade6,
                _p3: jadeP3Light.jade6,
            },
        },
        7: {
            value: {
                base: jadeLight.jade7,
                _p3: jadeP3Light.jade7,
            },
        },
        8: {
            value: {
                base: jadeLight.jade8,
                _p3: jadeP3Light.jade8,
            },
        },
        9: {
            value: {
                base: jadeLight.jade9,
                _p3: jadeP3Light.jade9,
            },
        },
        10: {
            value: {
                base: jadeLight.jade10,
                _p3: jadeP3Light.jade10,
            },
        },

        11: {
            value: {
                base: jadeLight.jade11,
                _p3: jadeP3Light.jade11,
            },
        },
        12: {
            value: {
                base: jadeLight.jade12,
                _p3: jadeP3Light.jade12,
            },
        },
        a1: {
            value: {
                base: jadeALight.jadeA1,
                _p3: jadeP3ALight.jadeA1,
            },
        },
        a2: {
            value: {
                base: jadeALight.jadeA2,
                _p3: jadeP3ALight.jadeA2,
            },
        },
        a3: {
            value: {
                base: jadeALight.jadeA3,
                _p3: jadeP3ALight.jadeA3,
            },
        },
        a4: {
            value: {
                base: jadeALight.jadeA4,
                _p3: jadeP3ALight.jadeA4,
            },
        },
        a5: {
            value: {
                base: jadeALight.jadeA5,
                _p3: jadeP3ALight.jadeA5,
            },
        },
        a6: {
            value: {
                base: jadeALight.jadeA6,
                _p3: jadeP3ALight.jadeA6,
            },
        },
        a7: {
            value: {
                base: jadeALight.jadeA7,
                _p3: jadeP3ALight.jadeA7,
            },
        },
        a8: {
            value: {
                base: jadeALight.jadeA8,
                _p3: jadeP3ALight.jadeA8,
            },
        },
        a9: {
            value: {
                base: jadeALight.jadeA9,
                _p3: jadeP3ALight.jadeA9,
            },
        },
        a10: {
            value: {
                base: jadeALight.jadeA10,
                _p3: jadeP3ALight.jadeA10,
            },
        },
        a11: {
            value: {
                base: jadeALight.jadeA11,
                _p3: jadeP3ALight.jadeA11,
            },
        },
        a12: {
            value: {
                base: jadeALight.jadeA12,
                _p3: jadeP3ALight.jadeA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#13271f80",
                _p3: "color(display-p3 0.0863 0.149 0.1176 / 0.5)",
            },
        },
        1: {
            value: {
                base: jadeDark.jade1,
                _p3: jadeDarkP3.jade1,
            },
        },
        2: {
            value: {
                base: jadeDark.jade2,
                _p3: jadeDarkP3.jade2,
            },
        },
        3: {
            value: {
                base: jadeDark.jade3,
                _p3: jadeDarkP3.jade3,
            },
        },
        4: {
            value: {
                base: jadeDark.jade4,
                _p3: jadeDarkP3.jade4,
            },
        },
        5: {
            value: {
                base: jadeDark.jade5,
                _p3: jadeDarkP3.jade5,
            },
        },
        6: {
            value: {
                base: jadeDark.jade6,
                _p3: jadeDarkP3.jade6,
            },
        },
        7: {
            value: {
                base: jadeDark.jade7,
                _p3: jadeDarkP3.jade7,
            },
        },
        8: {
            value: {
                base: jadeDark.jade8,
                _p3: jadeDarkP3.jade8,
            },
        },
        9: {
            value: {
                base: jadeDark.jade9,
                _p3: jadeDarkP3.jade9,
            },
        },
        10: {
            value: {
                base: jadeDark.jade10,
                _p3: jadeDarkP3.jade10,
            },
        },
        11: {
            value: {
                base: jadeDark.jade11,
                _p3: jadeDarkP3.jade11,
            },
        },
        12: {
            value: {
                base: jadeDark.jade12,
                _p3: jadeDarkP3.jade12,
            },
        },
        a1: {
            value: {
                base: jadeDarkA.jadeA1,
                _p3: jadeDarkP3A.jadeA1,
            },
        },
        a2: {
            value: {
                base: jadeDarkA.jadeA2,
                _p3: jadeDarkP3A.jadeA2,
            },
        },
        a3: {
            value: {
                base: jadeDarkA.jadeA3,
                _p3: jadeDarkP3A.jadeA3,
            },
        },
        a4: {
            value: {
                base: jadeDarkA.jadeA4,
                _p3: jadeDarkP3A.jadeA4,
            },
        },
        a5: {
            value: {
                base: jadeDarkA.jadeA5,
                _p3: jadeDarkP3A.jadeA5,
            },
        },
        a6: {
            value: {
                base: jadeDarkA.jadeA6,
                _p3: jadeDarkP3A.jadeA6,
            },
        },
        a7: {
            value: {
                base: jadeDarkA.jadeA7,
                _p3: jadeDarkP3A.jadeA7,
            },
        },
        a8: {
            value: {
                base: jadeDarkA.jadeA8,
                _p3: jadeDarkP3A.jadeA8,
            },
        },
        a9: {
            value: {
                base: jadeDarkA.jadeA9,
                _p3: jadeDarkP3A.jadeA9,
            },
        },
        a10: {
            value: {
                base: jadeDarkA.jadeA10,
                _p3: jadeDarkP3A.jadeA10,
            },
        },
        a11: {
            value: {
                base: jadeDarkA.jadeA11,
                _p3: jadeDarkP3A.jadeA11,
            },
        },
        a12: {
            value: {
                base: jadeDarkA.jadeA12,
                _p3: jadeDarkP3A.jadeA12,
            },
        },
    },
});
