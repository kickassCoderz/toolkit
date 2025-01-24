import { createKickassUIPreset, gray, plum } from "@kickass-coderz/panda-preset-kaui";
import { defineConfig } from "@pandacss/dev";

const kickassPreset = createKickassUIPreset({
    accentColor: plum,
    neutralColor: gray,
});

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    presets: [kickassPreset],

    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },

    // The output directory for your css system
    outdir: "styled-system",
    jsxFramework: "react",
    jsxStyleProps: "minimal",
});
