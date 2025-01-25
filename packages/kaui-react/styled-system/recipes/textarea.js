import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const textareaFn = /* @__PURE__ */ createRecipe('textarea', {
  "resize": "vertical"
}, [])

const textareaVariantMap = {
  "resize": [
    "horizontal",
    "vertical",
    "none",
    "both"
  ],
  "size": [
    "xs",
    "sm",
    "md"
  ],
  "variant": [
    "surface"
  ]
}

const textareaVariantKeys = Object.keys(textareaVariantMap)

export const textarea = /* @__PURE__ */ Object.assign(memo(textareaFn.recipeFn), {
  __recipe__: true,
  __name__: 'textarea',
  __getCompoundVariantCss__: textareaFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textareaVariantKeys,
  variantMap: textareaVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textareaVariantKeys)
  },
  getVariantProps: textareaFn.getVariantProps,
})