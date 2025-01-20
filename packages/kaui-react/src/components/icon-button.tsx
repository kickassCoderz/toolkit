import { ark } from "@ark-ui/react/factory";
import { styled } from "@kickass-coderz/kaui-react/system/jsx";
import { iconButton } from "@kickass-coderz/kaui-react/system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/system/types";

export const IconButton = styled(ark.button, iconButton, {
    defaultProps: {
        size: "sm",
        variant: "solid",
        radius: "rounded",
        highContrast: false,
    },
});

export type IconButtonProperties = ComponentProps<typeof IconButton>;
