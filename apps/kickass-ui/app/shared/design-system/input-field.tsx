import type { Assign } from "@ark-ui/react";
import { Field as ArkField } from "@ark-ui/react/field";

import { inputField, type InputFieldVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(inputField);

export type InputFieldRootProviderProperties = ComponentProps<typeof InputFieldRootProvider>;
export const InputFieldRootProvider = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkField.RootProviderBaseProps>, InputFieldVariantProps>
>(ArkField.RootProvider, "root");

export type InputFieldRootProperties = ComponentProps<typeof InputFieldRoot>;
export const InputFieldRoot = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkField.RootBaseProps>, InputFieldVariantProps>
>(ArkField.Root, "root");

export const InputFieldErrorText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkField.ErrorTextBaseProps>
>(ArkField.ErrorText, "errorText");

export const InputFieldHelperText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkField.HelperTextBaseProps>
>(ArkField.HelperText, "helperText");

export const InputFieldLabel = withContext<
    HTMLLabelElement,
    Assign<HTMLStyledProps<"label">, ArkField.LabelBaseProps>
>(ArkField.Label, "label");

export const InputFieldLabelContainer = withContext<HTMLDivElement, HTMLStyledProps<"div">>(
    "div",
    "labelContainer"
);

export { FieldContext as InputFieldContext } from "@ark-ui/react/field";

export type InputFieldProperties = Assign<
    InputFieldRootProperties,
    {
        label: React.ReactNode;
        helperText?: React.ReactNode | undefined;
        errorText?: React.ReactNode | undefined;
    }
>;

export function InputField({
    label,
    helperText,
    errorText,
    children,
    ...rest
}: InputFieldProperties) {
    return (
        <InputFieldRoot {...rest}>
            <InputFieldLabelContainer>
                <InputFieldLabel>{label}</InputFieldLabel>
            </InputFieldLabelContainer>
            {children}
            {helperText && <InputFieldHelperText>{helperText}</InputFieldHelperText>}{" "}
            {errorText && <InputFieldErrorText>{errorText}</InputFieldErrorText>}
        </InputFieldRoot>
    );
}
