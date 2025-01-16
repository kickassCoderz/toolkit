import { capitalizeTitle } from "@kickass-coderz/capitalize-title";
import rehypeSlug from "rehype-slug";
import { defineCollection, defineConfig, s, z } from "velite";

const tocSchema = s.toc();
type TocEntries = z.infer<typeof tocSchema>;

function flattenToc(entries: TocEntries, depth = 0) {
    const flattenedTocStack: Array<{
        title: string;
        url: string;
        depth: number;
    }> = [];

    for (const entry of entries) {
        flattenedTocStack.push({
            title: entry.title,
            url: entry.url.replaceAll("#", ""),
            depth,
        });
        if (entry.items.length > 0) {
            flattenedTocStack.push(...flattenToc(entry.items, depth + 1));
        }
    }

    return flattenedTocStack;
}

const documentationCollection = defineCollection({
    name: "DocumentationCollection",
    pattern: "documentation/**/*.md",
    schema: s
        .object({
            title: s.string(),
            description: s.string(),
            meta: s.metadata(),
            toc: tocSchema,
            path: s.path(),
            content: s.mdx(),
            order: s.number().optional(),
            sidebarLabel: s.string().optional(),
        })
        .transform((data) => ({
            ...data,
            meta: {
                readingTime: data.meta.readingTime,
            },
            toc: flattenToc(data.toc),
            title: capitalizeTitle(data.title),
            sidebarLabel: capitalizeTitle(data.sidebarLabel ?? data.title),
            slug: data.path.split("/").slice(1).join("/"),
            category: capitalizeTitle(data.path.split("/").slice(2, 3).join("")),
        })),
});

const config = defineConfig({
    collections: {
        docs: documentationCollection,
    },
    markdown: {
        rehypePlugins: [
            rehypeSlug,

            // [
            //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
            //     rehypeShiki as any,
            //     {
            //         theme: "nord",
            //     },
            // ],
        ],
    },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            // [
            //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
            //     rehypeShiki as any,
            //     {
            //         theme: "nord",
            //     },
            // ],
        ],
    },
});

export default config;
