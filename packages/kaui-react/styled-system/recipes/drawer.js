import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const drawerDefaultVariants = {
  "size": "xs",
  "placement": "left",
  "translucent": false
}
const drawerCompoundVariants = []

const drawerSlotNames = [
  [
    "trigger",
    "drawer__trigger"
  ],
  [
    "backdrop",
    "drawer__backdrop"
  ],
  [
    "positioner",
    "drawer__positioner"
  ],
  [
    "content",
    "drawer__content"
  ],
  [
    "title",
    "drawer__title"
  ],
  [
    "description",
    "drawer__description"
  ],
  [
    "closeTrigger",
    "drawer__closeTrigger"
  ],
  [
    "body",
    "drawer__body"
  ],
  [
    "header",
    "drawer__header"
  ],
  [
    "footer",
    "drawer__footer"
  ]
]
const drawerSlotFns = /* @__PURE__ */ drawerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, drawerDefaultVariants, getSlotCompoundVariant(drawerCompoundVariants, slotName))])

const drawerFn = memo((props = {}) => {
  return Object.fromEntries(drawerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const drawerVariantKeys = [
  "floating",
  "translucent",
  "size",
  "placement"
]
const getVariantProps = (variants) => ({ ...drawerDefaultVariants, ...compact(variants) })

export const drawer = /* @__PURE__ */ Object.assign(drawerFn, {
  __recipe__: false,
  __name__: 'drawer',
  raw: (props) => props,
  variantKeys: drawerVariantKeys,
  variantMap: {
  "floating": [
    "true"
  ],
  "translucent": [
    "true",
    "false"
  ],
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "full"
  ],
  "placement": [
    "left",
    "right",
    "top",
    "bottom"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, drawerVariantKeys)
  },
  getVariantProps
})