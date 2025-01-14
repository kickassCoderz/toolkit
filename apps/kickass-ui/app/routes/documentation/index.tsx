import { createFileRoute } from "@tanstack/react-router";

import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { css } from "~styled-system/css";
import { Box, HStack, Stack } from "~styled-system/jsx";
import { container, stack } from "~styled-system/patterns";
import { DocumentationToc } from "~widgets/docs/navigation/ui/documentation-toc";

export const Route = createFileRoute("/documentation/")({
    component: RouteComponent,
});

const headerStyles = css({});

const headerHgroupStyles = stack({
    gap: "2",
});

function RouteComponent() {
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
                        Many popular component libraries are tailored to specific JavaScript
                        frameworks and adhere to particular UI designs. While this approach may suit
                        individuals and small businesses, it often presents challenges for larger
                        organizations or agencies working with diverse clients and teams using
                        different JS frameworks.
                    </Text>
                    <Text size="md">
                        Additionally, most component libraries tightly couple design and
                        functionality, making customization difficult and sometimes impossible.
                    </Text>
                </section>
                <section>
                    <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                        Solution
                    </Heading>
                    <Text size="md" css={{ marginBottom: "4" }}>
                        Introducing Kickass UI. Our goal is to give you control over how components
                        are built and styled. Park UI offers a set of components with sensible
                        defaults that can be easily customized to meet your needs.
                    </Text>
                    <Text size="md">
                        Unlike many other component libraries, Kickass UI isn&apos;t shipped as a
                        single npm package. Instead, you can install only the components you need.
                        If you want the full design system, you can install the Kickass UI Preset.
                        You will learn more in the next section.
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
                <section>
                    <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                        Acknowledgments
                    </Heading>
                </section>
                <section>
                    <Heading as="h2" size="2xl" css={{ marginBottom: "3" }}>
                        FAQ
                    </Heading>
                    <Stack gap="16">
                        <HStack>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "1" }}></Box>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "2" }}></Box>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "3" }}></Box>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "4" }}></Box>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "5" }}></Box>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "6" }}></Box>
                        </HStack>
                        <HStack>
                            <Box css={{ width: "200px", height: "200px", boxShadow: "1" }}></Box>
                            <Box
                                css={{
                                    width: "200px",
                                    height: "200px",
                                    boxShadow: "2",
                                    border: "default",
                                }}
                            ></Box>
                            <Box
                                css={{
                                    width: "200px",
                                    height: "200px",
                                    boxShadow: "3",
                                    border: "default",
                                }}
                            ></Box>
                            <Box
                                css={{
                                    width: "200px",
                                    height: "200px",
                                    boxShadow: "4",
                                    border: "default",
                                }}
                            ></Box>
                            <Box
                                css={{
                                    width: "200px",
                                    height: "200px",
                                    boxShadow: "5",
                                    border: "default",
                                }}
                            ></Box>
                            <Box
                                css={{
                                    width: "200px",
                                    height: "200px",
                                    boxShadow: "6",
                                    border: "default",
                                }}
                            ></Box>
                        </HStack>
                    </Stack>
                </section>
            </article>
            <DocumentationToc />
        </>
    );
}
