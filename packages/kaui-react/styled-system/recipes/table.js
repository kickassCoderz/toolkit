import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableDefaultVariants = {
  "size": "sm",
  "variant": "ghost"
}
const tableCompoundVariants = []

const tableSlotNames = [
  [
    "root",
    "table__root"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "columnHeaderCell",
    "table__columnHeaderCell"
  ],
  [
    "rowHeaderCell",
    "table__rowHeaderCell"
  ],
  [
    "caption",
    "table__caption"
  ]
]
const tableSlotFns = /* @__PURE__ */ tableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableDefaultVariants, getSlotCompoundVariant(tableCompoundVariants, slotName))])

const tableFn = memo((props = {}) => {
  return Object.fromEntries(tableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tableVariantKeys = [
  "interactive",
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...tableDefaultVariants, ...compact(variants) })

export const table = /* @__PURE__ */ Object.assign(tableFn, {
  __recipe__: false,
  __name__: 'table',
  raw: (props) => props,
  variantKeys: tableVariantKeys,
  variantMap: {
  "interactive": [
    "true"
  ],
  "size": [
    "xs",
    "sm",
    "md"
  ],
  "variant": [
    "surface",
    "ghost"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys)
  },
  getVariantProps
})