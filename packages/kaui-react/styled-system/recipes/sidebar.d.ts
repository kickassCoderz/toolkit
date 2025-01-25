/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SidebarVariant {
  
}

type SidebarVariantMap = {
  [key in keyof SidebarVariant]: Array<SidebarVariant[key]>
}

export type SidebarVariantProps = {
  [key in keyof SidebarVariant]?: ConditionalValue<SidebarVariant[key]> | undefined
}

export interface SidebarRecipe {
  __type: SidebarVariantProps
  (props?: SidebarVariantProps): Pretty<Record<"root" | "header" | "content" | "footer" | "section" | "sectionHeader" | "sectionLabel" | "sectionContent" | "menu" | "menuItem", string>>
  raw: (props?: SidebarVariantProps) => SidebarVariantProps
  variantMap: SidebarVariantMap
  variantKeys: Array<keyof SidebarVariant>
  splitVariantProps<Props extends SidebarVariantProps>(props: Props): [SidebarVariantProps, Pretty<DistributiveOmit<Props, keyof SidebarVariantProps>>]
  getVariantProps: (props?: SidebarVariantProps) => SidebarVariantProps
}


export declare const sidebar: SidebarRecipe