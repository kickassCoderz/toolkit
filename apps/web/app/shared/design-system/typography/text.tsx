import { css } from "~styled-system/css";
import { splitCssProps, styled } from "~styled-system/jsx";
import { typography, type TypographyVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, StyledComponent } from "~styled-system/types";

type PolymorphicTextProperties = Assign<TypographyVariantProps, { as?: React.ElementType }>;

const TextStyled = styled("p", typography, {
    defaultProps: {
        highContrast: true,
        family: "sans",
        weight: "regular",
        size: "md",
        variant: "plain",
    },
}) as StyledComponent<"p", PolymorphicTextProperties>;

export type TextProperties = ComponentProps<typeof TextStyled>;

export function Text(properties: TextProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "neutral" }, styleProperties, cssProperty);

    return <TextStyled {...rest} css={styles} />;
}
