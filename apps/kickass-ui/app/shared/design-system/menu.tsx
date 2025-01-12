import type { Assign } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { menu, type MenuVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { Portal } from "./portal";
import { createStyleContext } from "./utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(menu);

export type RootProviderProperties = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<Assign<ArkMenu.RootProviderProps, MenuVariantProps>>(
    ArkMenu.RootProvider
);

export type MenuRootProperties = ComponentProps<typeof MenuRoot>;
export const MenuRoot = withRootProvider<Assign<ArkMenu.RootProps, MenuVariantProps>>(ArkMenu.Root);

export const MenuArrow = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ArrowBaseProps>
>(ArkMenu.Arrow, "arrow");

export const MenuArrowTip = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ArrowTipBaseProps>
>(ArkMenu.ArrowTip, "arrowTip");

export const MenuCheckboxItem = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.CheckboxItemBaseProps>
>(ArkMenu.CheckboxItem, "item");

export const MenuContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ContentBaseProps>
>(ArkMenu.Content, "content");

export const MenuContextTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkMenu.ContextTriggerBaseProps>
>(ArkMenu.ContextTrigger, "contextTrigger");

export const MenuIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.IndicatorBaseProps>
>(ArkMenu.Indicator, "indicator");

export const MenuItemGroupLabel = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ItemGroupLabelBaseProps>
>(ArkMenu.ItemGroupLabel, "itemGroupLabel");

export const MenuItemGroup = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ItemGroupBaseProps>
>(ArkMenu.ItemGroup, "itemGroup");

export const MenuItemIndicator = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ItemIndicatorBaseProps>
>(ArkMenu.ItemIndicator, "itemIndicator");

export type MenuItemRootProperties = ComponentProps<typeof MenuItemRoot>;
export const MenuItemRoot = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ItemBaseProps>
>(ArkMenu.Item, "item");

export const MenuItemText = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.ItemTextBaseProps>
>(ArkMenu.ItemText, "itemText");

export const MenuPositioner = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.PositionerBaseProps>
>(ArkMenu.Positioner, "positioner");

export const MenuRadioItemGroup = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.RadioItemGroupBaseProps>
>(ArkMenu.RadioItemGroup, "itemGroup");

export const MenuRadioItem = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.RadioItemBaseProps>
>(ArkMenu.RadioItem, "item");

export const MenuSeparator = withContext<
    HTMLHRElement,
    Assign<HTMLStyledProps<"hr">, ArkMenu.SeparatorBaseProps>
>(ArkMenu.Separator, "separator");

export const MenuTriggerItem = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkMenu.TriggerItemBaseProps>
>(ArkMenu.TriggerItem, "triggerItem");

export const MenuTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkMenu.TriggerBaseProps>
>(ArkMenu.Trigger, "trigger");

export { MenuContext } from "@ark-ui/react/menu";

type MenuProperties = MenuRootProperties & {
    readonly isPortalled?: boolean | undefined;
    readonly trigger: React.JSX.Element;
};

export function Menu({ isPortalled = true, trigger, children, ...rest }: MenuProperties) {
    return (
        <MenuRoot {...rest}>
            <MenuTrigger asChild>{trigger}</MenuTrigger>
            <Portal disabled={!isPortalled}>
                <MenuPositioner>
                    <MenuContent>{children}</MenuContent>
                </MenuPositioner>
            </Portal>
        </MenuRoot>
    );
}

export function MenuItem({ children, ...rest }: MenuItemRootProperties) {
    return <MenuItemRoot {...rest}>{children}</MenuItemRoot>;
}
