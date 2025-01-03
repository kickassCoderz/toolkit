import {
    sky as skyLight,
    skyA as skyALight,
    skyDark,
    skyDarkA,
    skyDarkP3,
    skyDarkP3A,
    skyP3 as skyP3Light,
    skyP3A as skyP3ALight,
    slate,
    slateP3,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const sky = createKickassUIBaseColorScale({
    contrast: {
        value: {
            base: slate.slate12,
            _p3: slateP3.slate12,
        },
    },
    light: {
        surface: {
            value: {
                base: "#eef9fdcc",
                _p3: "color(display-p3 0.9412 0.9765 0.9843 / 0.8)",
            },
        },
        1: {
            value: {
                base: skyLight.sky1,
                _p3: skyP3Light.sky1,
            },
        },
        2: {
            value: {
                base: skyLight.sky2,
                _p3: skyP3Light.sky2,
            },
        },
        3: {
            value: {
                base: skyLight.sky3,
                _p3: skyP3Light.sky3,
            },
        },
        4: {
            value: {
                base: skyLight.sky4,
                _p3: skyP3Light.sky4,
            },
        },
        5: {
            value: {
                base: skyLight.sky5,
                _p3: skyP3Light.sky5,
            },
        },
        6: {
            value: {
                base: skyLight.sky6,
                _p3: skyP3Light.sky6,
            },
        },
        7: {
            value: {
                base: skyLight.sky7,
                _p3: skyP3Light.sky7,
            },
        },
        8: {
            value: {
                base: skyLight.sky8,
                _p3: skyP3Light.sky8,
            },
        },
        9: {
            value: {
                base: skyLight.sky9,
                _p3: skyP3Light.sky9,
            },
        },
        10: {
            value: {
                base: skyLight.sky10,
                _p3: skyP3Light.sky10,
            },
        },

        11: {
            value: {
                base: skyLight.sky11,
                _p3: skyP3Light.sky11,
            },
        },
        12: {
            value: {
                base: skyLight.sky12,
                _p3: skyP3Light.sky12,
            },
        },
        a1: {
            value: {
                base: skyALight.skyA1,
                _p3: skyP3ALight.skyA1,
            },
        },
        a2: {
            value: {
                base: skyALight.skyA2,
                _p3: skyP3ALight.skyA2,
            },
        },
        a3: {
            value: {
                base: skyALight.skyA3,
                _p3: skyP3ALight.skyA3,
            },
        },
        a4: {
            value: {
                base: skyALight.skyA4,
                _p3: skyP3ALight.skyA4,
            },
        },
        a5: {
            value: {
                base: skyALight.skyA5,
                _p3: skyP3ALight.skyA5,
            },
        },
        a6: {
            value: {
                base: skyALight.skyA6,
                _p3: skyP3ALight.skyA6,
            },
        },
        a7: {
            value: {
                base: skyALight.skyA7,
                _p3: skyP3ALight.skyA7,
            },
        },
        a8: {
            value: {
                base: skyALight.skyA8,
                _p3: skyP3ALight.skyA8,
            },
        },
        a9: {
            value: {
                base: skyALight.skyA9,
                _p3: skyP3ALight.skyA9,
            },
        },
        a10: {
            value: {
                base: skyALight.skyA10,
                _p3: skyP3ALight.skyA10,
            },
        },
        a11: {
            value: {
                base: skyALight.skyA11,
                _p3: skyP3ALight.skyA11,
            },
        },
        a12: {
            value: {
                base: skyALight.skyA12,
                _p3: skyP3ALight.skyA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#13233b80",
                _p3: "color(display-p3 0.0863 0.1333 0.2196 / 0.5)",
            },
        },
        1: {
            value: {
                base: skyDark.sky1,
                _p3: skyDarkP3.sky1,
            },
        },
        2: {
            value: {
                base: skyDark.sky2,
                _p3: skyDarkP3.sky2,
            },
        },
        3: {
            value: {
                base: skyDark.sky3,
                _p3: skyDarkP3.sky3,
            },
        },
        4: {
            value: {
                base: skyDark.sky4,
                _p3: skyDarkP3.sky4,
            },
        },
        5: {
            value: {
                base: skyDark.sky5,
                _p3: skyDarkP3.sky5,
            },
        },
        6: {
            value: {
                base: skyDark.sky6,
                _p3: skyDarkP3.sky6,
            },
        },
        7: {
            value: {
                base: skyDark.sky7,
                _p3: skyDarkP3.sky7,
            },
        },
        8: {
            value: {
                base: skyDark.sky8,
                _p3: skyDarkP3.sky8,
            },
        },
        9: {
            value: {
                base: skyDark.sky9,
                _p3: skyDarkP3.sky9,
            },
        },
        10: {
            value: {
                base: skyDark.sky10,
                _p3: skyDarkP3.sky10,
            },
        },
        11: {
            value: {
                base: skyDark.sky11,
                _p3: skyDarkP3.sky11,
            },
        },
        12: {
            value: {
                base: skyDark.sky12,
                _p3: skyDarkP3.sky12,
            },
        },
        a1: {
            value: {
                base: skyDarkA.skyA1,
                _p3: skyDarkP3A.skyA1,
            },
        },
        a2: {
            value: {
                base: skyDarkA.skyA2,
                _p3: skyDarkP3A.skyA2,
            },
        },
        a3: {
            value: {
                base: skyDarkA.skyA3,
                _p3: skyDarkP3A.skyA3,
            },
        },
        a4: {
            value: {
                base: skyDarkA.skyA4,
                _p3: skyDarkP3A.skyA4,
            },
        },
        a5: {
            value: {
                base: skyDarkA.skyA5,
                _p3: skyDarkP3A.skyA5,
            },
        },
        a6: {
            value: {
                base: skyDarkA.skyA6,
                _p3: skyDarkP3A.skyA6,
            },
        },
        a7: {
            value: {
                base: skyDarkA.skyA7,
                _p3: skyDarkP3A.skyA7,
            },
        },
        a8: {
            value: {
                base: skyDarkA.skyA8,
                _p3: skyDarkP3A.skyA8,
            },
        },
        a9: {
            value: {
                base: skyDarkA.skyA9,
                _p3: skyDarkP3A.skyA9,
            },
        },
        a10: {
            value: {
                base: skyDarkA.skyA10,
                _p3: skyDarkP3A.skyA10,
            },
        },
        a11: {
            value: {
                base: skyDarkA.skyA11,
                _p3: skyDarkP3A.skyA11,
            },
        },
        a12: {
            value: {
                base: skyDarkA.skyA12,
                _p3: skyDarkP3A.skyA12,
            },
        },
    },
});
