import { blackA, blackP3A, whiteA, whiteP3A } from "@radix-ui/colors";

const overlayBlack = {
    a1: {
        value: {
            base: blackA.blackA1,
            _p3: blackP3A.blackA1,
        },
    },
    a2: {
        value: {
            base: blackA.blackA2,
            _p3: blackP3A.blackA2,
        },
    },
    a3: {
        value: {
            base: blackA.blackA3,
            _p3: blackP3A.blackA3,
        },
    },
    a4: {
        value: {
            base: blackA.blackA4,
            _p3: blackP3A.blackA4,
        },
    },
    a5: {
        value: {
            base: blackA.blackA5,
            _p3: blackP3A.blackA5,
        },
    },
    a6: {
        value: {
            base: blackA.blackA6,
            _p3: blackP3A.blackA6,
        },
    },
    a7: {
        value: {
            base: blackA.blackA7,
            _p3: blackP3A.blackA7,
        },
    },
    a8: {
        value: {
            base: blackA.blackA8,
            _p3: blackP3A.blackA8,
        },
    },
    a9: {
        value: {
            base: blackA.blackA9,
            _p3: blackP3A.blackA9,
        },
    },
    a10: {
        value: {
            base: blackA.blackA10,
            _p3: blackP3A.blackA10,
        },
    },
    a11: {
        value: {
            base: blackA.blackA11,
            _p3: blackP3A.blackA11,
        },
    },
    a12: {
        value: {
            base: blackA.blackA12,
            _p3: blackP3A.blackA12,
        },
    },
};

const overlayWhite = {
    a1: {
        value: {
            base: whiteA.whiteA1,
            _p3: whiteP3A.whiteA1,
        },
    },
    a2: {
        value: {
            base: whiteA.whiteA2,
            _p3: whiteP3A.whiteA2,
        },
    },
    a3: {
        value: {
            base: whiteA.whiteA3,
            _p3: whiteP3A.whiteA3,
        },
    },
    a4: {
        value: {
            base: whiteA.whiteA4,
            _p3: whiteP3A.whiteA4,
        },
    },
    a5: {
        value: {
            base: whiteA.whiteA5,
            _p3: whiteP3A.whiteA5,
        },
    },
    a6: {
        value: {
            base: whiteA.whiteA6,
            _p3: whiteP3A.whiteA6,
        },
    },
    a7: {
        value: {
            base: whiteA.whiteA7,
            _p3: whiteP3A.whiteA7,
        },
    },
    a8: {
        value: {
            base: whiteA.whiteA8,
            _p3: whiteP3A.whiteA8,
        },
    },
    a9: {
        value: {
            base: whiteA.whiteA9,
            _p3: whiteP3A.whiteA9,
        },
    },
    a10: {
        value: {
            base: whiteA.whiteA10,
            _p3: whiteP3A.whiteA10,
        },
    },
    a11: {
        value: {
            base: whiteA.whiteA11,
            _p3: whiteP3A.whiteA11,
        },
    },
    a12: {
        value: {
            base: whiteA.whiteA12,
            _p3: whiteP3A.whiteA12,
        },
    },
};

export const overlay = {
    DEFAULT: {
        value: {
            base: "{colors.overlay.black.a6}",
            _light: "{colors.overlay.black.a6}",
            _osLight: "{colors.overlay.black.a6}",
            _dark: "{colors.overlay.black.a8}",
            _osDark: "{colors.overlay.black.a8}",
        },
    },
    black: overlayBlack,
    white: overlayWhite,
};
