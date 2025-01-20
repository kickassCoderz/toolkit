import { definePreset } from "@pandacss/dev";

import { indigo } from "./base-color-scales/accent";
import { slate } from "./base-color-scales/neutral";
import { conditions } from "./conditions";
import { globalCss } from "./global-css";
import { theme } from "./theme";
import type { KickassUIBaseColorScale } from "./types";
import { createKickassUIColorScale } from "./utils/create-kickass-ui-color-scale";

export { createKickassUITheme } from "./utils/create-kickass-ui-theme";

type KickassUIAdditionalColorScale = {
    name: string;
    scale: KickassUIBaseColorScale;
};

type CreateKickassUIPresetOptions = {
    accentColor: KickassUIBaseColorScale;
    neutralColor: KickassUIBaseColorScale;
    additionalColors?: Array<KickassUIAdditionalColorScale> | undefined;
};

export function createKickassUIPreset({
    accentColor,
    neutralColor,
    additionalColors = [],
}: CreateKickassUIPresetOptions) {
    const accentScale = createKickassUIColorScale({ name: "accent", baseScale: accentColor });
    const neutralScale = createKickassUIColorScale({ name: "neutral", baseScale: neutralColor });
    const additionalColorScales = Object.fromEntries(
        additionalColors.map(({ name, scale }) => {
            const colorScale = createKickassUIColorScale({ name, baseScale: scale });

            return [colorScale.name, colorScale.scale] as const;
        })
    );

    return definePreset({
        name: "Kickass UI",
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

export default createKickassUIPreset({ accentColor: indigo, neutralColor: slate });

export * from "./base-color-scales";
export * from "./themes";
export * from "./types";
export * from "./utils";
