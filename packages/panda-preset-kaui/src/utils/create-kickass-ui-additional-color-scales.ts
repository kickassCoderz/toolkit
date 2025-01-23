import type { KickassUIBaseColorScale } from "./create-kickass-ui-base-color-scale";
import { createKickassUIColorScale } from "./create-kickass-ui-color-scale";

export type KickassUIAdditionalColorScale = {
    name: string;
    scale: KickassUIBaseColorScale;
};

export function createKickassUIAdditionalColorScales(
    additionalColors: Array<KickassUIAdditionalColorScale> = []
) {
    return Object.fromEntries(
        additionalColors.map(({ name, scale }) => {
            const colorScale = createKickassUIColorScale({ name, baseScale: scale });

            return [colorScale.name, colorScale.scale] as const;
        })
    );
}
