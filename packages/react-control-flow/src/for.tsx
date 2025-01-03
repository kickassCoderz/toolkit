export type ForProperties<
    T extends string | number | boolean | Record<string, unknown> | Array<unknown> | undefined,
> = {
    each: Array<T> | ReadonlyArray<T> | undefined;
    fallback?: React.ReactNode | undefined;
    children: (item: T, index: number) => React.ReactNode;
};

export function For<
    T extends string | number | Record<string, unknown> | Array<unknown> | undefined,
>(properties: ForProperties<T>) {
    if (!properties.each || properties.each.length === 0) {
        return properties.fallback;
    }

    return properties.each.map((item, index) => properties.children(item, index));
}
