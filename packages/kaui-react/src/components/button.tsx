import { ark } from "@ark-ui/react/factory";
import { styled } from "@kickass-coderz/kaui-react/system/jsx";
import { button } from "@kickass-coderz/kaui-react/system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/system/types";

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
