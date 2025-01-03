import { ark } from "@ark-ui/react/factory";

import { css } from "~styled-system/css";
import { splitCssProps, styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const LinkStyled = styled(ark.a, typography, {
    defaultProps: {
        family: "sans",
        size: "inherit",
        highContrast: false,
        underline: "hover",
        variant: "plain",
    },
});

export type LinkProperties = ComponentProps<typeof LinkStyled>;

export function Link(properties: LinkProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "accent" }, styleProperties, cssProperty);

    return <LinkStyled {...rest} css={styles} />;
}
