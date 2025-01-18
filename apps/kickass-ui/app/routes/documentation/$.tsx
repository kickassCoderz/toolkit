import { createFileRoute, notFound } from "@tanstack/react-router";

import { MDXContent } from "~features/content/ui/mdx-content";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { docs } from "~site-content";
import { css } from "~styled-system/css";
import { stack } from "~styled-system/patterns";
import { DocumentationToc } from "~widgets/docs/ui/documentation-toc";

export const Route = createFileRoute("/documentation/$")({
    loader({ params }) {
        const pageData = docs.find((item) => item.slug === params._splat);

        if (!pageData) {
            // eslint-disable-next-line @typescript-eslint/only-throw-error -- @TODO: Consider adjusting this rule
            throw notFound();
        }

        return pageData;
    },
    component: RouteComponent,
});

const rootStyles = stack({
    gap: "0",
    position: "relative",
    flex: "1",
    direction: {
        base: "column-reverse",
        xl: "row",
    },
});

const contentStyles = css({
    width: "full",
    maxWidth: "prose",
    paddingY: "12",
    marginX: "auto",
});

const headerStyles = css({
    marginBottom: "12",
});

const headerHgroupStyles = stack({
    gap: "2",
});

function RouteComponent() {
    const pageData = Route.useLoaderData();

    return (
        <article className={rootStyles}>
            <div className={contentStyles}>
                <header className={headerStyles}>
                    <hgroup className={headerHgroupStyles}>
                        <Heading size="4xl">{pageData.title}</Heading>
                        <Text highContrast={false} size="lg">
                            {pageData.description}
                        </Text>
                    </hgroup>
                </header>
                <MDXContent code={pageData.content} />
            </div>
            <DocumentationToc entries={pageData.toc} />
        </article>
    );
}
