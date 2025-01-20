/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CardVariant {
  /**
 * @default true
 */
translucent: boolean
/**
 * @default "rounded"
 */
radius: "none" | "rounded"
/**
 * @default "xs"
 */
size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "surface"
 */
variant: "surface" | "ghost"
}

type CardVariantMap = {
  [key in keyof CardVariant]: Array<CardVariant[key]>
}

export type CardVariantProps = {
  [key in keyof CardVariant]?: ConditionalValue<CardVariant[key]> | undefined
}

export interface CardRecipe {
  __type: CardVariantProps
  (props?: CardVariantProps): Pretty<Record<"root" | "header" | "body" | "footer", string>>
  raw: (props?: CardVariantProps) => CardVariantProps
  variantMap: CardVariantMap
  variantKeys: Array<keyof CardVariant>
  splitVariantProps<Props extends CardVariantProps>(props: Props): [CardVariantProps, Pretty<DistributiveOmit<Props, keyof CardVariantProps>>]
  getVariantProps: (props?: CardVariantProps) => CardVariantProps
}


export declare const card: CardRecipe