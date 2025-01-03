import {
    brown as brownLight,
    brownA as brownALight,
    brownDark,
    brownDarkA,
    brownDarkP3,
    brownDarkP3A,
    brownP3 as brownP3Light,
    brownP3A as brownP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const brown = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fbf8f4cc",
                _p3: "color(display-p3 0.9843 0.9725 0.9569 / 0.8)",
            },
        },
        1: {
            value: {
                base: brownLight.brown1,
                _p3: brownP3Light.brown1,
            },
        },
        2: {
            value: {
                base: brownLight.brown2,
                _p3: brownP3Light.brown2,
            },
        },
        3: {
            value: {
                base: brownLight.brown3,
                _p3: brownP3Light.brown3,
            },
        },
        4: {
            value: {
                base: brownLight.brown4,
                _p3: brownP3Light.brown4,
            },
        },
        5: {
            value: {
                base: brownLight.brown5,
                _p3: brownP3Light.brown5,
            },
        },
        6: {
            value: {
                base: brownLight.brown6,
                _p3: brownP3Light.brown6,
            },
        },
        7: {
            value: {
                base: brownLight.brown7,
                _p3: brownP3Light.brown7,
            },
        },
        8: {
            value: {
                base: brownLight.brown8,
                _p3: brownP3Light.brown8,
            },
        },
        9: {
            value: {
                base: brownLight.brown9,
                _p3: brownP3Light.brown9,
            },
        },
        10: {
            value: {
                base: brownLight.brown10,
                _p3: brownP3Light.brown10,
            },
        },

        11: {
            value: {
                base: brownLight.brown11,
                _p3: brownP3Light.brown11,
            },
        },
        12: {
            value: {
                base: brownLight.brown12,
                _p3: brownP3Light.brown12,
            },
        },
        a1: {
            value: {
                base: brownALight.brownA1,
                _p3: brownP3ALight.brownA1,
            },
        },
        a2: {
            value: {
                base: brownALight.brownA2,
                _p3: brownP3ALight.brownA2,
            },
        },
        a3: {
            value: {
                base: brownALight.brownA3,
                _p3: brownP3ALight.brownA3,
            },
        },
        a4: {
            value: {
                base: brownALight.brownA4,
                _p3: brownP3ALight.brownA4,
            },
        },
        a5: {
            value: {
                base: brownALight.brownA5,
                _p3: brownP3ALight.brownA5,
            },
        },
        a6: {
            value: {
                base: brownALight.brownA6,
                _p3: brownP3ALight.brownA6,
            },
        },
        a7: {
            value: {
                base: brownALight.brownA7,
                _p3: brownP3ALight.brownA7,
            },
        },
        a8: {
            value: {
                base: brownALight.brownA8,
                _p3: brownP3ALight.brownA8,
            },
        },
        a9: {
            value: {
                base: brownALight.brownA9,
                _p3: brownP3ALight.brownA9,
            },
        },
        a10: {
            value: {
                base: brownALight.brownA10,
                _p3: brownP3ALight.brownA10,
            },
        },
        a11: {
            value: {
                base: brownALight.brownA11,
                _p3: brownP3ALight.brownA11,
            },
        },
        a12: {
            value: {
                base: brownALight.brownA12,
                _p3: brownP3ALight.brownA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#271f1b80",
                _p3: "color(display-p3 0.1412 0.1176 0.102 / 0.5)",
            },
        },
        1: {
            value: {
                base: brownDark.brown1,
                _p3: brownDarkP3.brown1,
            },
        },
        2: {
            value: {
                base: brownDark.brown2,
                _p3: brownDarkP3.brown2,
            },
        },
        3: {
            value: {
                base: brownDark.brown3,
                _p3: brownDarkP3.brown3,
            },
        },
        4: {
            value: {
                base: brownDark.brown4,
                _p3: brownDarkP3.brown4,
            },
        },
        5: {
            value: {
                base: brownDark.brown5,
                _p3: brownDarkP3.brown5,
            },
        },
        6: {
            value: {
                base: brownDark.brown6,
                _p3: brownDarkP3.brown6,
            },
        },
        7: {
            value: {
                base: brownDark.brown7,
                _p3: brownDarkP3.brown7,
            },
        },
        8: {
            value: {
                base: brownDark.brown8,
                _p3: brownDarkP3.brown8,
            },
        },
        9: {
            value: {
                base: brownDark.brown9,
                _p3: brownDarkP3.brown9,
            },
        },
        10: {
            value: {
                base: brownDark.brown10,
                _p3: brownDarkP3.brown10,
            },
        },
        11: {
            value: {
                base: brownDark.brown11,
                _p3: brownDarkP3.brown11,
            },
        },
        12: {
            value: {
                base: brownDark.brown12,
                _p3: brownDarkP3.brown12,
            },
        },
        a1: {
            value: {
                base: brownDarkA.brownA1,
                _p3: brownDarkP3A.brownA1,
            },
        },
        a2: {
            value: {
                base: brownDarkA.brownA2,
                _p3: brownDarkP3A.brownA2,
            },
        },
        a3: {
            value: {
                base: brownDarkA.brownA3,
                _p3: brownDarkP3A.brownA3,
            },
        },
        a4: {
            value: {
                base: brownDarkA.brownA4,
                _p3: brownDarkP3A.brownA4,
            },
        },
        a5: {
            value: {
                base: brownDarkA.brownA5,
                _p3: brownDarkP3A.brownA5,
            },
        },
        a6: {
            value: {
                base: brownDarkA.brownA6,
                _p3: brownDarkP3A.brownA6,
            },
        },
        a7: {
            value: {
                base: brownDarkA.brownA7,
                _p3: brownDarkP3A.brownA7,
            },
        },
        a8: {
            value: {
                base: brownDarkA.brownA8,
                _p3: brownDarkP3A.brownA8,
            },
        },
        a9: {
            value: {
                base: brownDarkA.brownA9,
                _p3: brownDarkP3A.brownA9,
            },
        },
        a10: {
            value: {
                base: brownDarkA.brownA10,
                _p3: brownDarkP3A.brownA10,
            },
        },
        a11: {
            value: {
                base: brownDarkA.brownA11,
                _p3: brownDarkP3A.brownA11,
            },
        },
        a12: {
            value: {
                base: brownDarkA.brownA12,
                _p3: brownDarkP3A.brownA12,
            },
        },
    },
});
