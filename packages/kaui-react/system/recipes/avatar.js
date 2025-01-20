import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const avatarDefaultVariants = {
  "size": "md",
  "variant": "soft",
  "radius": "full"
}
const avatarCompoundVariants = []

const avatarSlotNames = [
  [
    "root",
    "avatar__root"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ]
]
const avatarSlotFns = /* @__PURE__ */ avatarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, avatarDefaultVariants, getSlotCompoundVariant(avatarCompoundVariants, slotName))])

const avatarFn = memo((props = {}) => {
  return Object.fromEntries(avatarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const avatarVariantKeys = [
  "radius",
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...avatarDefaultVariants, ...compact(variants) })

export const avatar = /* @__PURE__ */ Object.assign(avatarFn, {
  __recipe__: false,
  __name__: 'avatar',
  raw: (props) => props,
  variantKeys: avatarVariantKeys,
  variantMap: {
  "radius": [
    "none",
    "rounded",
    "full"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl"
  ],
  "variant": [
    "solid",
    "soft"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, avatarVariantKeys)
  },
  getVariantProps
})