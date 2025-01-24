// import { createKickassUIPreset, mauve, plum } from "@kickass-coderz/kickass-ui-react/preset";
import { defineConfig } from "@pandacss/dev";
import { createKickassUIPreset, crimson, mauve, redTheme } from "@kickass-coderz/kaui-react/preset";

const kickassPreset = createKickassUIPreset({
    accentColor: crimson,
    neutralColor: mauve,
});

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    presets: [kickassPreset],

    // Where to look for your css declarations
    include: [
        "./src/**/*.{ts,tsx}",
        "./node_modules/@kickass-coderz/kaui-react/src/components/**/*.{ts,tsx}",
    ],
    themes: {
        ...redTheme,
    },

    // The output directory for your css system
    importMap: "@kickass-coderz/kaui-react/styled-system",
    outdir: "./node_modules/@kickass-coderz/kaui-react/styled-system",
    // importMap: "@kickass-coderz/kaui-react/system",
    // outdir: "./node_modules/@kickass-coderz/kaui-react/system",
    jsxFramework: "react",
    jsxStyleProps: "minimal",
    outExtension: "js",
    // lightningcss: true,
});
