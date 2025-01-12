import { ark } from "@ark-ui/react/factory";

import { styled } from "~styled-system/jsx";
import { iconButton } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export const IconButton = styled(ark.button, iconButton, {
    defaultProps: {
        size: "sm",
        variant: "solid",
        radius: "rounded",
        highContrast: false,
    },
});

export type ButtonProperties = ComponentProps<typeof IconButton>;
