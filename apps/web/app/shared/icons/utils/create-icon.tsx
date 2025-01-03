import { forwardRef, type ReactNode, type SVGProps } from "react";

export type IconComponentProperties = Omit<SVGProps<SVGSVGElement>, "children">;

type CreateIconOptions = {
    name: string;
    defaultProperties?: IconComponentProperties;
};

const DEFAULT_PROPERTIES = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
} satisfies IconComponentProperties;

export function createIcon(iconBody: ReactNode, options: CreateIconOptions) {
    const resolvedDefaultProperties = { ...DEFAULT_PROPERTIES, ...options.defaultProperties };

    const IconComponent = forwardRef<SVGSVGElement, IconComponentProperties>(
        (properties, reference) => {
            return (
                <svg ref={reference} {...resolvedDefaultProperties} {...properties}>
                    {iconBody}
                </svg>
            );
        }
    );

    IconComponent.displayName = options.name;

    return IconComponent;
}
