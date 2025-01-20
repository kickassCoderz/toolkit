import { ark } from "@ark-ui/react/factory";
import { styled } from "@kickass-coderz/kaui-react/system/jsx";
import { icon } from "@kickass-coderz/kaui-react/system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/system/types";

export const Icon = styled(ark.svg, icon, {
    defaultProps: {
        asChild: true,
    },
});

export type IconProperties = ComponentProps<typeof Icon>;
