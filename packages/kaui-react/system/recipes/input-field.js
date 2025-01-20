import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const inputFieldDefaultVariants = {}
const inputFieldCompoundVariants = []

const inputFieldSlotNames = [
  [
    "root",
    "input-field__root"
  ],
  [
    "errorText",
    "input-field__errorText"
  ],
  [
    "helperText",
    "input-field__helperText"
  ],
  [
    "input",
    "input-field__input"
  ],
  [
    "label",
    "input-field__label"
  ],
  [
    "select",
    "input-field__select"
  ],
  [
    "textarea",
    "input-field__textarea"
  ],
  [
    "requiredIndicator",
    "input-field__requiredIndicator"
  ],
  [
    "labelContainer",
    "input-field__labelContainer"
  ]
]
const inputFieldSlotFns = /* @__PURE__ */ inputFieldSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, inputFieldDefaultVariants, getSlotCompoundVariant(inputFieldCompoundVariants, slotName))])

const inputFieldFn = memo((props = {}) => {
  return Object.fromEntries(inputFieldSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const inputFieldVariantKeys = []
const getVariantProps = (variants) => ({ ...inputFieldDefaultVariants, ...compact(variants) })

export const inputField = /* @__PURE__ */ Object.assign(inputFieldFn, {
  __recipe__: false,
  __name__: 'inputField',
  raw: (props) => props,
  variantKeys: inputFieldVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, inputFieldVariantKeys)
  },
  getVariantProps
})