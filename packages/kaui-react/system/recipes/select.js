import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const selectDefaultVariants = {
  "fullWidth": false,
  "variant": "surface",
  "menuVariant": "solid"
}
const selectCompoundVariants = []

const selectSlotNames = [
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "valueText",
    "select__valueText"
  ]
]
const selectSlotFns = /* @__PURE__ */ selectSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectDefaultVariants, getSlotCompoundVariant(selectCompoundVariants, slotName))])

const selectFn = memo((props = {}) => {
  return Object.fromEntries(selectSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const selectVariantKeys = [
  "hideLabel",
  "fullWidth",
  "size",
  "variant",
  "menuVariant"
]
const getVariantProps = (variants) => ({ ...selectDefaultVariants, ...compact(variants) })

export const select = /* @__PURE__ */ Object.assign(selectFn, {
  __recipe__: false,
  __name__: 'select',
  raw: (props) => props,
  variantKeys: selectVariantKeys,
  variantMap: {
  "hideLabel": [
    "true"
  ],
  "fullWidth": [
    "true",
    "false"
  ],
  "size": [
    "xs",
    "sm",
    "md"
  ],
  "variant": [
    "surface",
    "soft",
    "ghost"
  ],
  "menuVariant": [
    "solid",
    "soft"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, selectVariantKeys)
  },
  getVariantProps
})