import { defineTokens } from "@pandacss/dev";

import { animations } from "./animations";
import { blurs } from "./blurs";
import { borderWidths } from "./border-widths";
import { borders } from "./borders";
import { colors } from "./colors";
import { durations } from "./durations";
import { easings } from "./easings";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography";
import { zIndex } from "./z-index";

export const tokens = defineTokens({
    colors,
    spacing,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    blurs,
    radii,
    zIndex,
    borderWidths,
    animations,
    borders,
    easings,
    durations,
});
