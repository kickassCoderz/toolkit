export type ShowProperties = {
    when: boolean;
    children: React.ReactNode;
    fallback?: React.ReactNode | undefined;
};

export function Show(properties: ShowProperties): React.ReactNode {
    if (properties.when) {
        return properties.children;
    }

    if (properties.fallback) {
        return properties.fallback;
    }

    return undefined;
}
