import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";

import { css } from "~styled-system/css";
import { splitCssProps } from "~styled-system/jsx";
import { avatar, type AvatarVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(avatar);

export type AvatarRootProviderProperties = ComponentProps<typeof AvatarRootProvider>;

export const AvatarRootProvider = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkAvatar.RootProviderBaseProps>, AvatarVariantProps>
>(ArkAvatar.RootProvider, "root");

export type AvatarRootProperties = ComponentProps<typeof AvatarRootStyled>;
const AvatarRootStyled = withProvider<
    HTMLDivElement,
    Assign<Assign<HTMLStyledProps<"div">, ArkAvatar.RootBaseProps>, AvatarVariantProps>
>(ArkAvatar.Root, "root");

export function AvatarRoot(properties: AvatarRootProperties) {
    const [cssProperties, rest] = splitCssProps(properties);
    const { css: cssProperty, ...styleProperties } = cssProperties;
    const styles = css.raw({ colorPalette: "neutral" }, styleProperties, cssProperty);

    return <AvatarRootStyled {...rest} css={styles} />;
}

export const AvatarFallback = withContext<
    HTMLSpanElement,
    Assign<HTMLStyledProps<"span">, ArkAvatar.FallbackBaseProps>
>(ArkAvatar.Fallback, "fallback");

export const AvatarImage = withContext<
    HTMLImageElement,
    Assign<HTMLStyledProps<"img">, ArkAvatar.ImageBaseProps>
>(ArkAvatar.Image, "image");

export type { AvatarStatusChangeDetails } from "@ark-ui/react/avatar";
export { AvatarContext } from "@ark-ui/react/avatar";

type AvatarProperties = Readonly<
    AvatarRootProperties & {
        name?: string | undefined;
        src?: string | undefined;
        initials?: string | undefined;
        icon?: React.ReactNode | undefined;
    }
>;

export function Avatar({ name, src, initials, icon, ...rest }: AvatarProperties) {
    return (
        <AvatarRoot {...rest}>
            <AvatarFallback>{initials ?? icon}</AvatarFallback>
            <AvatarImage src={src} alt={name} />
        </AvatarRoot>
    );
}
