import { type HTMLStyledProps } from "~styled-system/jsx";
import { spinner, type SpinnerVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(spinner);

const SpinnerRootStyled = withProvider<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, SpinnerVariantProps>
>("span", "root");

type SpinnerRootStyledProperties = ComponentProps<typeof SpinnerRootStyled>;

const SpinnerLeafStyled = withContext<HTMLSpanElement, HTMLStyledProps<"span">>("span", "leaf");

export type SpinnerProperties = SpinnerRootStyledProperties;

export function Spinner(properties: SpinnerProperties) {
    return (
        <SpinnerRootStyled {...properties}>
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
            <SpinnerLeafStyled />
        </SpinnerRootStyled>
    );
}
