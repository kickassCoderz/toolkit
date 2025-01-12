import { Show } from "@kickass-coderz/react-control-flow/show";

import { callout, type CalloutVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(callout);

export type CalloutRootProperties = ComponentProps<typeof CalloutRoot>;
const CalloutRoot = withProvider<
    HTMLDivElement,
    Assign<HTMLStyledProps<"section">, CalloutVariantProps>
>("section", "root");

export const CalloutContent = withContext<HTMLDivElement, HTMLStyledProps<"div">>("div", "content");

export const CalloutDescription = withContext<HTMLParagraphElement, HTMLStyledProps<"p">>(
    "p",
    "description"
);

export const CalloutIcon = withContext<HTMLSpanElement, HTMLStyledProps<"span">>("span", "icon");

export const CalloutTitle = withContext<HTMLHeadingElement, HTMLStyledProps<"h2">>("h2", "title");

type CalloutProperties = Readonly<
    CalloutRootProperties & {
        icon?: React.ReactNode;
        title: React.ReactNode;
    }
>;

export function Callout({ icon, title, children, ...rest }: CalloutProperties) {
    return (
        <CalloutRoot {...rest}>
            <Show when={!!icon}>
                <CalloutIcon>{icon}</CalloutIcon>
            </Show>
            <CalloutContent>
                <CalloutTitle>{title}</CalloutTitle>
                <Show when={!!children}>
                    <CalloutDescription>{children}</CalloutDescription>
                </Show>
            </CalloutContent>
        </CalloutRoot>
    );
}
