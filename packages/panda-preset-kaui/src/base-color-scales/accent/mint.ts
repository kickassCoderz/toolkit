import {
    mint as mintLight,
    mintA as mintALight,
    mintDark,
    mintDarkA,
    mintDarkP3,
    mintDarkP3A,
    mintP3 as mintP3Light,
    mintP3A as mintP3ALight,
    sage,
    sageP3,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const mint = createKickassUIBaseColorScale({
    contrast: {
        value: {
            base: sage.sage12,
            _p3: sageP3.sage12,
        },
    },
    light: {
        surface: {
            value: {
                base: "#effaf8cc",
                _p3: "color(display-p3 0.9451 0.9804 0.9725 / 0.8)",
            },
        },
        1: {
            value: {
                base: mintLight.mint1,
                _p3: mintP3Light.mint1,
            },
        },
        2: {
            value: {
                base: mintLight.mint2,
                _p3: mintP3Light.mint2,
            },
        },
        3: {
            value: {
                base: mintLight.mint3,
                _p3: mintP3Light.mint3,
            },
        },
        4: {
            value: {
                base: mintLight.mint4,
                _p3: mintP3Light.mint4,
            },
        },
        5: {
            value: {
                base: mintLight.mint5,
                _p3: mintP3Light.mint5,
            },
        },
        6: {
            value: {
                base: mintLight.mint6,
                _p3: mintP3Light.mint6,
            },
        },
        7: {
            value: {
                base: mintLight.mint7,
                _p3: mintP3Light.mint7,
            },
        },
        8: {
            value: {
                base: mintLight.mint8,
                _p3: mintP3Light.mint8,
            },
        },
        9: {
            value: {
                base: mintLight.mint9,
                _p3: mintP3Light.mint9,
            },
        },
        10: {
            value: {
                base: mintLight.mint10,
                _p3: mintP3Light.mint10,
            },
        },

        11: {
            value: {
                base: mintLight.mint11,
                _p3: mintP3Light.mint11,
            },
        },
        12: {
            value: {
                base: mintLight.mint12,
                _p3: mintP3Light.mint12,
            },
        },
        a1: {
            value: {
                base: mintALight.mintA1,
                _p3: mintP3ALight.mintA1,
            },
        },
        a2: {
            value: {
                base: mintALight.mintA2,
                _p3: mintP3ALight.mintA2,
            },
        },
        a3: {
            value: {
                base: mintALight.mintA3,
                _p3: mintP3ALight.mintA3,
            },
        },
        a4: {
            value: {
                base: mintALight.mintA4,
                _p3: mintP3ALight.mintA4,
            },
        },
        a5: {
            value: {
                base: mintALight.mintA5,
                _p3: mintP3ALight.mintA5,
            },
        },
        a6: {
            value: {
                base: mintALight.mintA6,
                _p3: mintP3ALight.mintA6,
            },
        },
        a7: {
            value: {
                base: mintALight.mintA7,
                _p3: mintP3ALight.mintA7,
            },
        },
        a8: {
            value: {
                base: mintALight.mintA8,
                _p3: mintP3ALight.mintA8,
            },
        },
        a9: {
            value: {
                base: mintALight.mintA9,
                _p3: mintP3ALight.mintA9,
            },
        },
        a10: {
            value: {
                base: mintALight.mintA10,
                _p3: mintP3ALight.mintA10,
            },
        },
        a11: {
            value: {
                base: mintALight.mintA11,
                _p3: mintP3ALight.mintA11,
            },
        },
        a12: {
            value: {
                base: mintALight.mintA12,
                _p3: mintP3ALight.mintA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#15272780",
                _p3: "color(display-p3 0.0941 0.149 0.1412 / 0.5)",
            },
        },
        1: {
            value: {
                base: mintDark.mint1,
                _p3: mintDarkP3.mint1,
            },
        },
        2: {
            value: {
                base: mintDark.mint2,
                _p3: mintDarkP3.mint2,
            },
        },
        3: {
            value: {
                base: mintDark.mint3,
                _p3: mintDarkP3.mint3,
            },
        },
        4: {
            value: {
                base: mintDark.mint4,
                _p3: mintDarkP3.mint4,
            },
        },
        5: {
            value: {
                base: mintDark.mint5,
                _p3: mintDarkP3.mint5,
            },
        },
        6: {
            value: {
                base: mintDark.mint6,
                _p3: mintDarkP3.mint6,
            },
        },
        7: {
            value: {
                base: mintDark.mint7,
                _p3: mintDarkP3.mint7,
            },
        },
        8: {
            value: {
                base: mintDark.mint8,
                _p3: mintDarkP3.mint8,
            },
        },
        9: {
            value: {
                base: mintDark.mint9,
                _p3: mintDarkP3.mint9,
            },
        },
        10: {
            value: {
                base: mintDark.mint10,
                _p3: mintDarkP3.mint10,
            },
        },
        11: {
            value: {
                base: mintDark.mint11,
                _p3: mintDarkP3.mint11,
            },
        },
        12: {
            value: {
                base: mintDark.mint12,
                _p3: mintDarkP3.mint12,
            },
        },
        a1: {
            value: {
                base: mintDarkA.mintA1,
                _p3: mintDarkP3A.mintA1,
            },
        },
        a2: {
            value: {
                base: mintDarkA.mintA2,
                _p3: mintDarkP3A.mintA2,
            },
        },
        a3: {
            value: {
                base: mintDarkA.mintA3,
                _p3: mintDarkP3A.mintA3,
            },
        },
        a4: {
            value: {
                base: mintDarkA.mintA4,
                _p3: mintDarkP3A.mintA4,
            },
        },
        a5: {
            value: {
                base: mintDarkA.mintA5,
                _p3: mintDarkP3A.mintA5,
            },
        },
        a6: {
            value: {
                base: mintDarkA.mintA6,
                _p3: mintDarkP3A.mintA6,
            },
        },
        a7: {
            value: {
                base: mintDarkA.mintA7,
                _p3: mintDarkP3A.mintA7,
            },
        },
        a8: {
            value: {
                base: mintDarkA.mintA8,
                _p3: mintDarkP3A.mintA8,
            },
        },
        a9: {
            value: {
                base: mintDarkA.mintA9,
                _p3: mintDarkP3A.mintA9,
            },
        },
        a10: {
            value: {
                base: mintDarkA.mintA10,
                _p3: mintDarkP3A.mintA10,
            },
        },
        a11: {
            value: {
                base: mintDarkA.mintA11,
                _p3: mintDarkP3A.mintA11,
            },
        },
        a12: {
            value: {
                base: mintDarkA.mintA12,
                _p3: mintDarkP3A.mintA12,
            },
        },
    },
});
