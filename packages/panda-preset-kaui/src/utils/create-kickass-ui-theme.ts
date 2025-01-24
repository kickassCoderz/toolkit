import type { KickassUIBaseColorScale } from "./create-kickass-ui-base-color-scale";
import { createKickassUIColorScale } from "./create-kickass-ui-color-scale";

export type CreateKickassUIThemeOptions = {
    name: string;
    accentColor: KickassUIBaseColorScale;
    neutralColor: KickassUIBaseColorScale;
};

export function createKickassUITheme({
    name,
    accentColor,
    neutralColor,
}: CreateKickassUIThemeOptions) {
    const accentScale = createKickassUIColorScale({ name: "accent", baseScale: accentColor });
    const neutralScale = createKickassUIColorScale({ name: "neutral", baseScale: neutralColor });

    return {
        [name]: {
            selector: name,
            semanticTokens: {
                colors: {
                    [accentScale.name]: accentScale.scale,
                    [neutralScale.name]: neutralScale.scale,
                },
            },
        },
    };
}
