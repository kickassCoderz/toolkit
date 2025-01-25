import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const textInputDefaultVariants = {
  "size": "sm",
  "radius": "rounded",
  "variant": "surface"
}
const textInputCompoundVariants = []

const textInputSlotNames = [
  [
    "root",
    "text-input__root"
  ],
  [
    "input",
    "text-input__input"
  ],
  [
    "slot",
    "text-input__slot"
  ]
]
const textInputSlotFns = /* @__PURE__ */ textInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, textInputDefaultVariants, getSlotCompoundVariant(textInputCompoundVariants, slotName))])

const textInputFn = memo((props = {}) => {
  return Object.fromEntries(textInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const textInputVariantKeys = [
  "fullWidth",
  "radius",
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...textInputDefaultVariants, ...compact(variants) })

export const textInput = /* @__PURE__ */ Object.assign(textInputFn, {
  __recipe__: false,
  __name__: 'textInput',
  raw: (props) => props,
  variantKeys: textInputVariantKeys,
  variantMap: {
  "fullWidth": [
    "true"
  ],
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
    return splitProps(props, textInputVariantKeys)
  },
  getVariantProps
})