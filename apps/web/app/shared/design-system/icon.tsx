import { ark } from "@ark-ui/react/factory";
import { forwardRef } from "react";

import { type HTMLStyledProps as HTMLStyledProperties, styled } from "~styled-system/jsx";
import { icon, type IconVariantProps } from "~styled-system/recipes";
import type { Assign } from "~styled-system/types";

const StyledIcon = styled(ark.svg, icon);

export type IconProperties = Readonly<Assign<HTMLStyledProperties<"svg">, IconVariantProps>>;

export const Icon = forwardRef<SVGSVGElement, IconProperties>(
    ({ children, ...rest }, reference) => {
        return (
            <StyledIcon ref={reference} asChild {...rest}>
                {children}
            </StyledIcon>
        );
    }
);

Icon.displayName = "Icon";
