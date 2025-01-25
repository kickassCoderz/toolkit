import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const numberInputDefaultVariants = {
  "radius": "rounded",
  "size": "md"
}
const numberInputCompoundVariants = []

const numberInputSlotNames = [
  [
    "root",
    "number-input__root"
  ],
  [
    "label",
    "number-input__label"
  ],
  [
    "input",
    "number-input__input"
  ],
  [
    "control",
    "number-input__control"
  ],
  [
    "valueText",
    "number-input__valueText"
  ],
  [
    "incrementTrigger",
    "number-input__incrementTrigger"
  ],
  [
    "decrementTrigger",
    "number-input__decrementTrigger"
  ],
  [
    "scrubber",
    "number-input__scrubber"
  ]
]
const numberInputSlotFns = /* @__PURE__ */ numberInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, numberInputDefaultVariants, getSlotCompoundVariant(numberInputCompoundVariants, slotName))])

const numberInputFn = memo((props = {}) => {
  return Object.fromEntries(numberInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const numberInputVariantKeys = [
  "radius",
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...numberInputDefaultVariants, ...compact(variants) })

export const numberInput = /* @__PURE__ */ Object.assign(numberInputFn, {
  __recipe__: false,
  __name__: 'numberInput',
  raw: (props) => props,
  variantKeys: numberInputVariantKeys,
  variantMap: {
  "radius": [
    "none",
    "rounded",
    "full"
  ],
  "size": [
    "xs",
    "sm",
    "md"
  ],
  "variant": [
    "surface",
    "classic",
    "soft",
    "ghost",
    "plain"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, numberInputVariantKeys)
  },
  getVariantProps
})