import {
    purple as purpleLight,
    purpleA as purpleALight,
    purpleDark,
    purpleDarkA,
    purpleDarkP3,
    purpleDarkP3A,
    purpleP3 as purpleP3Light,
    purpleP3A as purpleP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const purple = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#faf5fecc",
                _p3: "color(display-p3 0.9804 0.9647 0.9922 / 0.8)",
            },
        },
        1: {
            value: {
                base: purpleLight.purple1,
                _p3: purpleP3Light.purple1,
            },
        },
        2: {
            value: {
                base: purpleLight.purple2,
                _p3: purpleP3Light.purple2,
            },
        },
        3: {
            value: {
                base: purpleLight.purple3,
                _p3: purpleP3Light.purple3,
            },
        },
        4: {
            value: {
                base: purpleLight.purple4,
                _p3: purpleP3Light.purple4,
            },
        },
        5: {
            value: {
                base: purpleLight.purple5,
                _p3: purpleP3Light.purple5,
            },
        },
        6: {
            value: {
                base: purpleLight.purple6,
                _p3: purpleP3Light.purple6,
            },
        },
        7: {
            value: {
                base: purpleLight.purple7,
                _p3: purpleP3Light.purple7,
            },
        },
        8: {
            value: {
                base: purpleLight.purple8,
                _p3: purpleP3Light.purple8,
            },
        },
        9: {
            value: {
                base: purpleLight.purple9,
                _p3: purpleP3Light.purple9,
            },
        },
        10: {
            value: {
                base: purpleLight.purple10,
                _p3: purpleP3Light.purple10,
            },
        },

        11: {
            value: {
                base: purpleLight.purple11,
                _p3: purpleP3Light.purple11,
            },
        },
        12: {
            value: {
                base: purpleLight.purple12,
                _p3: purpleP3Light.purple12,
            },
        },
        a1: {
            value: {
                base: purpleALight.purpleA1,
                _p3: purpleP3ALight.purpleA1,
            },
        },
        a2: {
            value: {
                base: purpleALight.purpleA2,
                _p3: purpleP3ALight.purpleA2,
            },
        },
        a3: {
            value: {
                base: purpleALight.purpleA3,
                _p3: purpleP3ALight.purpleA3,
            },
        },
        a4: {
            value: {
                base: purpleALight.purpleA4,
                _p3: purpleP3ALight.purpleA4,
            },
        },
        a5: {
            value: {
                base: purpleALight.purpleA5,
                _p3: purpleP3ALight.purpleA5,
            },
        },
        a6: {
            value: {
                base: purpleALight.purpleA6,
                _p3: purpleP3ALight.purpleA6,
            },
        },
        a7: {
            value: {
                base: purpleALight.purpleA7,
                _p3: purpleP3ALight.purpleA7,
            },
        },
        a8: {
            value: {
                base: purpleALight.purpleA8,
                _p3: purpleP3ALight.purpleA8,
            },
        },
        a9: {
            value: {
                base: purpleALight.purpleA9,
                _p3: purpleP3ALight.purpleA9,
            },
        },
        a10: {
            value: {
                base: purpleALight.purpleA10,
                _p3: purpleP3ALight.purpleA10,
            },
        },
        a11: {
            value: {
                base: purpleALight.purpleA11,
                _p3: purpleP3ALight.purpleA11,
            },
        },
        a12: {
            value: {
                base: purpleALight.purpleA12,
                _p3: purpleP3ALight.purpleA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#2b173580",
                _p3: "color(display-p3 0.149 0.0941 0.1961 / 0.5)",
            },
        },
        1: {
            value: {
                base: purpleDark.purple1,
                _p3: purpleDarkP3.purple1,
            },
        },
        2: {
            value: {
                base: purpleDark.purple2,
                _p3: purpleDarkP3.purple2,
            },
        },
        3: {
            value: {
                base: purpleDark.purple3,
                _p3: purpleDarkP3.purple3,
            },
        },
        4: {
            value: {
                base: purpleDark.purple4,
                _p3: purpleDarkP3.purple4,
            },
        },
        5: {
            value: {
                base: purpleDark.purple5,
                _p3: purpleDarkP3.purple5,
            },
        },
        6: {
            value: {
                base: purpleDark.purple6,
                _p3: purpleDarkP3.purple6,
            },
        },
        7: {
            value: {
                base: purpleDark.purple7,
                _p3: purpleDarkP3.purple7,
            },
        },
        8: {
            value: {
                base: purpleDark.purple8,
                _p3: purpleDarkP3.purple8,
            },
        },
        9: {
            value: {
                base: purpleDark.purple9,
                _p3: purpleDarkP3.purple9,
            },
        },
        10: {
            value: {
                base: purpleDark.purple10,
                _p3: purpleDarkP3.purple10,
            },
        },
        11: {
            value: {
                base: purpleDark.purple11,
                _p3: purpleDarkP3.purple11,
            },
        },
        12: {
            value: {
                base: purpleDark.purple12,
                _p3: purpleDarkP3.purple12,
            },
        },
        a1: {
            value: {
                base: purpleDarkA.purpleA1,
                _p3: purpleDarkP3A.purpleA1,
            },
        },
        a2: {
            value: {
                base: purpleDarkA.purpleA2,
                _p3: purpleDarkP3A.purpleA2,
            },
        },
        a3: {
            value: {
                base: purpleDarkA.purpleA3,
                _p3: purpleDarkP3A.purpleA3,
            },
        },
        a4: {
            value: {
                base: purpleDarkA.purpleA4,
                _p3: purpleDarkP3A.purpleA4,
            },
        },
        a5: {
            value: {
                base: purpleDarkA.purpleA5,
                _p3: purpleDarkP3A.purpleA5,
            },
        },
        a6: {
            value: {
                base: purpleDarkA.purpleA6,
                _p3: purpleDarkP3A.purpleA6,
            },
        },
        a7: {
            value: {
                base: purpleDarkA.purpleA7,
                _p3: purpleDarkP3A.purpleA7,
            },
        },
        a8: {
            value: {
                base: purpleDarkA.purpleA8,
                _p3: purpleDarkP3A.purpleA8,
            },
        },
        a9: {
            value: {
                base: purpleDarkA.purpleA9,
                _p3: purpleDarkP3A.purpleA9,
            },
        },
        a10: {
            value: {
                base: purpleDarkA.purpleA10,
                _p3: purpleDarkP3A.purpleA10,
            },
        },
        a11: {
            value: {
                base: purpleDarkA.purpleA11,
                _p3: purpleDarkP3A.purpleA11,
            },
        },
        a12: {
            value: {
                base: purpleDarkA.purpleA12,
                _p3: purpleDarkP3A.purpleA12,
            },
        },
    },
});
