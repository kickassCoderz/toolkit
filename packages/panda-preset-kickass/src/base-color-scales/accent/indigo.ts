import {
    indigo as indigoLight,
    indigoA as indigoALight,
    indigoDark,
    indigoDarkA,
    indigoDarkP3,
    indigoDarkP3A,
    indigoP3 as indigoP3Light,
    indigoP3A as indigoP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const indigo = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#f5f8ffcc",
                _p3: "color(display-p3 0.9647 0.9725 0.9961 / 0.8)",
            },
        },
        1: {
            value: {
                base: indigoLight.indigo1,
                _p3: indigoP3Light.indigo1,
            },
        },
        2: {
            value: {
                base: indigoLight.indigo2,
                _p3: indigoP3Light.indigo2,
            },
        },
        3: {
            value: {
                base: indigoLight.indigo3,
                _p3: indigoP3Light.indigo3,
            },
        },
        4: {
            value: {
                base: indigoLight.indigo4,
                _p3: indigoP3Light.indigo4,
            },
        },
        5: {
            value: {
                base: indigoLight.indigo5,
                _p3: indigoP3Light.indigo5,
            },
        },
        6: {
            value: {
                base: indigoLight.indigo6,
                _p3: indigoP3Light.indigo6,
            },
        },
        7: {
            value: {
                base: indigoLight.indigo7,
                _p3: indigoP3Light.indigo7,
            },
        },
        8: {
            value: {
                base: indigoLight.indigo8,
                _p3: indigoP3Light.indigo8,
            },
        },
        9: {
            value: {
                base: indigoLight.indigo9,
                _p3: indigoP3Light.indigo9,
            },
        },
        10: {
            value: {
                base: indigoLight.indigo10,
                _p3: indigoP3Light.indigo10,
            },
        },

        11: {
            value: {
                base: indigoLight.indigo11,
                _p3: indigoP3Light.indigo11,
            },
        },
        12: {
            value: {
                base: indigoLight.indigo12,
                _p3: indigoP3Light.indigo12,
            },
        },
        a1: {
            value: {
                base: indigoALight.indigoA1,
                _p3: indigoP3ALight.indigoA1,
            },
        },
        a2: {
            value: {
                base: indigoALight.indigoA2,
                _p3: indigoP3ALight.indigoA2,
            },
        },
        a3: {
            value: {
                base: indigoALight.indigoA3,
                _p3: indigoP3ALight.indigoA3,
            },
        },
        a4: {
            value: {
                base: indigoALight.indigoA4,
                _p3: indigoP3ALight.indigoA4,
            },
        },
        a5: {
            value: {
                base: indigoALight.indigoA5,
                _p3: indigoP3ALight.indigoA5,
            },
        },
        a6: {
            value: {
                base: indigoALight.indigoA6,
                _p3: indigoP3ALight.indigoA6,
            },
        },
        a7: {
            value: {
                base: indigoALight.indigoA7,
                _p3: indigoP3ALight.indigoA7,
            },
        },
        a8: {
            value: {
                base: indigoALight.indigoA8,
                _p3: indigoP3ALight.indigoA8,
            },
        },
        a9: {
            value: {
                base: indigoALight.indigoA9,
                _p3: indigoP3ALight.indigoA9,
            },
        },
        a10: {
            value: {
                base: indigoALight.indigoA10,
                _p3: indigoP3ALight.indigoA10,
            },
        },
        a11: {
            value: {
                base: indigoALight.indigoA11,
                _p3: indigoP3ALight.indigoA11,
            },
        },
        a12: {
            value: {
                base: indigoALight.indigoA12,
                _p3: indigoP3ALight.indigoA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#171d3b80",
                _p3: "color(display-p3 0.0941 0.1098 0.2196 / 0.5)",
            },
        },
        1: {
            value: {
                base: indigoDark.indigo1,
                _p3: indigoDarkP3.indigo1,
            },
        },
        2: {
            value: {
                base: indigoDark.indigo2,
                _p3: indigoDarkP3.indigo2,
            },
        },
        3: {
            value: {
                base: indigoDark.indigo3,
                _p3: indigoDarkP3.indigo3,
            },
        },
        4: {
            value: {
                base: indigoDark.indigo4,
                _p3: indigoDarkP3.indigo4,
            },
        },
        5: {
            value: {
                base: indigoDark.indigo5,
                _p3: indigoDarkP3.indigo5,
            },
        },
        6: {
            value: {
                base: indigoDark.indigo6,
                _p3: indigoDarkP3.indigo6,
            },
        },
        7: {
            value: {
                base: indigoDark.indigo7,
                _p3: indigoDarkP3.indigo7,
            },
        },
        8: {
            value: {
                base: indigoDark.indigo8,
                _p3: indigoDarkP3.indigo8,
            },
        },
        9: {
            value: {
                base: indigoDark.indigo9,
                _p3: indigoDarkP3.indigo9,
            },
        },
        10: {
            value: {
                base: indigoDark.indigo10,
                _p3: indigoDarkP3.indigo10,
            },
        },
        11: {
            value: {
                base: indigoDark.indigo11,
                _p3: indigoDarkP3.indigo11,
            },
        },
        12: {
            value: {
                base: indigoDark.indigo12,
                _p3: indigoDarkP3.indigo12,
            },
        },
        a1: {
            value: {
                base: indigoDarkA.indigoA1,
                _p3: indigoDarkP3A.indigoA1,
            },
        },
        a2: {
            value: {
                base: indigoDarkA.indigoA2,
                _p3: indigoDarkP3A.indigoA2,
            },
        },
        a3: {
            value: {
                base: indigoDarkA.indigoA3,
                _p3: indigoDarkP3A.indigoA3,
            },
        },
        a4: {
            value: {
                base: indigoDarkA.indigoA4,
                _p3: indigoDarkP3A.indigoA4,
            },
        },
        a5: {
            value: {
                base: indigoDarkA.indigoA5,
                _p3: indigoDarkP3A.indigoA5,
            },
        },
        a6: {
            value: {
                base: indigoDarkA.indigoA6,
                _p3: indigoDarkP3A.indigoA6,
            },
        },
        a7: {
            value: {
                base: indigoDarkA.indigoA7,
                _p3: indigoDarkP3A.indigoA7,
            },
        },
        a8: {
            value: {
                base: indigoDarkA.indigoA8,
                _p3: indigoDarkP3A.indigoA8,
            },
        },
        a9: {
            value: {
                base: indigoDarkA.indigoA9,
                _p3: indigoDarkP3A.indigoA9,
            },
        },
        a10: {
            value: {
                base: indigoDarkA.indigoA10,
                _p3: indigoDarkP3A.indigoA10,
            },
        },
        a11: {
            value: {
                base: indigoDarkA.indigoA11,
                _p3: indigoDarkP3A.indigoA11,
            },
        },
        a12: {
            value: {
                base: indigoDarkA.indigoA12,
                _p3: indigoDarkP3A.indigoA12,
            },
        },
    },
});
