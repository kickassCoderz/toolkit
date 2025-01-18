import { hstack, stack } from "~styled-system/patterns";

type NavigationSectionProperties = Readonly<{
    children: React.ReactNode;
}>;

export function NavigationSection({ children }: NavigationSectionProperties) {
    return <section className={stack({ gap: "2" })}>{children}</section>;
}

type NavigationSectionHeaderProperties = Readonly<{
    children: React.ReactNode;
}>;

export function NavigationSectionHeader({ children }: NavigationSectionHeaderProperties) {
    return <div className={hstack({ paddingX: "3" })}>{children}</div>;
}

type NavigationSectionListProperties = Readonly<{
    children: React.ReactNode;
}>;

export function NavigationSectionList({ children }: NavigationSectionListProperties) {
    return <ol className={stack({ gap: "1" })}>{children}</ol>;
}

type NavigationSectionListItemProperties = Readonly<{
    children: React.ReactNode;
}>;

export function NavigationSectionListItem({ children }: NavigationSectionListItemProperties) {
    return <li>{children}</li>;
}
