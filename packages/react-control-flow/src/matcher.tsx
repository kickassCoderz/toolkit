export type MatchProperties = {
    when: boolean;
    children: React.ReactNode;
};

export function Match(properties: MatchProperties) {
    return properties.children;
}

function resolveMatcherChild(child: React.ReactElement<MatchProperties>) {
    return child.props.when ? child.props.children : undefined;
}

function resolveMatcherChildArray(children: Array<React.ReactElement<MatchProperties>>) {
    return children.map((child) => resolveMatcherChild(child));
}

function resolveMatcherChildren(
    children?: React.ReactElement<MatchProperties> | Array<React.ReactElement<MatchProperties>>
) {
    if (!children) {
        return;
    }

    return Array.isArray(children)
        ? resolveMatcherChildArray(children)
        : resolveMatcherChild(children);
}

export type MatcherProperties = {
    children: React.ReactElement<MatchProperties> | Array<React.ReactElement<MatchProperties>>;
    fallback?: React.ReactNode | undefined;
};

export function Matcher(properties: MatcherProperties) {
    const match = resolveMatcherChildren(properties.children);

    return match ?? properties.fallback;
}
