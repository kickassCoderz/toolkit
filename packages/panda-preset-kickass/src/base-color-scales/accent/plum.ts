import {
    plum as plumLight,
    plumA as plumALight,
    plumDark,
    plumDarkA,
    plumDarkP3,
    plumDarkP3A,
    plumP3 as plumP3Light,
    plumP3A as plumP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const plum = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },
    light: {
        surface: {
            value: {
                base: "#fdf5fdcc",
                _p3: "color(display-p3 0.9843 0.9647 0.9843 / 0.8)",
            },
        },
        1: {
            value: {
                base: plumLight.plum1,
                _p3: plumP3Light.plum1,
            },
        },
        2: {
            value: {
                base: plumLight.plum2,
                _p3: plumP3Light.plum2,
            },
        },
        3: {
            value: {
                base: plumLight.plum3,
                _p3: plumP3Light.plum3,
            },
        },
        4: {
            value: {
                base: plumLight.plum4,
                _p3: plumP3Light.plum4,
            },
        },
        5: {
            value: {
                base: plumLight.plum5,
                _p3: plumP3Light.plum5,
            },
        },
        6: {
            value: {
                base: plumLight.plum6,
                _p3: plumP3Light.plum6,
            },
        },
        7: {
            value: {
                base: plumLight.plum7,
                _p3: plumP3Light.plum7,
            },
        },
        8: {
            value: {
                base: plumLight.plum8,
                _p3: plumP3Light.plum8,
            },
        },
        9: {
            value: {
                base: plumLight.plum9,
                _p3: plumP3Light.plum9,
            },
        },
        10: {
            value: {
                base: plumLight.plum10,
                _p3: plumP3Light.plum10,
            },
        },

        11: {
            value: {
                base: plumLight.plum11,
                _p3: plumP3Light.plum11,
            },
        },
        12: {
            value: {
                base: plumLight.plum12,
                _p3: plumP3Light.plum12,
            },
        },
        a1: {
            value: {
                base: plumALight.plumA1,
                _p3: plumP3ALight.plumA1,
            },
        },
        a2: {
            value: {
                base: plumALight.plumA2,
                _p3: plumP3ALight.plumA2,
            },
        },
        a3: {
            value: {
                base: plumALight.plumA3,
                _p3: plumP3ALight.plumA3,
            },
        },
        a4: {
            value: {
                base: plumALight.plumA4,
                _p3: plumP3ALight.plumA4,
            },
        },
        a5: {
            value: {
                base: plumALight.plumA5,
                _p3: plumP3ALight.plumA5,
            },
        },
        a6: {
            value: {
                base: plumALight.plumA6,
                _p3: plumP3ALight.plumA6,
            },
        },
        a7: {
            value: {
                base: plumALight.plumA7,
                _p3: plumP3ALight.plumA7,
            },
        },
        a8: {
            value: {
                base: plumALight.plumA8,
                _p3: plumP3ALight.plumA8,
            },
        },
        a9: {
            value: {
                base: plumALight.plumA9,
                _p3: plumP3ALight.plumA9,
            },
        },
        a10: {
            value: {
                base: plumALight.plumA10,
                _p3: plumP3ALight.plumA10,
            },
        },
        a11: {
            value: {
                base: plumALight.plumA11,
                _p3: plumP3ALight.plumA11,
            },
        },
        a12: {
            value: {
                base: plumALight.plumA12,
                _p3: plumP3ALight.plumA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#2f152f80",
                _p3: "color(display-p3 0.1647 0.0863 0.1725 / 0.5)",
            },
        },
        1: {
            value: {
                base: plumDark.plum1,
                _p3: plumDarkP3.plum1,
            },
        },
        2: {
            value: {
                base: plumDark.plum2,
                _p3: plumDarkP3.plum2,
            },
        },
        3: {
            value: {
                base: plumDark.plum3,
                _p3: plumDarkP3.plum3,
            },
        },
        4: {
            value: {
                base: plumDark.plum4,
                _p3: plumDarkP3.plum4,
            },
        },
        5: {
            value: {
                base: plumDark.plum5,
                _p3: plumDarkP3.plum5,
            },
        },
        6: {
            value: {
                base: plumDark.plum6,
                _p3: plumDarkP3.plum6,
            },
        },
        7: {
            value: {
                base: plumDark.plum7,
                _p3: plumDarkP3.plum7,
            },
        },
        8: {
            value: {
                base: plumDark.plum8,
                _p3: plumDarkP3.plum8,
            },
        },
        9: {
            value: {
                base: plumDark.plum9,
                _p3: plumDarkP3.plum9,
            },
        },
        10: {
            value: {
                base: plumDark.plum10,
                _p3: plumDarkP3.plum10,
            },
        },
        11: {
            value: {
                base: plumDark.plum11,
                _p3: plumDarkP3.plum11,
            },
        },
        12: {
            value: {
                base: plumDark.plum12,
                _p3: plumDarkP3.plum12,
            },
        },
        a1: {
            value: {
                base: plumDarkA.plumA1,
                _p3: plumDarkP3A.plumA1,
            },
        },
        a2: {
            value: {
                base: plumDarkA.plumA2,
                _p3: plumDarkP3A.plumA2,
            },
        },
        a3: {
            value: {
                base: plumDarkA.plumA3,
                _p3: plumDarkP3A.plumA3,
            },
        },
        a4: {
            value: {
                base: plumDarkA.plumA4,
                _p3: plumDarkP3A.plumA4,
            },
        },
        a5: {
            value: {
                base: plumDarkA.plumA5,
                _p3: plumDarkP3A.plumA5,
            },
        },
        a6: {
            value: {
                base: plumDarkA.plumA6,
                _p3: plumDarkP3A.plumA6,
            },
        },
        a7: {
            value: {
                base: plumDarkA.plumA7,
                _p3: plumDarkP3A.plumA7,
            },
        },
        a8: {
            value: {
                base: plumDarkA.plumA8,
                _p3: plumDarkP3A.plumA8,
            },
        },
        a9: {
            value: {
                base: plumDarkA.plumA9,
                _p3: plumDarkP3A.plumA9,
            },
        },
        a10: {
            value: {
                base: plumDarkA.plumA10,
                _p3: plumDarkP3A.plumA10,
            },
        },
        a11: {
            value: {
                base: plumDarkA.plumA11,
                _p3: plumDarkP3A.plumA11,
            },
        },
        a12: {
            value: {
                base: plumDarkA.plumA12,
                _p3: plumDarkP3A.plumA12,
            },
        },
    },
});
