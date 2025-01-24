import { definePreset } from "@pandacss/dev";

import { conditions } from "./conditions";
import { globalCss } from "./global-css";
import { theme } from "./theme";
import {
    createKickassUIAdditionalColorScales,
    type KickassUIAdditionalColorScale,
} from "./utils/create-kickass-ui-additional-color-scales";
import type { KickassUIBaseColorScale } from "./utils/create-kickass-ui-base-color-scale";
import { createKickassUIColorScale } from "./utils/create-kickass-ui-color-scale";

export function createKickassUIPreset({
    accentColor,
    neutralColor,
    additionalColors = [],
}: CreateKickassUIPresetOptions) {
    const accentScale = createKickassUIColorScale({ name: "accent", baseScale: accentColor });
    const neutralScale = createKickassUIColorScale({ name: "neutral", baseScale: neutralColor });
    const additionalColorScales = createKickassUIAdditionalColorScales(additionalColors);

    return definePreset({
        name: "@kickass-coderz/panda-preset-kaui",
        presets: ["@pandacss/preset-base"],
        globalCss: {
            ...globalCss,
            extend: {
                html: {
                    colorPalette: accentScale.name,
                },
            },
        },
        conditions,
        theme: {
            extend: {
                ...theme,
                semanticTokens: {
                    ...theme.semanticTokens,
                    colors: {
                        ...theme.semanticTokens.colors,
                        [accentScale.name]: accentScale.scale,
                        [neutralScale.name]: neutralScale.scale,
                        ...additionalColorScales,
                    },
                },
            },
        },
    });
}

export {
    createKickassUIAdditionalColorScales,
    type KickassUIAdditionalColorScale,
} from "./utils/create-kickass-ui-additional-color-scales";
export {
    createKickassUIBaseColorScale,
    type KickassUIBaseColorScale,
} from "./utils/create-kickass-ui-base-color-scale";
export {
    createKickassUIColorScale,
    type CreateKickassUIColorScaleOptions,
    type CreateKickassUIColorScaleReturnType,
} from "./utils/create-kickass-ui-color-scale";
export {
    createKickassUITheme,
    type CreateKickassUIThemeOptions,
} from "./utils/create-kickass-ui-theme";

export type CreateKickassUIPresetOptions = {
    accentColor: KickassUIBaseColorScale;
    neutralColor: KickassUIBaseColorScale;
    additionalColors?: Array<KickassUIAdditionalColorScale>;
};

export * from "./base-color-scales";
export * from "./themes";
