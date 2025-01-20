/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FieldsetVariant {
  orientation: "horizontal" | "vertical"
size: "xs" | "sm" | "md"
}

type FieldsetVariantMap = {
  [key in keyof FieldsetVariant]: Array<FieldsetVariant[key]>
}

export type FieldsetVariantProps = {
  [key in keyof FieldsetVariant]?: ConditionalValue<FieldsetVariant[key]> | undefined
}

export interface FieldsetRecipe {
  __type: FieldsetVariantProps
  (props?: FieldsetVariantProps): Pretty<Record<"root" | "errorText" | "helperText" | "legend" | "legendContainer" | "content", string>>
  raw: (props?: FieldsetVariantProps) => FieldsetVariantProps
  variantMap: FieldsetVariantMap
  variantKeys: Array<keyof FieldsetVariant>
  splitVariantProps<Props extends FieldsetVariantProps>(props: Props): [FieldsetVariantProps, Pretty<DistributiveOmit<Props, keyof FieldsetVariantProps>>]
  getVariantProps: (props?: FieldsetVariantProps) => FieldsetVariantProps
}


export declare const fieldset: FieldsetRecipe