import { styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const EmStyled = styled("em", typography, {
    defaultProps: {
        family: "serif",
        size: "inherit",
        style: "italic",
        type: "em",
    },
});

export type EmProperties = ComponentProps<typeof EmStyled>;

export function Em(properties: EmProperties) {
    return <EmStyled {...properties} />;
}
