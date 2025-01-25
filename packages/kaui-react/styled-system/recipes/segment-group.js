import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const segmentGroupDefaultVariants = {
  "radius": "rounded",
  "size": "sm"
}
const segmentGroupCompoundVariants = []

const segmentGroupSlotNames = [
  [
    "root",
    "segment-group__root"
  ],
  [
    "label",
    "segment-group__label"
  ],
  [
    "item",
    "segment-group__item"
  ],
  [
    "itemText",
    "segment-group__itemText"
  ],
  [
    "itemControl",
    "segment-group__itemControl"
  ],
  [
    "indicator",
    "segment-group__indicator"
  ]
]
const segmentGroupSlotFns = /* @__PURE__ */ segmentGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, segmentGroupDefaultVariants, getSlotCompoundVariant(segmentGroupCompoundVariants, slotName))])

const segmentGroupFn = memo((props = {}) => {
  return Object.fromEntries(segmentGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const segmentGroupVariantKeys = [
  "radius",
  "size"
]
const getVariantProps = (variants) => ({ ...segmentGroupDefaultVariants, ...compact(variants) })

export const segmentGroup = /* @__PURE__ */ Object.assign(segmentGroupFn, {
  __recipe__: false,
  __name__: 'segmentGroup',
  raw: (props) => props,
  variantKeys: segmentGroupVariantKeys,
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
  ]
},
  splitVariantProps(props) {
    return splitProps(props, segmentGroupVariantKeys)
  },
  getVariantProps
})