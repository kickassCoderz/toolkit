import type { Assign } from "@ark-ui/react";
import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { switchRecipe, type SwitchRecipeVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export type SwitchRootProviderProperties = ComponentProps<typeof SwitchRootProvider>;
export const SwitchRootProvider = withProvider<
    HTMLLabelElement,
    Assign<
        Assign<HTMLStyledProps<"label">, ArkSwitch.RootProviderBaseProps>,
        SwitchRecipeVariantProps
    >
>(ArkSwitch.RootProvider, "root");

export type SwitchRootProperties = ComponentProps<typeof SwitchRoot>;
export const SwitchRoot = withProvider<
    HTMLLabelElement,
    Assign<Assign<HTMLStyledProps<"label">, ArkSwitch.RootBaseProps>, SwitchRecipeVariantProps>
>(ArkSwitch.Root, "root");

export const SwitchControl = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkSwitch.ControlBaseProps>
>(ArkSwitch.Control, "control");

export const SwitchLabel = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkSwitch.LabelBaseProps>
>(ArkSwitch.Label, "label");

export const SwitchThumb = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkSwitch.ThumbBaseProps>
>(ArkSwitch.Thumb, "thumb");

export { SwitchContext, SwitchHiddenInput } from "@ark-ui/react/switch";

export type SwitchProperties = Readonly<SwitchRootProperties>;

export function Switch({ children, ...rest }: SwitchProperties) {
    return (
        <SwitchRoot {...rest}>
            <SwitchControl>
                <SwitchThumb />
            </SwitchControl>
            {children && <SwitchLabel>{children}</SwitchLabel>}
            <ArkSwitch.HiddenInput />
        </SwitchRoot>
    );
}
