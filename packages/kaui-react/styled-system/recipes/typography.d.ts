/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TypographyVariant {
  transform: "uppercase" | "lowercase" | "capitalize" | "capitalizeFirst"
srOnly: boolean
truncate: boolean
select: "none"
style: "normal" | "italic"
align: "left" | "center" | "right"
wrap: "nowrap" | "balance" | "pretty"
family: "inherit" | "sans" | "serif" | "mono"
weight: "light" | "regular" | "medium" | "semiBold" | "bold"
size: "inherit" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
highContrast: boolean
underline: "never" | "always" | "hover"
variant: "solid" | "soft" | "outlined" | "plain"
type: "em" | "quote" | "code" | "kbd"
}

type TypographyVariantMap = {
  [key in keyof TypographyVariant]: Array<TypographyVariant[key]>
}

export type TypographyVariantProps = {
  [key in keyof TypographyVariant]?: ConditionalValue<TypographyVariant[key]> | undefined
}

export interface TypographyRecipe {
  __type: TypographyVariantProps
  (props?: TypographyVariantProps): string
  raw: (props?: TypographyVariantProps) => TypographyVariantProps
  variantMap: TypographyVariantMap
  variantKeys: Array<keyof TypographyVariant>
  splitVariantProps<Props extends TypographyVariantProps>(props: Props): [TypographyVariantProps, Pretty<DistributiveOmit<Props, keyof TypographyVariantProps>>]
  getVariantProps: (props?: TypographyVariantProps) => TypographyVariantProps
}


export declare const typography: TypographyRecipe