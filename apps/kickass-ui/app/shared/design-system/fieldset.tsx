import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Fieldset as ArkFieldset } from "@ark-ui/react/fieldset";

import { fieldset, type FieldsetVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(fieldset);

export type FieldsetRootProviderProperties = ComponentProps<typeof FieldsetRootProvider>;
export const FieldsetRootProvider = withProvider<
    HTMLFieldSetElement,
    Assign<
        Assign<HTMLStyledProps<"fieldset">, ArkFieldset.RootProviderBaseProps>,
        FieldsetVariantProps
    >
>(ArkFieldset.Root, "root");

export type FieldsetRootProperties = ComponentProps<typeof FieldsetRoot>;
export const FieldsetRoot = withProvider<
    HTMLFieldSetElement,
    Assign<Assign<HTMLStyledProps<"fieldset">, ArkFieldset.RootBaseProps>, FieldsetVariantProps>
>(ArkFieldset.Root, "root");

export const FieldsetErrorText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkFieldset.ErrorTextBaseProps>
>(ArkFieldset.ErrorText, "errorText");

export const FieldsetHelperText = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkFieldset.HelperTextBaseProps>
>(ArkFieldset.HelperText, "helperText");

export const FieldsetLegend = withContext<
    HTMLLegendElement,
    Assign<HTMLStyledProps<"legend">, ArkFieldset.LegendBaseProps>
>(ArkFieldset.Legend, "legend");

export const FieldsetLegendContainer = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "legendContainer");

export const FieldsetContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "content");

export { FieldsetContext } from "@ark-ui/react/fieldset";

export type FieldsetProperties = Assign<
    FieldsetRootProperties,
    {
        legend: React.ReactNode;
        helperText?: React.ReactNode;
        errorText?: React.ReactNode;
        children: React.ReactNode;
    }
>;

export function Fieldset({
    children,
    legend,
    helperText,
    errorText,

    ...rest
}: FieldsetProperties) {
    return (
        <FieldsetRoot {...rest}>
            <FieldsetLegendContainer>
                <FieldsetLegend>{legend}</FieldsetLegend>
                <FieldsetHelperText>{helperText}</FieldsetHelperText>
            </FieldsetLegendContainer>
            <FieldsetContent>{children}</FieldsetContent>
            <FieldsetErrorText>{errorText}</FieldsetErrorText>
        </FieldsetRoot>
    );
}
