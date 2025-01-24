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

        display: "flex",
        flexDirection: "column",
        gap: "12",
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
            <header className={headerStyles}>
                <hgroup className={headerHgroupStyles}>
                    <Heading size="4xl">Kickass UI</Heading>
                    <Text highContrast={false} size="lg">
                        Component library optimized for fast development, easy maintenance, and
                        accessibility. Build high-quality web apps with breeze.
                    </Text>
                </hgroup>
            </header>
            <section>
                <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                    Motivation
                </Heading>
                <Text size="md" css={{ marginBottom: "4" }}>
                    Many popular component libraries are tailored to specific JavaScript frameworks
                    and adhere to particular UI designs. While this approach may suit individuals
                    and small businesses, it often presents challenges for larger organizations or
                    agencies working with diverse clients and teams using different JS frameworks.
                </Text>
                <Text size="md">
                    Additionally, most component libraries tightly couple design and functionality,
                    making customization difficult and sometimes impossible.
                </Text>
            </section>
            <section>
                <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                    Solution
                </Heading>
                <Text size="md" css={{ marginBottom: "4" }}>
                    Introducing Kickass UI. Our goal is to give you control over how components are
                    built and styled. Park UI offers a set of components with sensible defaults that
                    can be easily customized to meet your needs.
                </Text>
                <Text size="md">
                    Unlike many other component libraries, Kickass UI isn&apos;t shipped as a single
                    npm package. Instead, you can install only the components you need. If you want
                    the full design system, you can install the Kickass UI Preset. You will learn
                    more in the next section.
                </Text>
            </section>
            <section>
                <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                    Acknowledgments
                </Heading>
            </section>
            <section>
                <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                    FAQ
                </Heading>
            </section>
        </article>
    );
}
