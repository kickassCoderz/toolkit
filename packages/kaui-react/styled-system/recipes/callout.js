import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const calloutDefaultVariants = {
  "variant": "soft",
  "size": "md",
  "highContrast": false
}
const calloutCompoundVariants = []

const calloutSlotNames = [
  [
    "root",
    "callout__root"
  ],
  [
    "icon",
    "callout__icon"
  ],
  [
    "content",
    "callout__content"
  ],
  [
    "title",
    "callout__title"
  ],
  [
    "description",
    "callout__description"
  ]
]
const calloutSlotFns = /* @__PURE__ */ calloutSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, calloutDefaultVariants, getSlotCompoundVariant(calloutCompoundVariants, slotName))])

const calloutFn = memo((props = {}) => {
  return Object.fromEntries(calloutSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const calloutVariantKeys = [
  "highContrast",
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...calloutDefaultVariants, ...compact(variants) })

export const callout = /* @__PURE__ */ Object.assign(calloutFn, {
  __recipe__: false,
  __name__: 'callout',
  raw: (props) => props,
  variantKeys: calloutVariantKeys,
  variantMap: {
  "highContrast": [
    "true",
    "false"
  ],
  "variant": [
    "solid",
    "soft",
    "outlined",
    "surface"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, calloutVariantKeys)
  },
  getVariantProps
})