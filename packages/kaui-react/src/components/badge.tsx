import { ark } from "@ark-ui/react/factory";
import { styled } from "@kickass-coderz/kaui-react/system/jsx";
import { badge } from "@kickass-coderz/kaui-react/system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/system/types";

export const Badge = styled(ark.span, badge, {
    defaultProps: {
        size: "xs",
        variant: "soft",
        radius: "rounded",
    },
});

export type BadgeProperties = ComponentProps<typeof Badge>;
