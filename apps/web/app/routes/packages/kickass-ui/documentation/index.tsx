import { createFileRoute } from "@tanstack/react-router";

import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { css, cx } from "~styled-system/css";
import { stack } from "~styled-system/patterns";
import { section } from "~styled-system/recipes";

export const Route = createFileRoute("/packages/kickass-ui/documentation/")({
    component: RouteComponent,
});

const rootStyles = cx(
    css({
        width: "full",
        maxWidth: "2xl",
    }),
    section({ size: "lg" })
);

const headerStyles = css({});

const headerHgroupStyles = stack({
    gap: "2",
});

function RouteComponent() {
    return (
        <article className={rootStyles}>
            <header>
                <hgroup className={headerHgroupStyles}>
                    <Heading size="4xl">Kickass UI</Heading>
                    <Text highContrast={false} size="lg">
                        Kickass UI is a design system for building modern web applications.
                    </Text>
                </hgroup>
            </header>
        </article>
    );
}
