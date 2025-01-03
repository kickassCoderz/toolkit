import {
    ruby as rubyLight,
    rubyA as rubyALight,
    rubyDark,
    rubyDarkA,
    rubyDarkP3,
    rubyDarkP3A,
    rubyP3 as rubyP3Light,
    rubyP3A as rubyP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const ruby = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fff5f6cc",
                _p3: "color(display-p3 0.9961 0.9647 0.9647 / 0.8)",
            },
        },
        1: {
            value: {
                base: rubyLight.ruby1,
                _p3: rubyP3Light.ruby1,
            },
        },
        2: {
            value: {
                base: rubyLight.ruby2,
                _p3: rubyP3Light.ruby2,
            },
        },
        3: {
            value: {
                base: rubyLight.ruby3,
                _p3: rubyP3Light.ruby3,
            },
        },
        4: {
            value: {
                base: rubyLight.ruby4,
                _p3: rubyP3Light.ruby4,
            },
        },
        5: {
            value: {
                base: rubyLight.ruby5,
                _p3: rubyP3Light.ruby5,
            },
        },
        6: {
            value: {
                base: rubyLight.ruby6,
                _p3: rubyP3Light.ruby6,
            },
        },
        7: {
            value: {
                base: rubyLight.ruby7,
                _p3: rubyP3Light.ruby7,
            },
        },
        8: {
            value: {
                base: rubyLight.ruby8,
                _p3: rubyP3Light.ruby8,
            },
        },
        9: {
            value: {
                base: rubyLight.ruby9,
                _p3: rubyP3Light.ruby9,
            },
        },
        10: {
            value: {
                base: rubyLight.ruby10,
                _p3: rubyP3Light.ruby10,
            },
        },

        11: {
            value: {
                base: rubyLight.ruby11,
                _p3: rubyP3Light.ruby11,
            },
        },
        12: {
            value: {
                base: rubyLight.ruby12,
                _p3: rubyP3Light.ruby12,
            },
        },
        a1: {
            value: {
                base: rubyALight.rubyA1,
                _p3: rubyP3ALight.rubyA1,
            },
        },
        a2: {
            value: {
                base: rubyALight.rubyA2,
                _p3: rubyP3ALight.rubyA2,
            },
        },
        a3: {
            value: {
                base: rubyALight.rubyA3,
                _p3: rubyP3ALight.rubyA3,
            },
        },
        a4: {
            value: {
                base: rubyALight.rubyA4,
                _p3: rubyP3ALight.rubyA4,
            },
        },
        a5: {
            value: {
                base: rubyALight.rubyA5,
                _p3: rubyP3ALight.rubyA5,
            },
        },
        a6: {
            value: {
                base: rubyALight.rubyA6,
                _p3: rubyP3ALight.rubyA6,
            },
        },
        a7: {
            value: {
                base: rubyALight.rubyA7,
                _p3: rubyP3ALight.rubyA7,
            },
        },
        a8: {
            value: {
                base: rubyALight.rubyA8,
                _p3: rubyP3ALight.rubyA8,
            },
        },
        a9: {
            value: {
                base: rubyALight.rubyA9,
                _p3: rubyP3ALight.rubyA9,
            },
        },
        a10: {
            value: {
                base: rubyALight.rubyA10,
                _p3: rubyP3ALight.rubyA10,
            },
        },
        a11: {
            value: {
                base: rubyALight.rubyA11,
                _p3: rubyP3ALight.rubyA11,
            },
        },
        a12: {
            value: {
                base: rubyALight.rubyA12,
                _p3: rubyP3ALight.rubyA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#2b191d80",
                _p3: "color(display-p3 0.1569 0.0941 0.1098 / 0.5)",
            },
        },
        1: {
            value: {
                base: rubyDark.ruby1,
                _p3: rubyDarkP3.ruby1,
            },
        },
        2: {
            value: {
                base: rubyDark.ruby2,
                _p3: rubyDarkP3.ruby2,
            },
        },
        3: {
            value: {
                base: rubyDark.ruby3,
                _p3: rubyDarkP3.ruby3,
            },
        },
        4: {
            value: {
                base: rubyDark.ruby4,
                _p3: rubyDarkP3.ruby4,
            },
        },
        5: {
            value: {
                base: rubyDark.ruby5,
                _p3: rubyDarkP3.ruby5,
            },
        },
        6: {
            value: {
                base: rubyDark.ruby6,
                _p3: rubyDarkP3.ruby6,
            },
        },
        7: {
            value: {
                base: rubyDark.ruby7,
                _p3: rubyDarkP3.ruby7,
            },
        },
        8: {
            value: {
                base: rubyDark.ruby8,
                _p3: rubyDarkP3.ruby8,
            },
        },
        9: {
            value: {
                base: rubyDark.ruby9,
                _p3: rubyDarkP3.ruby9,
            },
        },
        10: {
            value: {
                base: rubyDark.ruby10,
                _p3: rubyDarkP3.ruby10,
            },
        },
        11: {
            value: {
                base: rubyDark.ruby11,
                _p3: rubyDarkP3.ruby11,
            },
        },
        12: {
            value: {
                base: rubyDark.ruby12,
                _p3: rubyDarkP3.ruby12,
            },
        },
        a1: {
            value: {
                base: rubyDarkA.rubyA1,
                _p3: rubyDarkP3A.rubyA1,
            },
        },
        a2: {
            value: {
                base: rubyDarkA.rubyA2,
                _p3: rubyDarkP3A.rubyA2,
            },
        },
        a3: {
            value: {
                base: rubyDarkA.rubyA3,
                _p3: rubyDarkP3A.rubyA3,
            },
        },
        a4: {
            value: {
                base: rubyDarkA.rubyA4,
                _p3: rubyDarkP3A.rubyA4,
            },
        },
        a5: {
            value: {
                base: rubyDarkA.rubyA5,
                _p3: rubyDarkP3A.rubyA5,
            },
        },
        a6: {
            value: {
                base: rubyDarkA.rubyA6,
                _p3: rubyDarkP3A.rubyA6,
            },
        },
        a7: {
            value: {
                base: rubyDarkA.rubyA7,
                _p3: rubyDarkP3A.rubyA7,
            },
        },
        a8: {
            value: {
                base: rubyDarkA.rubyA8,
                _p3: rubyDarkP3A.rubyA8,
            },
        },
        a9: {
            value: {
                base: rubyDarkA.rubyA9,
                _p3: rubyDarkP3A.rubyA9,
            },
        },
        a10: {
            value: {
                base: rubyDarkA.rubyA10,
                _p3: rubyDarkP3A.rubyA10,
            },
        },
        a11: {
            value: {
                base: rubyDarkA.rubyA11,
                _p3: rubyDarkP3A.rubyA11,
            },
        },
        a12: {
            value: {
                base: rubyDarkA.rubyA12,
                _p3: rubyDarkP3A.rubyA12,
            },
        },
    },
});
