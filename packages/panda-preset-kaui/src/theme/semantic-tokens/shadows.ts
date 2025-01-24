import { defineSemanticTokens } from "@pandacss/dev";

export const shadows = defineSemanticTokens.shadows({
    1: {
        description: "Inset shadow",
        value: {
            base: "inset 0 0 0 1px {colors.neutral.a5},inset 0 1.5px 2px 0 {colors.neutral.a2},inset 0 1.5px 2px 0 {colors.overlay.black.a2}",
            _light: "inset 0 0 0 1px {colors.neutral.a5},inset 0 1.5px 2px 0 {colors.neutral.a2},inset 0 1.5px 2px 0 {colors.overlay.black.a2}",
            _osLight:
                "inset 0 0 0 1px {colors.neutral.a5},inset 0 1.5px 2px 0 {colors.neutral.a2},inset 0 1.5px 2px 0 {colors.overlay.black.a2}",
            _dark: "inset 0 -1px 1px 0 {colors.neutral.a3},inset 0 0 0 1px {colors.neutral.a3},inset 0 3px 4px 0 {colors.overlay.black.a5},inset 0 0 0 1px {colors.neutral.a4}",
            _osDark:
                "inset 0 -1px 1px 0 {colors.neutral.a3},inset 0 0 0 1px {colors.neutral.a3},inset 0 3px 4px 0 {colors.overlay.black.a5},inset 0 0 0 1px {colors.neutral.a4}",
        },
    },
    2: {
        description: 'Shadows for variant="classic" panels, like Card',
        value: {
            base: "0 1px 1px 0 {colors.neutral.a2},0 2px 1px -1px {colors.overlay.black.a1},0 1px 3px 0 {colors.overlay.black.a1}",
            _light: "0 1px 1px 0 {colors.neutral.a2},0 2px 1px -1px {colors.overlay.black.a1},0 1px 3px 0 {colors.overlay.black.a1}",
            _osLight:
                "0 1px 1px 0 {colors.neutral.a2},0 2px 1px -1px {colors.overlay.black.a1},0 1px 3px 0 {colors.overlay.black.a1}",
            _dark: "0 1px 1px 0 {colors.overlay.black.a6},0 2px 1px -1px {colors.overlay.black.a6},0 1px 3px 0 {colors.overlay.black.a5}",
            _osDark:
                "0 1px 1px 0 {colors.overlay.black.a6},0 2px 1px -1px {colors.overlay.black.a6},0 1px 3px 0 {colors.overlay.black.a5}",
        },
    },
    3: {
        description: 'Shadows for variant="classic" panels, like Card',
        value: {
            base: "0 2px 3px -2px {colors.neutral.a3},0 3px 12px -4px {colors.overlay.black.a2},0 4px 16px -8px {colors.overlay.black.a2}",
            _light: "0 2px 3px -2px {colors.neutral.a3},0 3px 12px -4px {colors.overlay.black.a2},0 4px 16px -8px {colors.overlay.black.a2}",
            _osLight:
                "0 2px 3px -2px {colors.neutral.a3},0 3px 12px -4px {colors.overlay.black.a2},0 4px 16px -8px {colors.overlay.black.a2}",
            _dark: "0 2px 3px -2px {colors.overlay.black.a3},0 3px 8px -2px {colors.overlay.black.a6},0 4px 12px -4px {colors.overlay.black.a7}",
            _osDark:
                "0 2px 3px -2px {colors.overlay.black.a3},0 3px 8px -2px {colors.overlay.black.a6},0 4px 12px -4px {colors.overlay.black.a7}",
        },
    },
    4: {
        description: "Shadows for smaller overlay panels, like Hover Card and Popover",
        value: {
            base: "0 8px 40px {colors.overlay.black.a1},0 12px 32px -16px {colors.overlay.black.a3}",
            _light: "0 8px 40px {colors.overlay.black.a1},0 12px 32px -16px {colors.overlay.black.a3}",
            _osLight:
                "0 8px 40px {colors.overlay.black.a1},0 12px 32px -16px {colors.overlay.black.a3}",
            _dark: "0 8px 40px {colors.overlay.black.a3},0 12px 32px -16px {colors.overlay.black.a5}",
            _osDark:
                "0 8px 40px {colors.overlay.black.a3},0 12px 32px -16px {colors.overlay.black.a5}",
        },
    },
    5: {
        description: "Shadows for smaller overlay panels, like Hover Card and Popover",
        value: {
            base: "0 12px 60px {colors.overlay.black.a3},0 12px 32px -16px {colors.neutral.a5}",
            _light: "0 12px 60px {colors.overlay.black.a3},0 12px 32px -16px {colors.neutral.a5}",
            _osLight: "0 12px 60px {colors.overlay.black.a3},0 12px 32px -16px {colors.neutral.a5}",
            _dark: "0 12px 60px {colors.overlay.black.a5},0 12px 32px -16px {colors.overlay.black.a7}",
            _osDark:
                "0 12px 60px {colors.overlay.black.a5},0 12px 32px -16px {colors.overlay.black.a7}",
        },
    },
    6: {
        description: "Shadows for larger overlay panels, like Dialog",
        value: {
            base: "0 12px 60px {colors.overlay.black.a3},0 16px 64px {colors.neutral.a2},0 16px 36px -20px {colors.neutral.a7}",
            _light: "0 12px 60px {colors.overlay.black.a3},0 16px 64px {colors.neutral.a2},0 16px 36px -20px {colors.neutral.a7}",
            _osLight:
                "0 12px 60px {colors.overlay.black.a3},0 16px 64px {colors.neutral.a2},0 16px 36px -20px {colors.neutral.a7}",
            _dark: "0 12px 60px {colors.overlay.black.a4}, 0 16px 64px {colors.overlay.black.a6}, 0 16px 36px -20px {colors.overlay.black.a11}",
            _osDark:
                "0 12px 60px {colors.overlay.black.a4}, 0 16px 64px {colors.overlay.black.a6}, 0 16px 36px -20px {colors.overlay.black.a11}",
        },
    },
});
