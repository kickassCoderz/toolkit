import { ark } from "@ark-ui/react/factory";

import { styled } from "~styled-system/jsx";
import { button } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export const Button = styled(ark.button, button, {
    defaultProps: {
        size: "sm",
        variant: "solid",
        radius: "rounded",
        highContrast: false,
        fullWidth: false,
        justify: "center",
    },
});

export type ButtonProperties = ComponentProps<typeof Button>;
