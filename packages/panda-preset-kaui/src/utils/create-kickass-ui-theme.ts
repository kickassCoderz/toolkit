import type { KickassUIBaseColorScale } from "../types";
import { createKickassUIColorScale } from "./create-kickass-ui-color-scale";

type CreateKickassUIThemeOptions = {
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
