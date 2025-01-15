type TocEntry = {
    /**
     * Title of the entry
     */
    title: string;
    /**
     * URL that can be used to reach
     * the content
     */
    url: string;
    /**
     * Nested items
     */
    items: Array<TocEntry>;
};

type TocItem = Readonly<
    Omit<TocEntry, "items"> & {
        depth: number;
    }
>;

export function createDocumentationTocData(entries: Array<TocEntry>, depth = 0): Array<TocItem> {
    const flattenedTocStack: Array<TocItem> = [];

    for (const entry of entries) {
        flattenedTocStack.push({
            title: entry.title,
            url: entry.url,
            depth,
        });
        if (entry.items.length > 0) {
            flattenedTocStack.push(...createDocumentationTocData(entry.items, depth + 1));
        }
    }

    return flattenedTocStack;
}

// function flattenToc(entries: Array<TocEntry>, depth = 0): Array<FlattenedTocEntry> {
//     let result: Array<FlattenedTocEntry> = [];

//     for (const entry of entries) {
//         result.push({ title: entry.title, url: entry.url, depth });
//         if (entry.items && entry.items.length > 0) {
//             result = result.concat(flattenToc(entry.items, depth + 1));
//         }
//     }

//     return result;
// }

// const flattenTocEntries = (entries: TocEntry[] = [], depth = 0): FlattenedTocEntry[] =>
//     entries.reduce<FlattenedTocEntry[]>(
//         (acc, entry) =>
//             acc.concat(
//                 { title: entry.title, url: entry.url, depth },
//                 flattenTocEntries(entry.items, depth + 1)
//             ),
//         []
//     );
