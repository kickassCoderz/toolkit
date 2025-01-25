import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const iconButtonFn = /* @__PURE__ */ createRecipe('icon-button', {}, [])

const iconButtonVariantMap = {
  "radius": [
    "none",
    "rounded",
    "full"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ],
  "highContrast": [
    "true",
    "false"
  ],
  "variant": [
    "solid",
    "soft",
    "ghost",
    "surface",
    "outlined"
  ]
}

const iconButtonVariantKeys = Object.keys(iconButtonVariantMap)

export const iconButton = /* @__PURE__ */ Object.assign(memo(iconButtonFn.recipeFn), {
  __recipe__: true,
  __name__: 'iconButton',
  __getCompoundVariantCss__: iconButtonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconButtonVariantKeys,
  variantMap: iconButtonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconButtonVariantKeys)
  },
  getVariantProps: iconButtonFn.getVariantProps,
})