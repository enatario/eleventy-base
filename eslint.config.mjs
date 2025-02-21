import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/*.njk, *.md, node_modules, rollup.config.js"],
}, ...fixupConfigRules(compat.extends("eslint:recommended", "@thoughtbot/eslint-config")), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            allowImportExportEverywhere: true,
        },
    },
}, {
    files: ["**/*.js"],

    rules: {
        quotes: ["error", "double", {
            avoidEscape: true,
        }],
    },
}];
