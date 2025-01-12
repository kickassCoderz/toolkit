import { css } from "~styled-system/css";
import { splitCssProps, styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const CodeStyled = styled("code", typography, {
    defaultProps: {
        family: "mono",
        size: "inherit",
        highContrast: false,
        type: "code",
        variant: "soft",
    },
});

export type CodeProperties = ComponentProps<typeof CodeStyled>;

export function Code(properties: CodeProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "accent" }, styleProperties, cssProperty);

    return <CodeStyled {...rest} css={styles} />;
}
