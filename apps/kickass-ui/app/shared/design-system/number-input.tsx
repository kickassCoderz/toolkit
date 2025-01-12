import type { Assign } from "@ark-ui/react";
import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";

import { numberInput, type NumberInputVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(numberInput);

export type NumberInputRootProviderProperties = ComponentProps<typeof NumberInputRootProvider>;
export const NumberInputRootProvider = withProvider<
    HTMLDivElement,
    Assign<
        Assign<HTMLStyledProps<"div">, ArkNumberInput.RootProviderBaseProps>,
        NumberInputVariantProps
    >
>(ArkNumberInput.RootProvider, "root");

export type NumberInputRootProperties = ComponentProps<typeof NumberInputRoot>;
export const NumberInputRoot = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkNumberInput.RootBaseProps>, NumberInputVariantProps>
>(ArkNumberInput.Root, "root");

export const NumberInputControl = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkNumberInput.ControlBaseProps>
>(ArkNumberInput.Control, "control");

export const NumberInputDecrementTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkNumberInput.DecrementTriggerBaseProps>
>(ArkNumberInput.DecrementTrigger, "decrementTrigger");

export const NumberInputIncrementTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkNumberInput.IncrementTriggerBaseProps>
>(ArkNumberInput.IncrementTrigger, "incrementTrigger");

export const NumberInputInput = withContext<
    HTMLInputElement,
    Assign<HTMLStyledProps<"input">, ArkNumberInput.InputBaseProps>
>(ArkNumberInput.Input, "input");

export const NumberInputLabel = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkNumberInput.LabelBaseProps>
>(ArkNumberInput.Label, "label");

export const NumberInputScrubber = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkNumberInput.ScrubberBaseProps>
>(ArkNumberInput.Scrubber, "scrubber");

export const NumberInputValueText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkNumberInput.ValueTextBaseProps>
>(ArkNumberInput.ValueText, "valueText");

export { NumberInputContext } from "@ark-ui/react/number-input";

export type NumberInputProperties = NumberInputRootProperties & {
    readonly incrementIndicator?: React.ReactNode;
    readonly decrementIndicator?: React.ReactNode;
};

export function NumberInput({
    children,
    incrementIndicator,
    decrementIndicator,
    ...rest
}: NumberInputProperties) {
    return (
        <NumberInputRoot {...rest}>
            {children}
            <NumberInputControl>
                <NumberInputIncrementTrigger>{incrementIndicator}</NumberInputIncrementTrigger>
                <NumberInputDecrementTrigger>{decrementIndicator}</NumberInputDecrementTrigger>
            </NumberInputControl>
        </NumberInputRoot>
    );
}

NumberInput.Input = NumberInputInput;
