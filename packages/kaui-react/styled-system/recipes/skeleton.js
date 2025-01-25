import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const skeletonFn = /* @__PURE__ */ createRecipe('skeleton', {}, [])

const skeletonVariantMap = {
  "isLoading": [
    "true"
  ],
  "variant": [
    "pulse"
  ]
}

const skeletonVariantKeys = Object.keys(skeletonVariantMap)

export const skeleton = /* @__PURE__ */ Object.assign(memo(skeletonFn.recipeFn), {
  __recipe__: true,
  __name__: 'skeleton',
  __getCompoundVariantCss__: skeletonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: skeletonVariantKeys,
  variantMap: skeletonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, skeletonVariantKeys)
  },
  getVariantProps: skeletonFn.getVariantProps,
})