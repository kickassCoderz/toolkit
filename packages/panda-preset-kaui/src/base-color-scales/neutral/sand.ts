import {
    sand as sandLight,
    sandA as sandALight,
    sandDark,
    sandDarkA,
    sandDarkP3,
    sandDarkP3A,
    sandP3 as sandP3Light,
    sandP3A as sandP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const sand = createKickassUIBaseColorScale({
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
                base: sandLight.sand1,
                _p3: sandP3Light.sand1,
            },
        },
        2: {
            value: {
                base: sandLight.sand2,
                _p3: sandP3Light.sand2,
            },
        },
        3: {
            value: {
                base: sandLight.sand3,
                _p3: sandP3Light.sand3,
            },
        },
        4: {
            value: {
                base: sandLight.sand4,
                _p3: sandP3Light.sand4,
            },
        },
        5: {
            value: {
                base: sandLight.sand5,
                _p3: sandP3Light.sand5,
            },
        },
        6: {
            value: {
                base: sandLight.sand6,
                _p3: sandP3Light.sand6,
            },
        },
        7: {
            value: {
                base: sandLight.sand7,
                _p3: sandP3Light.sand7,
            },
        },
        8: {
            value: {
                base: sandLight.sand8,
                _p3: sandP3Light.sand8,
            },
        },
        9: {
            value: {
                base: sandLight.sand9,
                _p3: sandP3Light.sand9,
            },
        },
        10: {
            value: {
                base: sandLight.sand10,
                _p3: sandP3Light.sand10,
            },
        },

        11: {
            value: {
                base: sandLight.sand11,
                _p3: sandP3Light.sand11,
            },
        },
        12: {
            value: {
                base: sandLight.sand12,
                _p3: sandP3Light.sand12,
            },
        },
        a1: {
            value: {
                base: sandALight.sandA1,
                _p3: sandP3ALight.sandA1,
            },
        },
        a2: {
            value: {
                base: sandALight.sandA2,
                _p3: sandP3ALight.sandA2,
            },
        },
        a3: {
            value: {
                base: sandALight.sandA3,
                _p3: sandP3ALight.sandA3,
            },
        },
        a4: {
            value: {
                base: sandALight.sandA4,
                _p3: sandP3ALight.sandA4,
            },
        },
        a5: {
            value: {
                base: sandALight.sandA5,
                _p3: sandP3ALight.sandA5,
            },
        },
        a6: {
            value: {
                base: sandALight.sandA6,
                _p3: sandP3ALight.sandA6,
            },
        },
        a7: {
            value: {
                base: sandALight.sandA7,
                _p3: sandP3ALight.sandA7,
            },
        },
        a8: {
            value: {
                base: sandALight.sandA8,
                _p3: sandP3ALight.sandA8,
            },
        },
        a9: {
            value: {
                base: sandALight.sandA9,
                _p3: sandP3ALight.sandA9,
            },
        },
        a10: {
            value: {
                base: sandALight.sandA10,
                _p3: sandP3ALight.sandA10,
            },
        },
        a11: {
            value: {
                base: sandALight.sandA11,
                _p3: sandP3ALight.sandA11,
            },
        },
        a12: {
            value: {
                base: sandALight.sandA12,
                _p3: sandP3ALight.sandA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#21212080",
                _p3: "color(display-p3 0.1255 0.1255 0.1255 / 0.5)",
            },
        },
        1: {
            value: {
                base: sandDark.sand1,
                _p3: sandDarkP3.sand1,
            },
        },
        2: {
            value: {
                base: sandDark.sand2,
                _p3: sandDarkP3.sand2,
            },
        },
        3: {
            value: {
                base: sandDark.sand3,
                _p3: sandDarkP3.sand3,
            },
        },
        4: {
            value: {
                base: sandDark.sand4,
                _p3: sandDarkP3.sand4,
            },
        },
        5: {
            value: {
                base: sandDark.sand5,
                _p3: sandDarkP3.sand5,
            },
        },
        6: {
            value: {
                base: sandDark.sand6,
                _p3: sandDarkP3.sand6,
            },
        },
        7: {
            value: {
                base: sandDark.sand7,
                _p3: sandDarkP3.sand7,
            },
        },
        8: {
            value: {
                base: sandDark.sand8,
                _p3: sandDarkP3.sand8,
            },
        },
        9: {
            value: {
                base: sandDark.sand9,
                _p3: sandDarkP3.sand9,
            },
        },
        10: {
            value: {
                base: sandDark.sand10,
                _p3: sandDarkP3.sand10,
            },
        },
        11: {
            value: {
                base: sandDark.sand11,
                _p3: sandDarkP3.sand11,
            },
        },
        12: {
            value: {
                base: sandDark.sand12,
                _p3: sandDarkP3.sand12,
            },
        },
        a1: {
            value: {
                base: sandDarkA.sandA1,
                _p3: sandDarkP3A.sandA1,
            },
        },
        a2: {
            value: {
                base: sandDarkA.sandA2,
                _p3: sandDarkP3A.sandA2,
            },
        },
        a3: {
            value: {
                base: sandDarkA.sandA3,
                _p3: sandDarkP3A.sandA3,
            },
        },
        a4: {
            value: {
                base: sandDarkA.sandA4,
                _p3: sandDarkP3A.sandA4,
            },
        },
        a5: {
            value: {
                base: sandDarkA.sandA5,
                _p3: sandDarkP3A.sandA5,
            },
        },
        a6: {
            value: {
                base: sandDarkA.sandA6,
                _p3: sandDarkP3A.sandA6,
            },
        },
        a7: {
            value: {
                base: sandDarkA.sandA7,
                _p3: sandDarkP3A.sandA7,
            },
        },
        a8: {
            value: {
                base: sandDarkA.sandA8,
                _p3: sandDarkP3A.sandA8,
            },
        },
        a9: {
            value: {
                base: sandDarkA.sandA9,
                _p3: sandDarkP3A.sandA9,
            },
        },
        a10: {
            value: {
                base: sandDarkA.sandA10,
                _p3: sandDarkP3A.sandA10,
            },
        },
        a11: {
            value: {
                base: sandDarkA.sandA11,
                _p3: sandDarkP3A.sandA11,
            },
        },
        a12: {
            value: {
                base: sandDarkA.sandA12,
                _p3: sandDarkP3A.sandA12,
            },
        },
    },
});
