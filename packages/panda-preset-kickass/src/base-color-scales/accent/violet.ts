import {
    violet as violetLight,
    violetA as violetALight,
    violetDark,
    violetDarkA,
    violetDarkP3,
    violetDarkP3A,
    violetP3 as violetP3Light,
    violetP3A as violetP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const violet = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f9f6ffcc",
                _p3: "color(display-p3 0.9725 0.9647 0.9961 / 0.8)",
            },
        },
        1: {
            value: {
                base: violetLight.violet1,
                _p3: violetP3Light.violet1,
            },
        },
        2: {
            value: {
                base: violetLight.violet2,
                _p3: violetP3Light.violet2,
            },
        },
        3: {
            value: {
                base: violetLight.violet3,
                _p3: violetP3Light.violet3,
            },
        },
        4: {
            value: {
                base: violetLight.violet4,
                _p3: violetP3Light.violet4,
            },
        },
        5: {
            value: {
                base: violetLight.violet5,
                _p3: violetP3Light.violet5,
            },
        },
        6: {
            value: {
                base: violetLight.violet6,
                _p3: violetP3Light.violet6,
            },
        },
        7: {
            value: {
                base: violetLight.violet7,
                _p3: violetP3Light.violet7,
            },
        },
        8: {
            value: {
                base: violetLight.violet8,
                _p3: violetP3Light.violet8,
            },
        },
        9: {
            value: {
                base: violetLight.violet9,
                _p3: violetP3Light.violet9,
            },
        },
        10: {
            value: {
                base: violetLight.violet10,
                _p3: violetP3Light.violet10,
            },
        },

        11: {
            value: {
                base: violetLight.violet11,
                _p3: violetP3Light.violet11,
            },
        },
        12: {
            value: {
                base: violetLight.violet12,
                _p3: violetP3Light.violet12,
            },
        },
        a1: {
            value: {
                base: violetALight.violetA1,
                _p3: violetP3ALight.violetA1,
            },
        },
        a2: {
            value: {
                base: violetALight.violetA2,
                _p3: violetP3ALight.violetA2,
            },
        },
        a3: {
            value: {
                base: violetALight.violetA3,
                _p3: violetP3ALight.violetA3,
            },
        },
        a4: {
            value: {
                base: violetALight.violetA4,
                _p3: violetP3ALight.violetA4,
            },
        },
        a5: {
            value: {
                base: violetALight.violetA5,
                _p3: violetP3ALight.violetA5,
            },
        },
        a6: {
            value: {
                base: violetALight.violetA6,
                _p3: violetP3ALight.violetA6,
            },
        },
        a7: {
            value: {
                base: violetALight.violetA7,
                _p3: violetP3ALight.violetA7,
            },
        },
        a8: {
            value: {
                base: violetALight.violetA8,
                _p3: violetP3ALight.violetA8,
            },
        },
        a9: {
            value: {
                base: violetALight.violetA9,
                _p3: violetP3ALight.violetA9,
            },
        },
        a10: {
            value: {
                base: violetALight.violetA10,
                _p3: violetP3ALight.violetA10,
            },
        },
        a11: {
            value: {
                base: violetALight.violetA11,
                _p3: violetP3ALight.violetA11,
            },
        },
        a12: {
            value: {
                base: violetALight.violetA12,
                _p3: violetP3ALight.violetA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#25193980",
                _p3: "color(display-p3 0.1333 0.102 0.2118 / 0.5)",
            },
        },
        1: {
            value: {
                base: violetDark.violet1,
                _p3: violetDarkP3.violet1,
            },
        },
        2: {
            value: {
                base: violetDark.violet2,
                _p3: violetDarkP3.violet2,
            },
        },
        3: {
            value: {
                base: violetDark.violet3,
                _p3: violetDarkP3.violet3,
            },
        },
        4: {
            value: {
                base: violetDark.violet4,
                _p3: violetDarkP3.violet4,
            },
        },
        5: {
            value: {
                base: violetDark.violet5,
                _p3: violetDarkP3.violet5,
            },
        },
        6: {
            value: {
                base: violetDark.violet6,
                _p3: violetDarkP3.violet6,
            },
        },
        7: {
            value: {
                base: violetDark.violet7,
                _p3: violetDarkP3.violet7,
            },
        },
        8: {
            value: {
                base: violetDark.violet8,
                _p3: violetDarkP3.violet8,
            },
        },
        9: {
            value: {
                base: violetDark.violet9,
                _p3: violetDarkP3.violet9,
            },
        },
        10: {
            value: {
                base: violetDark.violet10,
                _p3: violetDarkP3.violet10,
            },
        },
        11: {
            value: {
                base: violetDark.violet11,
                _p3: violetDarkP3.violet11,
            },
        },
        12: {
            value: {
                base: violetDark.violet12,
                _p3: violetDarkP3.violet12,
            },
        },
        a1: {
            value: {
                base: violetDarkA.violetA1,
                _p3: violetDarkP3A.violetA1,
            },
        },
        a2: {
            value: {
                base: violetDarkA.violetA2,
                _p3: violetDarkP3A.violetA2,
            },
        },
        a3: {
            value: {
                base: violetDarkA.violetA3,
                _p3: violetDarkP3A.violetA3,
            },
        },
        a4: {
            value: {
                base: violetDarkA.violetA4,
                _p3: violetDarkP3A.violetA4,
            },
        },
        a5: {
            value: {
                base: violetDarkA.violetA5,
                _p3: violetDarkP3A.violetA5,
            },
        },
        a6: {
            value: {
                base: violetDarkA.violetA6,
                _p3: violetDarkP3A.violetA6,
            },
        },
        a7: {
            value: {
                base: violetDarkA.violetA7,
                _p3: violetDarkP3A.violetA7,
            },
        },
        a8: {
            value: {
                base: violetDarkA.violetA8,
                _p3: violetDarkP3A.violetA8,
            },
        },
        a9: {
            value: {
                base: violetDarkA.violetA9,
                _p3: violetDarkP3A.violetA9,
            },
        },
        a10: {
            value: {
                base: violetDarkA.violetA10,
                _p3: violetDarkP3A.violetA10,
            },
        },
        a11: {
            value: {
                base: violetDarkA.violetA11,
                _p3: violetDarkP3A.violetA11,
            },
        },
        a12: {
            value: {
                base: violetDarkA.violetA12,
                _p3: violetDarkP3A.violetA12,
            },
        },
    },
});
