import {
    cyan as cyanLight,
    cyanA as cyanALight,
    cyanDark,
    cyanDarkA,
    cyanDarkP3,
    cyanDarkP3A,
    cyanP3 as cyanP3Light,
    cyanP3A as cyanP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const cyan = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#eff9facc",
                _p3: "color(display-p3 0.9412 0.9765 0.9804 / 0.8)",
            },
        },
        1: {
            value: {
                base: cyanLight.cyan1,
                _p3: cyanP3Light.cyan1,
            },
        },
        2: {
            value: {
                base: cyanLight.cyan2,
                _p3: cyanP3Light.cyan2,
            },
        },
        3: {
            value: {
                base: cyanLight.cyan3,
                _p3: cyanP3Light.cyan3,
            },
        },
        4: {
            value: {
                base: cyanLight.cyan4,
                _p3: cyanP3Light.cyan4,
            },
        },
        5: {
            value: {
                base: cyanLight.cyan5,
                _p3: cyanP3Light.cyan5,
            },
        },
        6: {
            value: {
                base: cyanLight.cyan6,
                _p3: cyanP3Light.cyan6,
            },
        },
        7: {
            value: {
                base: cyanLight.cyan7,
                _p3: cyanP3Light.cyan7,
            },
        },
        8: {
            value: {
                base: cyanLight.cyan8,
                _p3: cyanP3Light.cyan8,
            },
        },
        9: {
            value: {
                base: cyanLight.cyan9,
                _p3: cyanP3Light.cyan9,
            },
        },
        10: {
            value: {
                base: cyanLight.cyan10,
                _p3: cyanP3Light.cyan10,
            },
        },

        11: {
            value: {
                base: cyanLight.cyan11,
                _p3: cyanP3Light.cyan11,
            },
        },
        12: {
            value: {
                base: cyanLight.cyan12,
                _p3: cyanP3Light.cyan12,
            },
        },
        a1: {
            value: {
                base: cyanALight.cyanA1,
                _p3: cyanP3ALight.cyanA1,
            },
        },
        a2: {
            value: {
                base: cyanALight.cyanA2,
                _p3: cyanP3ALight.cyanA2,
            },
        },
        a3: {
            value: {
                base: cyanALight.cyanA3,
                _p3: cyanP3ALight.cyanA3,
            },
        },
        a4: {
            value: {
                base: cyanALight.cyanA4,
                _p3: cyanP3ALight.cyanA4,
            },
        },
        a5: {
            value: {
                base: cyanALight.cyanA5,
                _p3: cyanP3ALight.cyanA5,
            },
        },
        a6: {
            value: {
                base: cyanALight.cyanA6,
                _p3: cyanP3ALight.cyanA6,
            },
        },
        a7: {
            value: {
                base: cyanALight.cyanA7,
                _p3: cyanP3ALight.cyanA7,
            },
        },
        a8: {
            value: {
                base: cyanALight.cyanA8,
                _p3: cyanP3ALight.cyanA8,
            },
        },
        a9: {
            value: {
                base: cyanALight.cyanA9,
                _p3: cyanP3ALight.cyanA9,
            },
        },
        a10: {
            value: {
                base: cyanALight.cyanA10,
                _p3: cyanP3ALight.cyanA10,
            },
        },
        a11: {
            value: {
                base: cyanALight.cyanA11,
                _p3: cyanP3ALight.cyanA11,
            },
        },
        a12: {
            value: {
                base: cyanALight.cyanA12,
                _p3: cyanP3ALight.cyanA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#11252d80",
                _p3: "color(display-p3 0.0784 0.1412 0.1725 / 0.5)",
            },
        },
        1: {
            value: {
                base: cyanDark.cyan1,
                _p3: cyanDarkP3.cyan1,
            },
        },
        2: {
            value: {
                base: cyanDark.cyan2,
                _p3: cyanDarkP3.cyan2,
            },
        },
        3: {
            value: {
                base: cyanDark.cyan3,
                _p3: cyanDarkP3.cyan3,
            },
        },
        4: {
            value: {
                base: cyanDark.cyan4,
                _p3: cyanDarkP3.cyan4,
            },
        },
        5: {
            value: {
                base: cyanDark.cyan5,
                _p3: cyanDarkP3.cyan5,
            },
        },
        6: {
            value: {
                base: cyanDark.cyan6,
                _p3: cyanDarkP3.cyan6,
            },
        },
        7: {
            value: {
                base: cyanDark.cyan7,
                _p3: cyanDarkP3.cyan7,
            },
        },
        8: {
            value: {
                base: cyanDark.cyan8,
                _p3: cyanDarkP3.cyan8,
            },
        },
        9: {
            value: {
                base: cyanDark.cyan9,
                _p3: cyanDarkP3.cyan9,
            },
        },
        10: {
            value: {
                base: cyanDark.cyan10,
                _p3: cyanDarkP3.cyan10,
            },
        },
        11: {
            value: {
                base: cyanDark.cyan11,
                _p3: cyanDarkP3.cyan11,
            },
        },
        12: {
            value: {
                base: cyanDark.cyan12,
                _p3: cyanDarkP3.cyan12,
            },
        },
        a1: {
            value: {
                base: cyanDarkA.cyanA1,
                _p3: cyanDarkP3A.cyanA1,
            },
        },
        a2: {
            value: {
                base: cyanDarkA.cyanA2,
                _p3: cyanDarkP3A.cyanA2,
            },
        },
        a3: {
            value: {
                base: cyanDarkA.cyanA3,
                _p3: cyanDarkP3A.cyanA3,
            },
        },
        a4: {
            value: {
                base: cyanDarkA.cyanA4,
                _p3: cyanDarkP3A.cyanA4,
            },
        },
        a5: {
            value: {
                base: cyanDarkA.cyanA5,
                _p3: cyanDarkP3A.cyanA5,
            },
        },
        a6: {
            value: {
                base: cyanDarkA.cyanA6,
                _p3: cyanDarkP3A.cyanA6,
            },
        },
        a7: {
            value: {
                base: cyanDarkA.cyanA7,
                _p3: cyanDarkP3A.cyanA7,
            },
        },
        a8: {
            value: {
                base: cyanDarkA.cyanA8,
                _p3: cyanDarkP3A.cyanA8,
            },
        },
        a9: {
            value: {
                base: cyanDarkA.cyanA9,
                _p3: cyanDarkP3A.cyanA9,
            },
        },
        a10: {
            value: {
                base: cyanDarkA.cyanA10,
                _p3: cyanDarkP3A.cyanA10,
            },
        },
        a11: {
            value: {
                base: cyanDarkA.cyanA11,
                _p3: cyanDarkP3A.cyanA11,
            },
        },
        a12: {
            value: {
                base: cyanDarkA.cyanA12,
                _p3: cyanDarkP3A.cyanA12,
            },
        },
    },
});
