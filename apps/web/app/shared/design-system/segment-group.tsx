import type { Assign } from "@ark-ui/react";
import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";

import { segmentGroup, type SegmentGroupVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(segmentGroup);

export type SegmentGroupRootProviderProperties = ComponentProps<typeof SegmentGroupRootProvider>;
export const SegmentGroupRootProvider = withProvider<
    HTMLDivElement,
    Assign<
        Assign<HTMLStyledProps<"div">, ArkSegmentGroup.RootProviderBaseProps>,
        SegmentGroupVariantProps
    >
>(ArkSegmentGroup.RootProvider, "root");

export type SegmentGroupRootProperties = ComponentProps<typeof SegmentGroupRoot>;
export const SegmentGroupRoot = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkSegmentGroup.RootBaseProps>, SegmentGroupVariantProps>
>(ArkSegmentGroup.Root, "root");

export const SegmentGroupIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSegmentGroup.IndicatorBaseProps>
>(ArkSegmentGroup.Indicator, "indicator");

export const SegmentGroupItemControl = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSegmentGroup.ItemControlBaseProps>
>(ArkSegmentGroup.ItemControl, "itemControl");

export const SegmentGroupItem = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkSegmentGroup.ItemBaseProps>
>(ArkSegmentGroup.Item, "item");

export const SegmentGroupItemText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkSegmentGroup.ItemTextBaseProps>
>(ArkSegmentGroup.ItemText, "itemText");

export const SegmentGroupLabel = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkSegmentGroup.LabelBaseProps>
>(ArkSegmentGroup.Label, "label");

export { SegmentGroupContext, SegmentGroupItemHiddenInput } from "@ark-ui/react/segment-group";
