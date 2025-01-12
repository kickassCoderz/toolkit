import type { Assign, PolymorphicProps } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";

import { drawer, type DrawerVariantProps } from "~styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { Portal } from "./portal";
import { createStyleContext } from "./utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(drawer);

export type DrawerRootProviderProperties = ComponentProps<typeof DrawerRootProvider>;
export const DrawerRootProvider = withRootProvider<
    Assign<ArkDialog.RootProviderBaseProps, DrawerVariantProps>
>(ArkDialog.RootProvider);

export type DrawerRootProperties = ComponentProps<typeof DrawerRoot>;
export const DrawerRoot = withRootProvider<Assign<ArkDialog.RootProps, DrawerVariantProps>>(
    ArkDialog.Root
);

export const DrawerBackdrop = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkDialog.BackdropBaseProps>
>(ArkDialog.Backdrop, "backdrop");

export const DrawerContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkDialog.ContentBaseProps>
>(ArkDialog.Content, "content");

export const DrawerHeader = withContext<
    HTMLElement,
    Assign<HTMLStyledProps<"header">, PolymorphicProps>
>(ark.header, "header");

export const DrawerBody = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "body");

export const DrawerFooter = withContext<
    HTMLElement,
    Assign<HTMLStyledProps<"footer">, PolymorphicProps>
>(ark.footer, "footer");

export const DrawerDescription = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkDialog.DescriptionBaseProps>
>(ArkDialog.Description, "description");

export const DrawerPositioner = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkDialog.PositionerBaseProps>
>(ArkDialog.Positioner, "positioner");

export const DrawerTitle = withContext<
    HTMLHeadingElement,
    Assign<HTMLStyledProps<"h2">, ArkDialog.TitleBaseProps>
>(ArkDialog.Title, "title");

export const DrawerTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkDialog.TriggerBaseProps>
>(ArkDialog.Trigger, "trigger");

export const DrawerCloseTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkDialog.CloseTriggerBaseProps>
>(ArkDialog.CloseTrigger, "closeTrigger");

export {
    DialogContext as DrawerContext,
    type DialogContextProps as DrawerContextProps,
} from "@ark-ui/react/dialog";

export type DrawerProperties = Readonly<
    DrawerRootProperties & {
        trigger: React.JSX.Element;
        isPortalled?: boolean | undefined;
        showBackdrop?: boolean | undefined;
    }
>;

export function Drawer({
    children,
    trigger,
    isPortalled = true,
    showBackdrop = true,
    ...rest
}: DrawerProperties) {
    return (
        <DrawerRoot {...rest}>
            <DrawerTrigger asChild>{trigger}</DrawerTrigger>
            <Portal disabled={!isPortalled}>
                {showBackdrop && <DrawerBackdrop />}
                <DrawerPositioner>
                    <DrawerContent asChild>
                        <aside>{children}</aside>
                    </DrawerContent>
                </DrawerPositioner>
            </Portal>
        </DrawerRoot>
    );
}
