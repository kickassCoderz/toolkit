import {
    amber as amberLight,
    amberA as amberALight,
    amberDark,
    amberDarkA,
    amberDarkP3,
    amberDarkP3A,
    amberP3 as amberP3Light,
    amberP3A as amberP3ALight,
    sand,
    sandP3,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const amber = createKickassUIBaseColorScale({
    contrast: {
        value: {
            base: sand.sand12,
            _p3: sandP3.sand12,
        },
    },
    light: {
        surface: {
            value: {
                base: "#fefae4cc",
                _p3: "color(display-p3 0.9922 0.9843 0.902 / 0.8)",
            },
        },
        1: {
            value: {
                base: amberLight.amber1,
                _p3: amberP3Light.amber1,
            },
        },
        2: {
            value: {
                base: amberLight.amber2,
                _p3: amberP3Light.amber2,
            },
        },
        3: {
            value: {
                base: amberLight.amber3,
                _p3: amberP3Light.amber3,
            },
        },
        4: {
            value: {
                base: amberLight.amber4,
                _p3: amberP3Light.amber4,
            },
        },
        5: {
            value: {
                base: amberLight.amber5,
                _p3: amberP3Light.amber5,
            },
        },
        6: {
            value: {
                base: amberLight.amber6,
                _p3: amberP3Light.amber6,
            },
        },
        7: {
            value: {
                base: amberLight.amber7,
                _p3: amberP3Light.amber7,
            },
        },
        8: {
            value: {
                base: amberLight.amber8,
                _p3: amberP3Light.amber8,
            },
        },
        9: {
            value: {
                base: amberLight.amber9,
                _p3: amberP3Light.amber9,
            },
        },
        10: {
            value: {
                base: amberLight.amber10,
                _p3: amberP3Light.amber10,
            },
        },

        11: {
            value: {
                base: amberLight.amber11,
                _p3: amberP3Light.amber11,
            },
        },
        12: {
            value: {
                base: amberLight.amber12,
                _p3: amberP3Light.amber12,
            },
        },
        a1: {
            value: {
                base: amberALight.amberA1,
                _p3: amberP3ALight.amberA1,
            },
        },
        a2: {
            value: {
                base: amberALight.amberA2,
                _p3: amberP3ALight.amberA2,
            },
        },
        a3: {
            value: {
                base: amberALight.amberA3,
                _p3: amberP3ALight.amberA3,
            },
        },
        a4: {
            value: {
                base: amberALight.amberA4,
                _p3: amberP3ALight.amberA4,
            },
        },
        a5: {
            value: {
                base: amberALight.amberA5,
                _p3: amberP3ALight.amberA5,
            },
        },
        a6: {
            value: {
                base: amberALight.amberA6,
                _p3: amberP3ALight.amberA6,
            },
        },
        a7: {
            value: {
                base: amberALight.amberA7,
                _p3: amberP3ALight.amberA7,
            },
        },
        a8: {
            value: {
                base: amberALight.amberA8,
                _p3: amberP3ALight.amberA8,
            },
        },
        a9: {
            value: {
                base: amberALight.amberA9,
                _p3: amberP3ALight.amberA9,
            },
        },
        a10: {
            value: {
                base: amberALight.amberA10,
                _p3: amberP3ALight.amberA10,
            },
        },
        a11: {
            value: {
                base: amberALight.amberA11,
                _p3: amberP3ALight.amberA11,
            },
        },
        a12: {
            value: {
                base: amberALight.amberA12,
                _p3: amberP3ALight.amberA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#271f1380",
                _p3: "color(display-p3 0.1412 0.1176 0.0784 / 0.5)",
            },
        },
        1: {
            value: {
                base: amberDark.amber1,
                _p3: amberDarkP3.amber1,
            },
        },
        2: {
            value: {
                base: amberDark.amber2,
                _p3: amberDarkP3.amber2,
            },
        },
        3: {
            value: {
                base: amberDark.amber3,
                _p3: amberDarkP3.amber3,
            },
        },
        4: {
            value: {
                base: amberDark.amber4,
                _p3: amberDarkP3.amber4,
            },
        },
        5: {
            value: {
                base: amberDark.amber5,
                _p3: amberDarkP3.amber5,
            },
        },
        6: {
            value: {
                base: amberDark.amber6,
                _p3: amberDarkP3.amber6,
            },
        },
        7: {
            value: {
                base: amberDark.amber7,
                _p3: amberDarkP3.amber7,
            },
        },
        8: {
            value: {
                base: amberDark.amber8,
                _p3: amberDarkP3.amber8,
            },
        },
        9: {
            value: {
                base: amberDark.amber9,
                _p3: amberDarkP3.amber9,
            },
        },
        10: {
            value: {
                base: amberDark.amber10,
                _p3: amberDarkP3.amber10,
            },
        },
        11: {
            value: {
                base: amberDark.amber11,
                _p3: amberDarkP3.amber11,
            },
        },
        12: {
            value: {
                base: amberDark.amber12,
                _p3: amberDarkP3.amber12,
            },
        },
        a1: {
            value: {
                base: amberDarkA.amberA1,
                _p3: amberDarkP3A.amberA1,
            },
        },
        a2: {
            value: {
                base: amberDarkA.amberA2,
                _p3: amberDarkP3A.amberA2,
            },
        },
        a3: {
            value: {
                base: amberDarkA.amberA3,
                _p3: amberDarkP3A.amberA3,
            },
        },
        a4: {
            value: {
                base: amberDarkA.amberA4,
                _p3: amberDarkP3A.amberA4,
            },
        },
        a5: {
            value: {
                base: amberDarkA.amberA5,
                _p3: amberDarkP3A.amberA5,
            },
        },
        a6: {
            value: {
                base: amberDarkA.amberA6,
                _p3: amberDarkP3A.amberA6,
            },
        },
        a7: {
            value: {
                base: amberDarkA.amberA7,
                _p3: amberDarkP3A.amberA7,
            },
        },
        a8: {
            value: {
                base: amberDarkA.amberA8,
                _p3: amberDarkP3A.amberA8,
            },
        },
        a9: {
            value: {
                base: amberDarkA.amberA9,
                _p3: amberDarkP3A.amberA9,
            },
        },
        a10: {
            value: {
                base: amberDarkA.amberA10,
                _p3: amberDarkP3A.amberA10,
            },
        },
        a11: {
            value: {
                base: amberDarkA.amberA11,
                _p3: amberDarkP3A.amberA11,
            },
        },
        a12: {
            value: {
                base: amberDarkA.amberA12,
                _p3: amberDarkP3A.amberA12,
            },
        },
    },
});
