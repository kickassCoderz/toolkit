import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const buttonFn = /* @__PURE__ */ createRecipe('button', {}, [])

const buttonVariantMap = {
  "justify": [
    "start",
    "center",
    "end",
    "between"
  ],
  "fullWidth": [
    "true",
    "false"
  ],
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

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})