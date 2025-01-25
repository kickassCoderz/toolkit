import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const sidebarDefaultVariants = {}
const sidebarCompoundVariants = []

const sidebarSlotNames = [
  [
    "root",
    "sidebar__root"
  ],
  [
    "header",
    "sidebar__header"
  ],
  [
    "content",
    "sidebar__content"
  ],
  [
    "footer",
    "sidebar__footer"
  ],
  [
    "section",
    "sidebar__section"
  ],
  [
    "sectionHeader",
    "sidebar__sectionHeader"
  ],
  [
    "sectionLabel",
    "sidebar__sectionLabel"
  ],
  [
    "sectionContent",
    "sidebar__sectionContent"
  ],
  [
    "menu",
    "sidebar__menu"
  ],
  [
    "menuItem",
    "sidebar__menuItem"
  ]
]
const sidebarSlotFns = /* @__PURE__ */ sidebarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sidebarDefaultVariants, getSlotCompoundVariant(sidebarCompoundVariants, slotName))])

const sidebarFn = memo((props = {}) => {
  return Object.fromEntries(sidebarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const sidebarVariantKeys = []
const getVariantProps = (variants) => ({ ...sidebarDefaultVariants, ...compact(variants) })

export const sidebar = /* @__PURE__ */ Object.assign(sidebarFn, {
  __recipe__: false,
  __name__: 'sidebar',
  raw: (props) => props,
  variantKeys: sidebarVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, sidebarVariantKeys)
  },
  getVariantProps
})