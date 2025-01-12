import { Field as ArkField } from "@ark-ui/react/field";
import { forwardRef } from "react";

import { splitCssProps } from "~styled-system/jsx";
import { textInput, type TextInputVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(textInput);

export type TextInputRootProperties = ComponentProps<typeof TextInputRoot>;

export const TextInputRoot = withProvider<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, TextInputVariantProps>
>("div", "root");

export type TextInputTextInputProperties = ComponentProps<typeof TextInputInput>;

export const TextInputInput = withContext<HTMLInputElement, HTMLStyledProps<"input">>(
    ArkField.Input,
    "input"
);

export const TextInputSlot = withContext<HTMLSpanElement, HTMLStyledProps<"span">>("span", "slot");

export type TextInputProperties = Assign<
    Assign<TextInputTextInputProperties, TextInputVariantProps>,
    {
        slotLeft?: React.ReactNode;
        slotRight?: React.ReactNode;
    }
>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProperties>(
    (properties, reference) => {
        const [cssProperties, otherProperties] = splitCssProps(properties);
        const [variantProperties, { slotLeft, slotRight, ...TextInputProperties }] =
            textInput.splitVariantProps(otherProperties);

        return (
            <TextInputRoot {...variantProperties} {...cssProperties}>
                {slotLeft && <TextInputSlot>{slotLeft}</TextInputSlot>}
                <TextInputInput ref={reference} {...TextInputProperties} />
                {slotRight && <TextInputSlot>{slotRight}</TextInputSlot>}
            </TextInputRoot>
        );
    }
);

TextInput.displayName = "TextInput";
