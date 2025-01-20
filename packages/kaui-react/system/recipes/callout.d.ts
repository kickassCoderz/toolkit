/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CalloutVariant {
  /**
 * @default false
 */
highContrast: boolean
/**
 * @default "soft"
 */
variant: "solid" | "soft" | "outlined" | "surface"
/**
 * @default "md"
 */
size: "sm" | "md" | "lg"
}

type CalloutVariantMap = {
  [key in keyof CalloutVariant]: Array<CalloutVariant[key]>
}

export type CalloutVariantProps = {
  [key in keyof CalloutVariant]?: ConditionalValue<CalloutVariant[key]> | undefined
}

export interface CalloutRecipe {
  __type: CalloutVariantProps
  (props?: CalloutVariantProps): Pretty<Record<"root" | "icon" | "content" | "title" | "description", string>>
  raw: (props?: CalloutVariantProps) => CalloutVariantProps
  variantMap: CalloutVariantMap
  variantKeys: Array<keyof CalloutVariant>
  splitVariantProps<Props extends CalloutVariantProps>(props: Props): [CalloutVariantProps, Pretty<DistributiveOmit<Props, keyof CalloutVariantProps>>]
  getVariantProps: (props?: CalloutVariantProps) => CalloutVariantProps
}


export declare const callout: CalloutRecipe