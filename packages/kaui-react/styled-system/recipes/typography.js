import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const typographyFn = /* @__PURE__ */ createRecipe('typography', {}, [])

const typographyVariantMap = {
  "transform": [
    "uppercase",
    "lowercase",
    "capitalize",
    "capitalizeFirst"
  ],
  "srOnly": [
    "true"
  ],
  "truncate": [
    "true"
  ],
  "select": [
    "none"
  ],
  "style": [
    "normal",
    "italic"
  ],
  "align": [
    "left",
    "center",
    "right"
  ],
  "wrap": [
    "nowrap",
    "balance",
    "pretty"
  ],
  "family": [
    "inherit",
    "sans",
    "serif",
    "mono"
  ],
  "weight": [
    "light",
    "regular",
    "medium",
    "semiBold",
    "bold"
  ],
  "size": [
    "inherit",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl"
  ],
  "highContrast": [
    "true",
    "false"
  ],
  "underline": [
    "never",
    "always",
    "hover"
  ],
  "variant": [
    "solid",
    "soft",
    "outlined",
    "plain"
  ],
  "type": [
    "em",
    "quote",
    "code",
    "kbd"
  ]
}

const typographyVariantKeys = Object.keys(typographyVariantMap)

export const typography = /* @__PURE__ */ Object.assign(memo(typographyFn.recipeFn), {
  __recipe__: true,
  __name__: 'typography',
  __getCompoundVariantCss__: typographyFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: typographyVariantKeys,
  variantMap: typographyVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, typographyVariantKeys)
  },
  getVariantProps: typographyFn.getVariantProps,
})