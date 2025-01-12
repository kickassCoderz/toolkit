import { styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const QuoteStyled = styled("q", typography, {
    defaultProps: {
        family: "serif",
        size: "inherit",
        style: "italic",
        type: "quote",
    },
});

export type QuoteProperties = ComponentProps<typeof QuoteStyled>;

export function Quote(properties: QuoteProperties) {
    return <QuoteStyled {...properties} />;
}
