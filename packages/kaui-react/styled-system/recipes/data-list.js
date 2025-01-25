import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const dataListDefaultVariants = {}
const dataListCompoundVariants = []

const dataListSlotNames = [
  [
    "root",
    "data-list__root"
  ],
  [
    "item",
    "data-list__item"
  ],
  [
    "itemLabel",
    "data-list__itemLabel"
  ],
  [
    "itemValue",
    "data-list__itemValue"
  ]
]
const dataListSlotFns = /* @__PURE__ */ dataListSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataListDefaultVariants, getSlotCompoundVariant(dataListCompoundVariants, slotName))])

const dataListFn = memo((props = {}) => {
  return Object.fromEntries(dataListSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataListVariantKeys = [
  "size"
]
const getVariantProps = (variants) => ({ ...dataListDefaultVariants, ...compact(variants) })

export const dataList = /* @__PURE__ */ Object.assign(dataListFn, {
  __recipe__: false,
  __name__: 'dataList',
  raw: (props) => props,
  variantKeys: dataListVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataListVariantKeys)
  },
  getVariantProps
})