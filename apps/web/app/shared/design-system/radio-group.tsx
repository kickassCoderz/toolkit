import type { Assign } from "@ark-ui/react";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { radioGroup, type RadioGroupVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(radioGroup);

export type RadioGroupRootProviderProperties = ComponentProps<typeof RadioGroupRootProvider>;
export const RadioGroupRootProvider = withProvider<
    HTMLDivElement,
    Assign<
        Assign<HTMLStyledProps<"div">, ArkRadioGroup.RootProviderBaseProps>,
        RadioGroupVariantProps
    >
>(ArkRadioGroup.RootProvider, "root");

export type RadioGroupRootProperties = ComponentProps<typeof RadioGroupRoot>;
export const RadioGroupRoot = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkRadioGroup.RootBaseProps>, RadioGroupVariantProps>
>(ArkRadioGroup.Root, "root");

export const RadioGroupIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkRadioGroup.IndicatorBaseProps>
>(ArkRadioGroup.Indicator, "indicator");

export const RadioGroupItemControl = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkRadioGroup.ItemControlBaseProps>
>(ArkRadioGroup.ItemControl, "itemControl");

export type RadioGroupItemRootProperties = ComponentProps<typeof RadioGroupItemRoot>;
export const RadioGroupItemRoot = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkRadioGroup.ItemBaseProps>
>(ArkRadioGroup.Item, "item");

export const RadioGroupItemText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkRadioGroup.ItemTextBaseProps>
>(ArkRadioGroup.ItemText, "itemText");

export const RadioGroupLabel = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkRadioGroup.LabelBaseProps>
>(ArkRadioGroup.Label, "label");

export { RadioGroupContext, RadioGroupItemHiddenInput } from "@ark-ui/react/radio-group";

export type RadioGroupProperties = RadioGroupRootProperties;

export function RadioGroup({ children, ...rest }: RadioGroupProperties) {
    return <RadioGroupRoot {...rest}>{children}</RadioGroupRoot>;
}

export type RadioItemProperties = RadioGroupItemRootProperties;

export function RadioGroupItem({ children, ...rest }: RadioItemProperties) {
    return (
        <RadioGroupItemRoot {...rest}>
            <RadioGroupItemControl />
            <RadioGroupItemText>{children}</RadioGroupItemText>
            <ArkRadioGroup.ItemHiddenInput />
        </RadioGroupItemRoot>
    );
}
