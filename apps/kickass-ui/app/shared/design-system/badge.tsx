import { ark } from "@ark-ui/react/factory";

import { styled } from "~styled-system/jsx";
import { badge } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export const Badge = styled(ark.span, badge, {
    defaultProps: {
        size: "xs",
        variant: "soft",
        radius: "rounded",
    },
});

export type BadgeProperties = ComponentProps<typeof Badge>;
