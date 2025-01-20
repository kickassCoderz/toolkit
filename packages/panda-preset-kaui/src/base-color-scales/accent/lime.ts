import {
    lime as limeLight,
    limeA as limeALight,
    limeDark,
    limeDarkA,
    limeDarkP3,
    limeDarkP3A,
    limeP3 as limeP3Light,
    limeP3A as limeP3ALight,
    olive,
    oliveP3,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const lime = createKickassUIBaseColorScale({
    contrast: {
        value: {
            base: olive.olive12,
            _p3: oliveP3.olive12,
        },
    },
    light: {
        surface: {
            value: {
                base: "#f6f9f0cc",
                _p3: "color(display-p3 0.9725 0.9765 0.9412 / 0.8)",
            },
        },
        1: {
            value: {
                base: limeLight.lime1,
                _p3: limeP3Light.lime1,
            },
        },
        2: {
            value: {
                base: limeLight.lime2,
                _p3: limeP3Light.lime2,
            },
        },
        3: {
            value: {
                base: limeLight.lime3,
                _p3: limeP3Light.lime3,
            },
        },
        4: {
            value: {
                base: limeLight.lime4,
                _p3: limeP3Light.lime4,
            },
        },
        5: {
            value: {
                base: limeLight.lime5,
                _p3: limeP3Light.lime5,
            },
        },
        6: {
            value: {
                base: limeLight.lime6,
                _p3: limeP3Light.lime6,
            },
        },
        7: {
            value: {
                base: limeLight.lime7,
                _p3: limeP3Light.lime7,
            },
        },
        8: {
            value: {
                base: limeLight.lime8,
                _p3: limeP3Light.lime8,
            },
        },
        9: {
            value: {
                base: limeLight.lime9,
                _p3: limeP3Light.lime9,
            },
        },
        10: {
            value: {
                base: limeLight.lime10,
                _p3: limeP3Light.lime10,
            },
        },

        11: {
            value: {
                base: limeLight.lime11,
                _p3: limeP3Light.lime11,
            },
        },
        12: {
            value: {
                base: limeLight.lime12,
                _p3: limeP3Light.lime12,
            },
        },
        a1: {
            value: {
                base: limeALight.limeA1,
                _p3: limeP3ALight.limeA1,
            },
        },
        a2: {
            value: {
                base: limeALight.limeA2,
                _p3: limeP3ALight.limeA2,
            },
        },
        a3: {
            value: {
                base: limeALight.limeA3,
                _p3: limeP3ALight.limeA3,
            },
        },
        a4: {
            value: {
                base: limeALight.limeA4,
                _p3: limeP3ALight.limeA4,
            },
        },
        a5: {
            value: {
                base: limeALight.limeA5,
                _p3: limeP3ALight.limeA5,
            },
        },
        a6: {
            value: {
                base: limeALight.limeA6,
                _p3: limeP3ALight.limeA6,
            },
        },
        a7: {
            value: {
                base: limeALight.limeA7,
                _p3: limeP3ALight.limeA7,
            },
        },
        a8: {
            value: {
                base: limeALight.limeA8,
                _p3: limeP3ALight.limeA8,
            },
        },
        a9: {
            value: {
                base: limeALight.limeA9,
                _p3: limeP3ALight.limeA9,
            },
        },
        a10: {
            value: {
                base: limeALight.limeA10,
                _p3: limeP3ALight.limeA10,
            },
        },
        a11: {
            value: {
                base: limeALight.limeA11,
                _p3: limeP3ALight.limeA11,
            },
        },
        a12: {
            value: {
                base: limeALight.limeA12,
                _p3: limeP3ALight.limeA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#1b211580",
                _p3: "color(display-p3 0.1098 0.1255 0.0784 / 0.5)",
            },
        },
        1: {
            value: {
                base: limeDark.lime1,
                _p3: limeDarkP3.lime1,
            },
        },
        2: {
            value: {
                base: limeDark.lime2,
                _p3: limeDarkP3.lime2,
            },
        },
        3: {
            value: {
                base: limeDark.lime3,
                _p3: limeDarkP3.lime3,
            },
        },
        4: {
            value: {
                base: limeDark.lime4,
                _p3: limeDarkP3.lime4,
            },
        },
        5: {
            value: {
                base: limeDark.lime5,
                _p3: limeDarkP3.lime5,
            },
        },
        6: {
            value: {
                base: limeDark.lime6,
                _p3: limeDarkP3.lime6,
            },
        },
        7: {
            value: {
                base: limeDark.lime7,
                _p3: limeDarkP3.lime7,
            },
        },
        8: {
            value: {
                base: limeDark.lime8,
                _p3: limeDarkP3.lime8,
            },
        },
        9: {
            value: {
                base: limeDark.lime9,
                _p3: limeDarkP3.lime9,
            },
        },
        10: {
            value: {
                base: limeDark.lime10,
                _p3: limeDarkP3.lime10,
            },
        },
        11: {
            value: {
                base: limeDark.lime11,
                _p3: limeDarkP3.lime11,
            },
        },
        12: {
            value: {
                base: limeDark.lime12,
                _p3: limeDarkP3.lime12,
            },
        },
        a1: {
            value: {
                base: limeDarkA.limeA1,
                _p3: limeDarkP3A.limeA1,
            },
        },
        a2: {
            value: {
                base: limeDarkA.limeA2,
                _p3: limeDarkP3A.limeA2,
            },
        },
        a3: {
            value: {
                base: limeDarkA.limeA3,
                _p3: limeDarkP3A.limeA3,
            },
        },
        a4: {
            value: {
                base: limeDarkA.limeA4,
                _p3: limeDarkP3A.limeA4,
            },
        },
        a5: {
            value: {
                base: limeDarkA.limeA5,
                _p3: limeDarkP3A.limeA5,
            },
        },
        a6: {
            value: {
                base: limeDarkA.limeA6,
                _p3: limeDarkP3A.limeA6,
            },
        },
        a7: {
            value: {
                base: limeDarkA.limeA7,
                _p3: limeDarkP3A.limeA7,
            },
        },
        a8: {
            value: {
                base: limeDarkA.limeA8,
                _p3: limeDarkP3A.limeA8,
            },
        },
        a9: {
            value: {
                base: limeDarkA.limeA9,
                _p3: limeDarkP3A.limeA9,
            },
        },
        a10: {
            value: {
                base: limeDarkA.limeA10,
                _p3: limeDarkP3A.limeA10,
            },
        },
        a11: {
            value: {
                base: limeDarkA.limeA11,
                _p3: limeDarkP3A.limeA11,
            },
        },
        a12: {
            value: {
                base: limeDarkA.limeA12,
                _p3: limeDarkP3A.limeA12,
            },
        },
    },
});
