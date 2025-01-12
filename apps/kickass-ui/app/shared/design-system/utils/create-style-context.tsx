import {
    createContext,
    type ElementType,
    forwardRef,
    type ForwardRefExoticComponent,
    type PropsWithoutRef,
    type RefAttributes,
    useContext,
} from "react";

import { cx } from "~styled-system/css";
import { isCssProperty, styled, type StyledComponent } from "~styled-system/jsx";

type Properties = Record<string, unknown>;
type Recipe = {
    (properties?: Properties): Properties;
    splitVariantProps: (properties: Properties) => [Properties, Properties];
};
type Slot<R extends Recipe> = keyof ReturnType<R>;
type Options = { forwardProps?: Array<string> };

const shouldForwardProperty = (
    property: string,
    variantKeys: Array<string>,
    options: Options = {}
) =>
    options.forwardProps?.includes(property) ??
    (!variantKeys.includes(property) && !isCssProperty(property));

export const createStyleContext = <R extends Recipe>(recipe: R) => {
    const StyleContext = createContext<Record<Slot<R>, string> | undefined>(undefined);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- @TODO: Refactor this
    const withRootProvider = <P extends Record<string, unknown>>(Component: ElementType) => {
        const StyledComponent = (properties: P) => {
            const [variantProperties, otherProperties] = recipe.splitVariantProps(properties);
            const slotStyles = recipe(variantProperties) as Record<Slot<R>, string>;

            return (
                <StyleContext.Provider value={slotStyles}>
                    <Component {...otherProperties} />
                </StyleContext.Provider>
            );
        };
        return StyledComponent;
    };

    const withProvider = <T, P extends { className?: string | undefined }>(
        Component: ElementType,
        slot: Slot<R>,
        options?: Options
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
        const StyledComponent = styled(
            Component,
            {},
            {
                shouldForwardProp: (property, variantKeys) =>
                    shouldForwardProperty(property, variantKeys, options),
            }
        ) as StyledComponent<ElementType>;
        const StyledSlotProvider = forwardRef<T, P>((properties, reference) => {
            const [variantProperties, otherProperties] = recipe.splitVariantProps(properties);
            const slotStyles = recipe(variantProperties) as Record<Slot<R>, string>;

            return (
                <StyleContext.Provider value={slotStyles}>
                    <StyledComponent
                        {...otherProperties}
                        ref={reference}
                        className={cx(slotStyles[slot], properties.className)}
                    />
                </StyleContext.Provider>
            );
        });
        // @ts-expect-error -- TODO: Fix this
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        StyledSlotProvider.displayName = Component.displayName || Component.name;

        return StyledSlotProvider;
    };

    const withContext = <T, P extends { className?: string | undefined }>(
        Component: ElementType,
        slot: Slot<R>
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> => {
        const StyledComponent = styled(Component);
        const StyledSlotComponent = forwardRef<T, P>((properties, reference) => {
            const slotStyles = useContext(StyleContext);
            return (
                <StyledComponent
                    {...properties}
                    ref={reference}
                    className={cx(slotStyles?.[slot], properties.className)}
                />
            );
        });
        // @ts-expect-error -- TODO: Fix this
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        StyledSlotComponent.displayName = Component.displayName || Component.name;

        return StyledSlotComponent;
    };

    return {
        withRootProvider,
        withProvider,
        withContext,
    };
};
