import { ark } from "@ark-ui/react/factory";
import { isValidElement } from "react";

import { styled } from "~styled-system/jsx";
import { skeleton } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const SkeletonStyled = styled(ark.span, skeleton, {
    defaultProps: {
        isLoading: true,
        variant: "pulse",
    },
});

export type SkeletonProperties = ComponentProps<typeof SkeletonStyled>;

export function Skeleton({ children, ...rest }: SkeletonProperties) {
    const isElement = isValidElement(children);

    return (
        <SkeletonStyled
            asChild={isElement}
            data-inline-skeleton={isElement ? "" : undefined}
            aria-hidden="true"
            tabIndex={-1}
            {...rest}
        >
            {children}
        </SkeletonStyled>
    );
}
