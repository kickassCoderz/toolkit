import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const spinnerDefaultVariants = {}
const spinnerCompoundVariants = []

const spinnerSlotNames = [
  [
    "root",
    "spinner__root"
  ],
  [
    "leaf",
    "spinner__leaf"
  ]
]
const spinnerSlotFns = /* @__PURE__ */ spinnerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, spinnerDefaultVariants, getSlotCompoundVariant(spinnerCompoundVariants, slotName))])

const spinnerFn = memo((props = {}) => {
  return Object.fromEntries(spinnerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const spinnerVariantKeys = [
  "size"
]
const getVariantProps = (variants) => ({ ...spinnerDefaultVariants, ...compact(variants) })

export const spinner = /* @__PURE__ */ Object.assign(spinnerFn, {
  __recipe__: false,
  __name__: 'spinner',
  raw: (props) => props,
  variantKeys: spinnerVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, spinnerVariantKeys)
  },
  getVariantProps
})