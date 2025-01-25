/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface InputFieldVariant {
  
}

type InputFieldVariantMap = {
  [key in keyof InputFieldVariant]: Array<InputFieldVariant[key]>
}

export type InputFieldVariantProps = {
  [key in keyof InputFieldVariant]?: ConditionalValue<InputFieldVariant[key]> | undefined
}

export interface InputFieldRecipe {
  __type: InputFieldVariantProps
  (props?: InputFieldVariantProps): Pretty<Record<"root" | "errorText" | "helperText" | "input" | "label" | "select" | "textarea" | "labelContainer", string>>
  raw: (props?: InputFieldVariantProps) => InputFieldVariantProps
  variantMap: InputFieldVariantMap
  variantKeys: Array<keyof InputFieldVariant>
  splitVariantProps<Props extends InputFieldVariantProps>(props: Props): [InputFieldVariantProps, Pretty<DistributiveOmit<Props, keyof InputFieldVariantProps>>]
  getVariantProps: (props?: InputFieldVariantProps) => InputFieldVariantProps
}


export declare const inputField: InputFieldRecipe