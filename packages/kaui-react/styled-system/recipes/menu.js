import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const menuDefaultVariants = {
  "variant": "solid",
  "size": "sm"
}
const menuCompoundVariants = []

const menuSlotNames = [
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "menu__itemIndicator"
  ],
  [
    "itemText",
    "menu__itemText"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ]
]
const menuSlotFns = /* @__PURE__ */ menuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, menuDefaultVariants, getSlotCompoundVariant(menuCompoundVariants, slotName))])

const menuFn = memo((props = {}) => {
  return Object.fromEntries(menuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const menuVariantKeys = [
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...menuDefaultVariants, ...compact(variants) })

export const menu = /* @__PURE__ */ Object.assign(menuFn, {
  __recipe__: false,
  __name__: 'menu',
  raw: (props) => props,
  variantKeys: menuVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm"
  ],
  "variant": [
    "solid",
    "soft"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, menuVariantKeys)
  },
  getVariantProps
})