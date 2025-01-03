import { css } from "~styled-system/css";
import { splitCssProps, styled } from "~styled-system/jsx";
import { typography, type TypographyVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, StyledComponent } from "~styled-system/types";

type PolymorphicHeadingProperties = Assign<TypographyVariantProps, { as?: React.ElementType }>;

const HeadingStyled = styled("h1", typography, {
    defaultProps: {
        highContrast: true,
        family: "sans",
        weight: "bold",
        size: "4xl",
        variant: "plain",
    },
}) as StyledComponent<"h1", PolymorphicHeadingProperties>;

export type HeadingProperties = ComponentProps<typeof HeadingStyled>;

export function Heading(properties: HeadingProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "neutral" }, styleProperties, cssProperty);

    return <HeadingStyled {...rest} css={styles} />;
}
