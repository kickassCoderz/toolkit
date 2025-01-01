//@ts-check

/**
 * @type {import("prettier").Config}
 */
const config = {
    endOfLine: "lf",
    tabWidth: 4,
    printWidth: 100,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    htmlWhitespaceSensitivity: "css",
    plugins: ["prettier-plugin-packagejson"],
};

export default config;
