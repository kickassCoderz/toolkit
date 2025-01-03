import {
    sage as sageLight,
    sageA as sageALight,
    sageDark,
    sageDarkA,
    sageDarkP3,
    sageDarkP3A,
    sageP3 as sageP3Light,
    sageP3A as sageP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const sage = createKickassUIBaseColorScale({
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
                base: sageLight.sage1,
                _p3: sageP3Light.sage1,
            },
        },
        2: {
            value: {
                base: sageLight.sage2,
                _p3: sageP3Light.sage2,
            },
        },
        3: {
            value: {
                base: sageLight.sage3,
                _p3: sageP3Light.sage3,
            },
        },
        4: {
            value: {
                base: sageLight.sage4,
                _p3: sageP3Light.sage4,
            },
        },
        5: {
            value: {
                base: sageLight.sage5,
                _p3: sageP3Light.sage5,
            },
        },
        6: {
            value: {
                base: sageLight.sage6,
                _p3: sageP3Light.sage6,
            },
        },
        7: {
            value: {
                base: sageLight.sage7,
                _p3: sageP3Light.sage7,
            },
        },
        8: {
            value: {
                base: sageLight.sage8,
                _p3: sageP3Light.sage8,
            },
        },
        9: {
            value: {
                base: sageLight.sage9,
                _p3: sageP3Light.sage9,
            },
        },
        10: {
            value: {
                base: sageLight.sage10,
                _p3: sageP3Light.sage10,
            },
        },

        11: {
            value: {
                base: sageLight.sage11,
                _p3: sageP3Light.sage11,
            },
        },
        12: {
            value: {
                base: sageLight.sage12,
                _p3: sageP3Light.sage12,
            },
        },
        a1: {
            value: {
                base: sageALight.sageA1,
                _p3: sageP3ALight.sageA1,
            },
        },
        a2: {
            value: {
                base: sageALight.sageA2,
                _p3: sageP3ALight.sageA2,
            },
        },
        a3: {
            value: {
                base: sageALight.sageA3,
                _p3: sageP3ALight.sageA3,
            },
        },
        a4: {
            value: {
                base: sageALight.sageA4,
                _p3: sageP3ALight.sageA4,
            },
        },
        a5: {
            value: {
                base: sageALight.sageA5,
                _p3: sageP3ALight.sageA5,
            },
        },
        a6: {
            value: {
                base: sageALight.sageA6,
                _p3: sageP3ALight.sageA6,
            },
        },
        a7: {
            value: {
                base: sageALight.sageA7,
                _p3: sageP3ALight.sageA7,
            },
        },
        a8: {
            value: {
                base: sageALight.sageA8,
                _p3: sageP3ALight.sageA8,
            },
        },
        a9: {
            value: {
                base: sageALight.sageA9,
                _p3: sageP3ALight.sageA9,
            },
        },
        a10: {
            value: {
                base: sageALight.sageA10,
                _p3: sageP3ALight.sageA10,
            },
        },
        a11: {
            value: {
                base: sageALight.sageA11,
                _p3: sageP3ALight.sageA11,
            },
        },
        a12: {
            value: {
                base: sageALight.sageA12,
                _p3: sageP3ALight.sageA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#1e201f80",
                _p3: "color(display-p3 0.1176 0.1255 0.1176 / 0.5)",
            },
        },
        1: {
            value: {
                base: sageDark.sage1,
                _p3: sageDarkP3.sage1,
            },
        },
        2: {
            value: {
                base: sageDark.sage2,
                _p3: sageDarkP3.sage2,
            },
        },
        3: {
            value: {
                base: sageDark.sage3,
                _p3: sageDarkP3.sage3,
            },
        },
        4: {
            value: {
                base: sageDark.sage4,
                _p3: sageDarkP3.sage4,
            },
        },
        5: {
            value: {
                base: sageDark.sage5,
                _p3: sageDarkP3.sage5,
            },
        },
        6: {
            value: {
                base: sageDark.sage6,
                _p3: sageDarkP3.sage6,
            },
        },
        7: {
            value: {
                base: sageDark.sage7,
                _p3: sageDarkP3.sage7,
            },
        },
        8: {
            value: {
                base: sageDark.sage8,
                _p3: sageDarkP3.sage8,
            },
        },
        9: {
            value: {
                base: sageDark.sage9,
                _p3: sageDarkP3.sage9,
            },
        },
        10: {
            value: {
                base: sageDark.sage10,
                _p3: sageDarkP3.sage10,
            },
        },
        11: {
            value: {
                base: sageDark.sage11,
                _p3: sageDarkP3.sage11,
            },
        },
        12: {
            value: {
                base: sageDark.sage12,
                _p3: sageDarkP3.sage12,
            },
        },
        a1: {
            value: {
                base: sageDarkA.sageA1,
                _p3: sageDarkP3A.sageA1,
            },
        },
        a2: {
            value: {
                base: sageDarkA.sageA2,
                _p3: sageDarkP3A.sageA2,
            },
        },
        a3: {
            value: {
                base: sageDarkA.sageA3,
                _p3: sageDarkP3A.sageA3,
            },
        },
        a4: {
            value: {
                base: sageDarkA.sageA4,
                _p3: sageDarkP3A.sageA4,
            },
        },
        a5: {
            value: {
                base: sageDarkA.sageA5,
                _p3: sageDarkP3A.sageA5,
            },
        },
        a6: {
            value: {
                base: sageDarkA.sageA6,
                _p3: sageDarkP3A.sageA6,
            },
        },
        a7: {
            value: {
                base: sageDarkA.sageA7,
                _p3: sageDarkP3A.sageA7,
            },
        },
        a8: {
            value: {
                base: sageDarkA.sageA8,
                _p3: sageDarkP3A.sageA8,
            },
        },
        a9: {
            value: {
                base: sageDarkA.sageA9,
                _p3: sageDarkP3A.sageA9,
            },
        },
        a10: {
            value: {
                base: sageDarkA.sageA10,
                _p3: sageDarkP3A.sageA10,
            },
        },
        a11: {
            value: {
                base: sageDarkA.sageA11,
                _p3: sageDarkP3A.sageA11,
            },
        },
        a12: {
            value: {
                base: sageDarkA.sageA12,
                _p3: sageDarkP3A.sageA12,
            },
        },
    },
});
