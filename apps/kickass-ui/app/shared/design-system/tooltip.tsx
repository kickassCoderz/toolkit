import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";

import { tooltip, type TooltipVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { Portal } from "./portal";
import { createStyleContext } from "./utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(tooltip);

export type TooltipRootProviderProperties = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
    Assign<ArkTooltip.RootProviderProps, TooltipVariantProps>
>(ArkTooltip.RootProvider);

export type TooltipRootProperties = ComponentProps<typeof TooltipRoot>;
export const TooltipRoot = withRootProvider<Assign<ArkTooltip.RootProps, TooltipVariantProps>>(
    ArkTooltip.Root
);

export const TooltipArrow = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTooltip.ArrowBaseProps>
>(ArkTooltip.Arrow, "arrow");

export const TooltipArrowTip = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTooltip.ArrowTipBaseProps>
>(ArkTooltip.ArrowTip, "arrowTip");

export const TooltipContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTooltip.ContentBaseProps>
>(ArkTooltip.Content, "content");

export const TooltipPositioner = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, ArkTooltip.PositionerBaseProps>
>(ArkTooltip.Positioner, "positioner");

export const TooltipTrigger = withContext<
    HTMLButtonElement,
    Assign<HTMLStyledProps<"button">, ArkTooltip.TriggerBaseProps>
>(ArkTooltip.Trigger, "trigger");

export { TooltipContext } from "@ark-ui/react/tooltip";

export type TooltipProperties = Assign<
    TooltipRootProperties,
    {
        asChild?: boolean | undefined;
        showArrow?: boolean | undefined;
        content?: React.ReactNode;
        isPortalled?: boolean | undefined;
    }
>;

export function Tooltip({
    asChild = true,
    showArrow = true,
    isPortalled = false,
    content,
    children,
    ...rest
}: TooltipProperties) {
    return (
        <TooltipRoot {...rest}>
            <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
            <Portal disabled={!isPortalled}>
                <TooltipPositioner>
                    <TooltipContent>
                        {showArrow && (
                            <TooltipArrow>
                                <TooltipArrowTip />
                            </TooltipArrow>
                        )}
                        {content}
                    </TooltipContent>
                </TooltipPositioner>
            </Portal>
        </TooltipRoot>
    );
}
