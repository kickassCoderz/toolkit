import { createKickassUIPreset, indigo, slate } from "@kickass-coderz/panda-preset-kaui";
import { defineConfig } from "@pandacss/dev";

const kickassUIPreset = createKickassUIPreset({ accentColor: indigo, neutralColor: slate });

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    presets: [kickassUIPreset],

    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },

    // The output directory for your css system
    outdir: "styled-system",
    importMap: "@kickass-coderz/kaui-react/styled-system",
    jsxFramework: "react",
    jsxStyleProps: "minimal",
    outExtension: "js",
});
