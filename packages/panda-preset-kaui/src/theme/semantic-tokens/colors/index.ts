import { defineSemanticTokens } from "@pandacss/dev";

import { black, transparent, white } from "./common";
import { overlay } from "./overlay";

export const colors = defineSemanticTokens.colors({
    transparent,
    white,
    black,
    overlay,
    background: {
        DEFAULT: {
            value: {
                base: "{colors.neutral.2}",
                _light: "{colors.neutral.2}",
                _osLight: "{colors.neutral.2}",
                _dark: "{colors.neutral.1}",
                _osDark: "{colors.neutral.1}",
            },
        },
        translucent: {
            value: {
                base: "{colors.neutral.a2}",
                _light: "{colors.neutral.a2}",
                _osLight: "{colors.neutral.a2}",
                _dark: "{colors.neutral.a1}",
                _osDark: "{colors.neutral.a1}",
            },
        },
    },
    panel: {
        DEFAULT: {
            value: {
                base: "{colors.white}",
                _light: "{colors.white}",
                _osLight: "{colors.white}",
                _dark: "{colors.neutral.2}",
                _osDark: "{colors.neutral.2}",
            },
        },
        translucent: {
            value: {
                base: "{colors.overlay.white.a9}",
                _light: "{colors.overlay.white.a9}",
                _osLight: "{colors.overlay.white.a9}",
                _dark: "{colors.neutral.a2}",
                _osDark: "{colors.neutral.a2}",
            },
        },
    },
    surface: {
        DEFAULT: {
            value: {
                base: "{colors.surface.light}",
                _light: "{colors.surface.light}",
                _osLight: "{colors.surface.light}",
                _dark: "{colors.surface.dark}",
                _osDark: "{colors.surface.dark}",
            },
        },
        light: {
            value: {
                base: "rgba(255, 255, 255, 0.85)",
                _p3: "color(display-p3 1 1 1 / 0.85)",
            },
        },
        dark: {
            value: {
                base: "rgba(0, 0, 0, 0.25)",
                _p3: "color(display-p3 0 0 0 / 0.25)",
            },
        },
    },
});
