import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardDefaultVariants = {
  "size": "xs",
  "radius": "rounded",
  "variant": "surface",
  "translucent": true
}
const cardCompoundVariants = []

const cardSlotNames = [
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "body",
    "card__body"
  ],
  [
    "footer",
    "card__footer"
  ]
]
const cardSlotFns = /* @__PURE__ */ cardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, cardDefaultVariants, getSlotCompoundVariant(cardCompoundVariants, slotName))])

const cardFn = memo((props = {}) => {
  return Object.fromEntries(cardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const cardVariantKeys = [
  "translucent",
  "radius",
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...cardDefaultVariants, ...compact(variants) })

export const card = /* @__PURE__ */ Object.assign(cardFn, {
  __recipe__: false,
  __name__: 'card',
  raw: (props) => props,
  variantKeys: cardVariantKeys,
  variantMap: {
  "translucent": [
    "true"
  ],
  "radius": [
    "none",
    "rounded"
  ],
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "variant": [
    "surface",
    "ghost"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, cardVariantKeys)
  },
  getVariantProps
})