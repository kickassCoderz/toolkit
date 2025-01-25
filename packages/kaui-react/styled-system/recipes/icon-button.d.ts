/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface IconButtonVariant {
  radius: "none" | "rounded" | "full"
size: "xs" | "sm" | "md" | "lg"
highContrast: boolean
variant: "solid" | "soft" | "ghost" | "surface" | "outlined"
}

type IconButtonVariantMap = {
  [key in keyof IconButtonVariant]: Array<IconButtonVariant[key]>
}

export type IconButtonVariantProps = {
  [key in keyof IconButtonVariant]?: ConditionalValue<IconButtonVariant[key]> | undefined
}

export interface IconButtonRecipe {
  __type: IconButtonVariantProps
  (props?: IconButtonVariantProps): string
  raw: (props?: IconButtonVariantProps) => IconButtonVariantProps
  variantMap: IconButtonVariantMap
  variantKeys: Array<keyof IconButtonVariant>
  splitVariantProps<Props extends IconButtonVariantProps>(props: Props): [IconButtonVariantProps, Pretty<DistributiveOmit<Props, keyof IconButtonVariantProps>>]
  getVariantProps: (props?: IconButtonVariantProps) => IconButtonVariantProps
}


export declare const iconButton: IconButtonRecipe