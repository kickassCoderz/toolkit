import type { Prettify } from "@kickass-coderz/typescript-utils";
import { cloneElement, createElement, isValidElement } from "react";

export type SlotableComponentProperties<Tag extends keyof React.JSX.IntrinsicElements> = Readonly<
    React.JSX.IntrinsicElements[Tag] & {
        render?:
            | ((
                  properties: Prettify<Omit<SlotableComponentProperties<Tag>, "render">>
              ) => React.ReactNode)
            | React.JSX.Element
            | undefined;
    }
>;

export type SlotableComponent<
    Tag extends keyof React.JSX.IntrinsicElements = keyof React.JSX.IntrinsicElements,
> = {
    (properties: Readonly<SlotableComponentProperties<Tag>>): React.JSX.Element | React.ReactNode;
    displayName?: string;
};

export function createSlotable<
    Tag extends keyof React.JSX.IntrinsicElements = keyof React.JSX.IntrinsicElements,
>(tag: Tag) {
    const SlotableTag = tag;

    const Slotable: SlotableComponent<Tag> = (properties) => {
        const { children, render, ...rest } = properties;

        if (isValidElement(render)) {
            return cloneElement(render, rest, children);
        }

        if (typeof render === "function") {
            return render(properties);
        }

        return createElement(SlotableTag, rest, children);
    };

    Slotable.displayName = `Slotable${tag.charAt(0).toUpperCase() + tag.slice(1)}`;

    return Slotable;
}
