import type { DocumentationCollection } from "~site-content";

export type SidebarDocumentationNaviagationData = Array<
    [
        string,
        Array<{
            label: string;
            slug: string;
        }>,
    ]
>;

export function createSidebarDocumentationNaviagationData(
    documentationCollection: Array<DocumentationCollection>
): SidebarDocumentationNaviagationData {
    const groupedByCategory = Object.groupBy(
        documentationCollection,
        (documentationItem) => documentationItem.category
    );

    const categoryOrder = ["Overview", "Theme", "Components"];

    const entriesSortedByCategory = Object.entries(groupedByCategory).toSorted(([a], [b]) => {
        return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
    }) as Array<[string, Array<DocumentationCollection>]>;

    const sorted: Array<[string, Array<DocumentationCollection>]> = entriesSortedByCategory.map(
        (entry) => [
            entry[0],
            entry[1].sort((a, b) => {
                if (a.order && b.order) {
                    return a.order - b.order;
                }

                return a.sidebarLabel.localeCompare(b.sidebarLabel);
            }),
        ]
    );

    return sorted.map((entries) => [
        entries[0],
        entries[1].map((item) => ({ label: item.sidebarLabel, slug: item.slug })),
    ]);
}
