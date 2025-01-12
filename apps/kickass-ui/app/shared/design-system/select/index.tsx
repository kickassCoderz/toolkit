import type { Assign, CollectionItem } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";

import { select, type SelectVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { Portal } from "../portal";
import { createStyleContext } from "../utils/create-style-context";

const { withProvider, withContext } = createStyleContext(select);

export type SelectRootProviderProperties = ComponentProps<typeof SelectRootProvider>;
export const SelectRootProvider = withProvider<
    HTMLDivElement,
    Assign<
        Assign<HTMLStyledProps<"div">, ArkSelect.RootProviderBaseProps<ArkSelect.CollectionItem>>,
        SelectVariantProps
    >
>(ArkSelect.RootProvider, "root");

export type SelectRootProperties<T extends CollectionItem = CollectionItem> = Assign<
    Assign<HTMLStyledProps<"div">, ArkSelect.RootBaseProps<T>>,
    SelectVariantProps
>;
export const SelectRoot = withProvider<
    HTMLDivElement,
    Assign<
        Assign<HTMLStyledProps<"div">, ArkSelect.RootBaseProps<ArkSelect.CollectionItem>>,
        SelectVariantProps
    >
>(ArkSelect.Root, "root");

export const SelectClearTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkSelect.ClearTriggerBaseProps>
>(ArkSelect.ClearTrigger, "clearTrigger");

export const SelectContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ContentBaseProps>
>(ArkSelect.Content, "content");

export const SelectControl = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ControlBaseProps>
>(ArkSelect.Control, "control");

export const SelectIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.IndicatorBaseProps>
>(ArkSelect.Indicator, "indicator");

export const SelectItemGroupLabel = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ItemGroupLabelBaseProps>
>(ArkSelect.ItemGroupLabel, "itemGroupLabel");

export const SelectItemGroup = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ItemGroupBaseProps>
>(ArkSelect.ItemGroup, "itemGroup");

export const SelectItemIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ItemIndicatorBaseProps>
>(ArkSelect.ItemIndicator, "itemIndicator");

export const SelectItemRoot = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ItemBaseProps>
>(ArkSelect.Item, "item");

export const SelectItemText = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"span">, ArkSelect.ItemTextBaseProps>
>(ArkSelect.ItemText, "itemText");

export const SelectLabel = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkSelect.LabelBaseProps>
>(ArkSelect.Label, "label");

export const SelectList = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.ListBaseProps>
>(ArkSelect.List, "list");

export const SelectPositioner = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkSelect.PositionerBaseProps>
>(ArkSelect.Positioner, "positioner");

export const SelectTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkSelect.TriggerBaseProps>
>(ArkSelect.Trigger, "trigger");

export const SelectValueText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkSelect.ValueTextBaseProps>
>(ArkSelect.ValueText, "valueText");

export { SelectContext, SelectHiddenSelect } from "@ark-ui/react/select";

export type SelectProperties<T extends CollectionItem = CollectionItem> =
    SelectRootProperties<T> & {
        readonly children: React.ReactNode;
        readonly placeholder?: string;
        readonly isPortalled?: boolean | undefined;
        readonly indicator?: React.ReactNode;
    };

export function Select<T extends CollectionItem>({
    children,
    isPortalled = true,
    placeholder = "",
    indicator,
    ...rest
}: SelectProperties<T>) {
    return (
        <SelectRoot positioning={{ placement: "bottom" }} {...rest}>
            <ArkSelect.HiddenSelect />
            <SelectControl>
                <SelectTrigger>
                    <SelectValueText placeholder={placeholder} />
                    <SelectIndicator>{indicator}</SelectIndicator>
                </SelectTrigger>
            </SelectControl>
            <Portal disabled={!isPortalled}>
                <SelectPositioner>
                    <SelectContent>{children}</SelectContent>
                </SelectPositioner>
            </Portal>
        </SelectRoot>
    );
}

export type SelectItemProperties = ComponentProps<typeof SelectItemRoot> & {
    readonly indicator?: React.ReactNode;
};

export function SelectItem({ children, indicator, ...rest }: SelectItemProperties) {
    return (
        <SelectItemRoot {...rest}>
            <SelectItemText>{children}</SelectItemText>
            <SelectItemIndicator>{indicator}</SelectItemIndicator>
        </SelectItemRoot>
    );
}
