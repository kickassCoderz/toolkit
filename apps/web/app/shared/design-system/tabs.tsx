import type { Assign } from "@ark-ui/react";
import { Tabs as ArkTabs } from "@ark-ui/react/tabs";

import { tabs, type TabsVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(tabs);

export type TabsRootProviderProperties = ComponentProps<typeof TabsRootProvider>;
export const TabsRootProvider = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkTabs.RootProviderBaseProps>, TabsVariantProps>
>(ArkTabs.RootProvider, "root");

export type TabsRootProperties = ComponentProps<typeof TabsRoot>;
export const TabsRoot = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkTabs.RootBaseProps>, TabsVariantProps>
>(ArkTabs.Root, "root");

export const TabsContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTabs.ContentBaseProps>
>(ArkTabs.Content, "content");

export const TabsIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTabs.IndicatorBaseProps>
>(ArkTabs.Indicator, "indicator");

export const TabsList = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTabs.ListBaseProps>
>(ArkTabs.List, "list");

export const TabsTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkTabs.TriggerBaseProps>
>(ArkTabs.Trigger, "trigger");

export { TabsContext } from "@ark-ui/react/tabs";
