import { css } from "~styled-system/css";
import { splitCssProps, styled } from "~styled-system/jsx";
import { typography } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

const KbdStyled = styled("kbd", typography, {
    defaultProps: {
        family: "mono",
        type: "kbd",
        wrap: "nowrap",
        select: "none",
    },
});

export type KbdProperties = ComponentProps<typeof KbdStyled>;

export function Kbd(properties: KbdProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "neutral" }, styleProperties, cssProperty);

    return <KbdStyled {...rest} css={styles} />;
}
