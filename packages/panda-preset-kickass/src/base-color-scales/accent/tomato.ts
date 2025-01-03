import {
    tomato as tomatoLight,
    tomatoA as tomatoALight,
    tomatoDark,
    tomatoDarkA,
    tomatoDarkP3,
    tomatoDarkP3A,
    tomatoP3 as tomatoP3Light,
    tomatoP3A as tomatoP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const tomato = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fff6f5cc",
                _p3: "color(display-p3 0.9922 0.9647 0.9608 / 0.8)",
            },
        },
        1: {
            value: {
                base: tomatoLight.tomato1,
                _p3: tomatoP3Light.tomato1,
            },
        },
        2: {
            value: {
                base: tomatoLight.tomato2,
                _p3: tomatoP3Light.tomato2,
            },
        },
        3: {
            value: {
                base: tomatoLight.tomato3,
                _p3: tomatoP3Light.tomato3,
            },
        },
        4: {
            value: {
                base: tomatoLight.tomato4,
                _p3: tomatoP3Light.tomato4,
            },
        },
        5: {
            value: {
                base: tomatoLight.tomato5,
                _p3: tomatoP3Light.tomato5,
            },
        },
        6: {
            value: {
                base: tomatoLight.tomato6,
                _p3: tomatoP3Light.tomato6,
            },
        },
        7: {
            value: {
                base: tomatoLight.tomato7,
                _p3: tomatoP3Light.tomato7,
            },
        },
        8: {
            value: {
                base: tomatoLight.tomato8,
                _p3: tomatoP3Light.tomato8,
            },
        },
        9: {
            value: {
                base: tomatoLight.tomato9,
                _p3: tomatoP3Light.tomato9,
            },
        },
        10: {
            value: {
                base: tomatoLight.tomato10,
                _p3: tomatoP3Light.tomato10,
            },
        },

        11: {
            value: {
                base: tomatoLight.tomato11,
                _p3: tomatoP3Light.tomato11,
            },
        },
        12: {
            value: {
                base: tomatoLight.tomato12,
                _p3: tomatoP3Light.tomato12,
            },
        },
        a1: {
            value: {
                base: tomatoALight.tomatoA1,
                _p3: tomatoP3ALight.tomatoA1,
            },
        },
        a2: {
            value: {
                base: tomatoALight.tomatoA2,
                _p3: tomatoP3ALight.tomatoA2,
            },
        },
        a3: {
            value: {
                base: tomatoALight.tomatoA3,
                _p3: tomatoP3ALight.tomatoA3,
            },
        },
        a4: {
            value: {
                base: tomatoALight.tomatoA4,
                _p3: tomatoP3ALight.tomatoA4,
            },
        },
        a5: {
            value: {
                base: tomatoALight.tomatoA5,
                _p3: tomatoP3ALight.tomatoA5,
            },
        },
        a6: {
            value: {
                base: tomatoALight.tomatoA6,
                _p3: tomatoP3ALight.tomatoA6,
            },
        },
        a7: {
            value: {
                base: tomatoALight.tomatoA7,
                _p3: tomatoP3ALight.tomatoA7,
            },
        },
        a8: {
            value: {
                base: tomatoALight.tomatoA8,
                _p3: tomatoP3ALight.tomatoA8,
            },
        },
        a9: {
            value: {
                base: tomatoALight.tomatoA9,
                _p3: tomatoP3ALight.tomatoA9,
            },
        },
        a10: {
            value: {
                base: tomatoALight.tomatoA10,
                _p3: tomatoP3ALight.tomatoA10,
            },
        },
        a11: {
            value: {
                base: tomatoALight.tomatoA11,
                _p3: tomatoP3ALight.tomatoA11,
            },
        },
        a12: {
            value: {
                base: tomatoALight.tomatoA12,
                _p3: tomatoP3ALight.tomatoA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#2d191580",
                _p3: "color(display-p3 0.1569 0.0941 0.0784 / 0.5)",
            },
        },
        1: {
            value: {
                base: tomatoDark.tomato1,
                _p3: tomatoDarkP3.tomato1,
            },
        },
        2: {
            value: {
                base: tomatoDark.tomato2,
                _p3: tomatoDarkP3.tomato2,
            },
        },
        3: {
            value: {
                base: tomatoDark.tomato3,
                _p3: tomatoDarkP3.tomato3,
            },
        },
        4: {
            value: {
                base: tomatoDark.tomato4,
                _p3: tomatoDarkP3.tomato4,
            },
        },
        5: {
            value: {
                base: tomatoDark.tomato5,
                _p3: tomatoDarkP3.tomato5,
            },
        },
        6: {
            value: {
                base: tomatoDark.tomato6,
                _p3: tomatoDarkP3.tomato6,
            },
        },
        7: {
            value: {
                base: tomatoDark.tomato7,
                _p3: tomatoDarkP3.tomato7,
            },
        },
        8: {
            value: {
                base: tomatoDark.tomato8,
                _p3: tomatoDarkP3.tomato8,
            },
        },
        9: {
            value: {
                base: tomatoDark.tomato9,
                _p3: tomatoDarkP3.tomato9,
            },
        },
        10: {
            value: {
                base: tomatoDark.tomato10,
                _p3: tomatoDarkP3.tomato10,
            },
        },
        11: {
            value: {
                base: tomatoDark.tomato11,
                _p3: tomatoDarkP3.tomato11,
            },
        },
        12: {
            value: {
                base: tomatoDark.tomato12,
                _p3: tomatoDarkP3.tomato12,
            },
        },
        a1: {
            value: {
                base: tomatoDarkA.tomatoA1,
                _p3: tomatoDarkP3A.tomatoA1,
            },
        },
        a2: {
            value: {
                base: tomatoDarkA.tomatoA2,
                _p3: tomatoDarkP3A.tomatoA2,
            },
        },
        a3: {
            value: {
                base: tomatoDarkA.tomatoA3,
                _p3: tomatoDarkP3A.tomatoA3,
            },
        },
        a4: {
            value: {
                base: tomatoDarkA.tomatoA4,
                _p3: tomatoDarkP3A.tomatoA4,
            },
        },
        a5: {
            value: {
                base: tomatoDarkA.tomatoA5,
                _p3: tomatoDarkP3A.tomatoA5,
            },
        },
        a6: {
            value: {
                base: tomatoDarkA.tomatoA6,
                _p3: tomatoDarkP3A.tomatoA6,
            },
        },
        a7: {
            value: {
                base: tomatoDarkA.tomatoA7,
                _p3: tomatoDarkP3A.tomatoA7,
            },
        },
        a8: {
            value: {
                base: tomatoDarkA.tomatoA8,
                _p3: tomatoDarkP3A.tomatoA8,
            },
        },
        a9: {
            value: {
                base: tomatoDarkA.tomatoA9,
                _p3: tomatoDarkP3A.tomatoA9,
            },
        },
        a10: {
            value: {
                base: tomatoDarkA.tomatoA10,
                _p3: tomatoDarkP3A.tomatoA10,
            },
        },
        a11: {
            value: {
                base: tomatoDarkA.tomatoA11,
                _p3: tomatoDarkP3A.tomatoA11,
            },
        },
        a12: {
            value: {
                base: tomatoDarkA.tomatoA12,
                _p3: tomatoDarkP3A.tomatoA12,
            },
        },
    },
});
