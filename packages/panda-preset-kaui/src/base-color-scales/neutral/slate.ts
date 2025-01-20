import {
    slate as slateLight,
    slateA as slateALight,
    slateDark,
    slateDarkA,
    slateDarkP3,
    slateDarkP3A,
    slateP3 as slateP3Light,
    slateP3A as slateP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const slate = createKickassUIBaseColorScale({
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
                base: slateLight.slate1,
                _p3: slateP3Light.slate1,
            },
        },
        2: {
            value: {
                base: slateLight.slate2,
                _p3: slateP3Light.slate2,
            },
        },
        3: {
            value: {
                base: slateLight.slate3,
                _p3: slateP3Light.slate3,
            },
        },
        4: {
            value: {
                base: slateLight.slate4,
                _p3: slateP3Light.slate4,
            },
        },
        5: {
            value: {
                base: slateLight.slate5,
                _p3: slateP3Light.slate5,
            },
        },
        6: {
            value: {
                base: slateLight.slate6,
                _p3: slateP3Light.slate6,
            },
        },
        7: {
            value: {
                base: slateLight.slate7,
                _p3: slateP3Light.slate7,
            },
        },
        8: {
            value: {
                base: slateLight.slate8,
                _p3: slateP3Light.slate8,
            },
        },
        9: {
            value: {
                base: slateLight.slate9,
                _p3: slateP3Light.slate9,
            },
        },
        10: {
            value: {
                base: slateLight.slate10,
                _p3: slateP3Light.slate10,
            },
        },

        11: {
            value: {
                base: slateLight.slate11,
                _p3: slateP3Light.slate11,
            },
        },
        12: {
            value: {
                base: slateLight.slate12,
                _p3: slateP3Light.slate12,
            },
        },
        a1: {
            value: {
                base: slateALight.slateA1,
                _p3: slateP3ALight.slateA1,
            },
        },
        a2: {
            value: {
                base: slateALight.slateA2,
                _p3: slateP3ALight.slateA2,
            },
        },
        a3: {
            value: {
                base: slateALight.slateA3,
                _p3: slateP3ALight.slateA3,
            },
        },
        a4: {
            value: {
                base: slateALight.slateA4,
                _p3: slateP3ALight.slateA4,
            },
        },
        a5: {
            value: {
                base: slateALight.slateA5,
                _p3: slateP3ALight.slateA5,
            },
        },
        a6: {
            value: {
                base: slateALight.slateA6,
                _p3: slateP3ALight.slateA6,
            },
        },
        a7: {
            value: {
                base: slateALight.slateA7,
                _p3: slateP3ALight.slateA7,
            },
        },
        a8: {
            value: {
                base: slateALight.slateA8,
                _p3: slateP3ALight.slateA8,
            },
        },
        a9: {
            value: {
                base: slateALight.slateA9,
                _p3: slateP3ALight.slateA9,
            },
        },
        a10: {
            value: {
                base: slateALight.slateA10,
                _p3: slateP3ALight.slateA10,
            },
        },
        a11: {
            value: {
                base: slateALight.slateA11,
                _p3: slateP3ALight.slateA11,
            },
        },
        a12: {
            value: {
                base: slateALight.slateA12,
                _p3: slateP3ALight.slateA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#1f212380",
                _p3: "color(display-p3 0.1176 0.1255 0.1333 / 0.5)",
            },
        },
        1: {
            value: {
                base: slateDark.slate1,
                _p3: slateDarkP3.slate1,
            },
        },
        2: {
            value: {
                base: slateDark.slate2,
                _p3: slateDarkP3.slate2,
            },
        },
        3: {
            value: {
                base: slateDark.slate3,
                _p3: slateDarkP3.slate3,
            },
        },
        4: {
            value: {
                base: slateDark.slate4,
                _p3: slateDarkP3.slate4,
            },
        },
        5: {
            value: {
                base: slateDark.slate5,
                _p3: slateDarkP3.slate5,
            },
        },
        6: {
            value: {
                base: slateDark.slate6,
                _p3: slateDarkP3.slate6,
            },
        },
        7: {
            value: {
                base: slateDark.slate7,
                _p3: slateDarkP3.slate7,
            },
        },
        8: {
            value: {
                base: slateDark.slate8,
                _p3: slateDarkP3.slate8,
            },
        },
        9: {
            value: {
                base: slateDark.slate9,
                _p3: slateDarkP3.slate9,
            },
        },
        10: {
            value: {
                base: slateDark.slate10,
                _p3: slateDarkP3.slate10,
            },
        },
        11: {
            value: {
                base: slateDark.slate11,
                _p3: slateDarkP3.slate11,
            },
        },
        12: {
            value: {
                base: slateDark.slate12,
                _p3: slateDarkP3.slate12,
            },
        },
        a1: {
            value: {
                base: slateDarkA.slateA1,
                _p3: slateDarkP3A.slateA1,
            },
        },
        a2: {
            value: {
                base: slateDarkA.slateA2,
                _p3: slateDarkP3A.slateA2,
            },
        },
        a3: {
            value: {
                base: slateDarkA.slateA3,
                _p3: slateDarkP3A.slateA3,
            },
        },
        a4: {
            value: {
                base: slateDarkA.slateA4,
                _p3: slateDarkP3A.slateA4,
            },
        },
        a5: {
            value: {
                base: slateDarkA.slateA5,
                _p3: slateDarkP3A.slateA5,
            },
        },
        a6: {
            value: {
                base: slateDarkA.slateA6,
                _p3: slateDarkP3A.slateA6,
            },
        },
        a7: {
            value: {
                base: slateDarkA.slateA7,
                _p3: slateDarkP3A.slateA7,
            },
        },
        a8: {
            value: {
                base: slateDarkA.slateA8,
                _p3: slateDarkP3A.slateA8,
            },
        },
        a9: {
            value: {
                base: slateDarkA.slateA9,
                _p3: slateDarkP3A.slateA9,
            },
        },
        a10: {
            value: {
                base: slateDarkA.slateA10,
                _p3: slateDarkP3A.slateA10,
            },
        },
        a11: {
            value: {
                base: slateDarkA.slateA11,
                _p3: slateDarkP3A.slateA11,
            },
        },
        a12: {
            value: {
                base: slateDarkA.slateA12,
                _p3: slateDarkP3A.slateA12,
            },
        },
    },
});
