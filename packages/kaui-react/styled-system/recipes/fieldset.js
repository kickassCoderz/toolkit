import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const fieldsetDefaultVariants = {}
const fieldsetCompoundVariants = []

const fieldsetSlotNames = [
  [
    "root",
    "fieldset__root"
  ],
  [
    "errorText",
    "fieldset__errorText"
  ],
  [
    "helperText",
    "fieldset__helperText"
  ],
  [
    "legend",
    "fieldset__legend"
  ],
  [
    "legendContainer",
    "fieldset__legendContainer"
  ],
  [
    "content",
    "fieldset__content"
  ]
]
const fieldsetSlotFns = /* @__PURE__ */ fieldsetSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fieldsetDefaultVariants, getSlotCompoundVariant(fieldsetCompoundVariants, slotName))])

const fieldsetFn = memo((props = {}) => {
  return Object.fromEntries(fieldsetSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const fieldsetVariantKeys = [
  "orientation",
  "size"
]
const getVariantProps = (variants) => ({ ...fieldsetDefaultVariants, ...compact(variants) })

export const fieldset = /* @__PURE__ */ Object.assign(fieldsetFn, {
  __recipe__: false,
  __name__: 'fieldset',
  raw: (props) => props,
  variantKeys: fieldsetVariantKeys,
  variantMap: {
  "orientation": [
    "horizontal",
    "vertical"
  ],
  "size": [
    "xs",
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, fieldsetVariantKeys)
  },
  getVariantProps
})