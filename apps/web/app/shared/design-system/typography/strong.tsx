import { styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const StrongStyled = styled("strong", typography, {
    defaultProps: {
        family: "inherit",
        size: "inherit",
        weight: "bold",
    },
});

export type StrongProperties = ComponentProps<typeof StrongStyled>;

export function Strong(properties: StrongProperties) {
    return <StrongStyled {...properties} />;
}
