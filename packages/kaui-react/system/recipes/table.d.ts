/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TableVariant {
  interactive: boolean
/**
 * @default "sm"
 */
size: "xs" | "sm" | "md"
/**
 * @default "ghost"
 */
variant: "surface" | "ghost"
}

type TableVariantMap = {
  [key in keyof TableVariant]: Array<TableVariant[key]>
}

export type TableVariantProps = {
  [key in keyof TableVariant]?: ConditionalValue<TableVariant[key]> | undefined
}

export interface TableRecipe {
  __type: TableVariantProps
  (props?: TableVariantProps): Pretty<Record<"root" | "header" | "body" | "row" | "cell" | "columnHeaderCell" | "rowHeaderCell" | "caption", string>>
  raw: (props?: TableVariantProps) => TableVariantProps
  variantMap: TableVariantMap
  variantKeys: Array<keyof TableVariant>
  splitVariantProps<Props extends TableVariantProps>(props: Props): [TableVariantProps, Pretty<DistributiveOmit<Props, keyof TableVariantProps>>]
  getVariantProps: (props?: TableVariantProps) => TableVariantProps
}


export declare const table: TableRecipe