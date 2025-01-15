import { createFileRoute, notFound } from "@tanstack/react-router";

import { createDocumentationTocData } from "~entities/documentation/utils/create-documentation-toc";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { docs } from "~site-content";
import { css } from "~styled-system/css";
import { container, stack } from "~styled-system/patterns";
import { DocumentationToc } from "~widgets/docs/navigation/ui/documentation-toc";

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

const headerStyles = css({});

const headerHgroupStyles = stack({
    gap: "2",
});

function RouteComponent() {
    const pageData = Route.useLoaderData();

    console.log(pageData.toc);

    return (
        <>
            <article
                className={container({
                    width: "full",
                    maxWidth: "3xl",
                    paddingY: "12",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12",
                })}
            >
                <header className={headerStyles}>
                    <hgroup className={headerHgroupStyles}>
                        <Heading size="4xl">{pageData.title}</Heading>
                        <Text highContrast={false} size="lg">
                            {pageData.description}
                        </Text>
                    </hgroup>
                </header>
                <div
                    dangerouslySetInnerHTML={{
                        __html: pageData.content,
                    }}
                />
            </article>
            <DocumentationToc entries={pageData.toc} />
        </>
    );
}
