import {
    iris as irisLight,
    irisA as irisALight,
    irisDark,
    irisDarkA,
    irisDarkP3,
    irisDarkP3A,
    irisP3 as irisP3Light,
    irisP3A as irisP3ALight,
} from "@radix-ui/colors";

import { createKickassUIBaseColorScale } from "../../utils/create-kickass-ui-base-color-scale";

export const iris = createKickassUIBaseColorScale({
    contrast: {
        value: "{colors.white}",
    },

    light: {
        surface: {
            value: {
                base: "#f6f6ffcc",
                _p3: "color(display-p3 0.9647 0.9647 0.9961 / 0.8)",
            },
        },
        1: {
            value: {
                base: irisLight.iris1,
                _p3: irisP3Light.iris1,
            },
        },
        2: {
            value: {
                base: irisLight.iris2,
                _p3: irisP3Light.iris2,
            },
        },
        3: {
            value: {
                base: irisLight.iris3,
                _p3: irisP3Light.iris3,
            },
        },
        4: {
            value: {
                base: irisLight.iris4,
                _p3: irisP3Light.iris4,
            },
        },
        5: {
            value: {
                base: irisLight.iris5,
                _p3: irisP3Light.iris5,
            },
        },
        6: {
            value: {
                base: irisLight.iris6,
                _p3: irisP3Light.iris6,
            },
        },
        7: {
            value: {
                base: irisLight.iris7,
                _p3: irisP3Light.iris7,
            },
        },
        8: {
            value: {
                base: irisLight.iris8,
                _p3: irisP3Light.iris8,
            },
        },
        9: {
            value: {
                base: irisLight.iris9,
                _p3: irisP3Light.iris9,
            },
        },
        10: {
            value: {
                base: irisLight.iris10,
                _p3: irisP3Light.iris10,
            },
        },

        11: {
            value: {
                base: irisLight.iris11,
                _p3: irisP3Light.iris11,
            },
        },
        12: {
            value: {
                base: irisLight.iris12,
                _p3: irisP3Light.iris12,
            },
        },
        a1: {
            value: {
                base: irisALight.irisA1,
                _p3: irisP3ALight.irisA1,
            },
        },
        a2: {
            value: {
                base: irisALight.irisA2,
                _p3: irisP3ALight.irisA2,
            },
        },
        a3: {
            value: {
                base: irisALight.irisA3,
                _p3: irisP3ALight.irisA3,
            },
        },
        a4: {
            value: {
                base: irisALight.irisA4,
                _p3: irisP3ALight.irisA4,
            },
        },
        a5: {
            value: {
                base: irisALight.irisA5,
                _p3: irisP3ALight.irisA5,
            },
        },
        a6: {
            value: {
                base: irisALight.irisA6,
                _p3: irisP3ALight.irisA6,
            },
        },
        a7: {
            value: {
                base: irisALight.irisA7,
                _p3: irisP3ALight.irisA7,
            },
        },
        a8: {
            value: {
                base: irisALight.irisA8,
                _p3: irisP3ALight.irisA8,
            },
        },
        a9: {
            value: {
                base: irisALight.irisA9,
                _p3: irisP3ALight.irisA9,
            },
        },
        a10: {
            value: {
                base: irisALight.irisA10,
                _p3: irisP3ALight.irisA10,
            },
        },
        a11: {
            value: {
                base: irisALight.irisA11,
                _p3: irisP3ALight.irisA11,
            },
        },
        a12: {
            value: {
                base: irisALight.irisA12,
                _p3: irisP3ALight.irisA12,
            },
        },
    },
    dark: {
        surface: {
            value: {
                base: "#1d1b3980",
                _p3: "color(display-p3 0.1098 0.102 0.2118 / 0.5)",
            },
        },
        1: {
            value: {
                base: irisDark.iris1,
                _p3: irisDarkP3.iris1,
            },
        },
        2: {
            value: {
                base: irisDark.iris2,
                _p3: irisDarkP3.iris2,
            },
        },
        3: {
            value: {
                base: irisDark.iris3,
                _p3: irisDarkP3.iris3,
            },
        },
        4: {
            value: {
                base: irisDark.iris4,
                _p3: irisDarkP3.iris4,
            },
        },
        5: {
            value: {
                base: irisDark.iris5,
                _p3: irisDarkP3.iris5,
            },
        },
        6: {
            value: {
                base: irisDark.iris6,
                _p3: irisDarkP3.iris6,
            },
        },
        7: {
            value: {
                base: irisDark.iris7,
                _p3: irisDarkP3.iris7,
            },
        },
        8: {
            value: {
                base: irisDark.iris8,
                _p3: irisDarkP3.iris8,
            },
        },
        9: {
            value: {
                base: irisDark.iris9,
                _p3: irisDarkP3.iris9,
            },
        },
        10: {
            value: {
                base: irisDark.iris10,
                _p3: irisDarkP3.iris10,
            },
        },
        11: {
            value: {
                base: irisDark.iris11,
                _p3: irisDarkP3.iris11,
            },
        },
        12: {
            value: {
                base: irisDark.iris12,
                _p3: irisDarkP3.iris12,
            },
        },
        a1: {
            value: {
                base: irisDarkA.irisA1,
                _p3: irisDarkP3A.irisA1,
            },
        },
        a2: {
            value: {
                base: irisDarkA.irisA2,
                _p3: irisDarkP3A.irisA2,
            },
        },
        a3: {
            value: {
                base: irisDarkA.irisA3,
                _p3: irisDarkP3A.irisA3,
            },
        },
        a4: {
            value: {
                base: irisDarkA.irisA4,
                _p3: irisDarkP3A.irisA4,
            },
        },
        a5: {
            value: {
                base: irisDarkA.irisA5,
                _p3: irisDarkP3A.irisA5,
            },
        },
        a6: {
            value: {
                base: irisDarkA.irisA6,
                _p3: irisDarkP3A.irisA6,
            },
        },
        a7: {
            value: {
                base: irisDarkA.irisA7,
                _p3: irisDarkP3A.irisA7,
            },
        },
        a8: {
            value: {
                base: irisDarkA.irisA8,
                _p3: irisDarkP3A.irisA8,
            },
        },
        a9: {
            value: {
                base: irisDarkA.irisA9,
                _p3: irisDarkP3A.irisA9,
            },
        },
        a10: {
            value: {
                base: irisDarkA.irisA10,
                _p3: irisDarkP3A.irisA10,
            },
        },
        a11: {
            value: {
                base: irisDarkA.irisA11,
                _p3: irisDarkP3A.irisA11,
            },
        },
        a12: {
            value: {
                base: irisDarkA.irisA12,
                _p3: irisDarkP3A.irisA12,
            },
        },
    },
});
