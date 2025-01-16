import { For } from "@kickass-coderz/react-control-flow/for";
import { Link } from "@tanstack/react-router";

import type { SidebarDocumentationNaviagationData } from "~entities/documentation/utils/create-documentation-naviagtion-data";
import { Button } from "~shared/design-system/button";
import { Heading } from "~shared/design-system/typography/heading";
import { HStack } from "~styled-system/jsx";
import { stack } from "~styled-system/patterns";

type DocumentationNavigationProperties = Readonly<{
    navigationData: SidebarDocumentationNaviagationData;
}>;

export function DocumentationNavigation({ navigationData }: DocumentationNavigationProperties) {
    return (
        <For each={navigationData}>
            {([categoryLabel, categoryGroup]) => (
                <section key={categoryLabel} className={stack({ gap: "2" })}>
                    <HStack css={{ paddingX: "3" }}>
                        <Heading as="h2" size="sm" select="none" transform="capitalizeFirst">
                            {categoryLabel}
                        </Heading>
                    </HStack>
                    <ol className={stack({ gap: "1" })}>
                        <For each={categoryGroup}>
                            {(categoryGroupItem) => (
                                <li key={categoryGroupItem.slug}>
                                    <Button
                                        asChild
                                        fullWidth
                                        justify="start"
                                        size="sm"
                                        variant="ghost"
                                        highContrast={{
                                            base: false,
                                            _active: true,
                                        }}
                                        css={{
                                            colorPalette: {
                                                base: "neutral",
                                                _active: "accent",
                                            },
                                        }}
                                    >
                                        <Link
                                            to="/documentation/$"
                                            params={{ _splat: categoryGroupItem.slug }}
                                            activeOptions={{ exact: true }}
                                            activeProps={{ "data-active": "" }}
                                        >
                                            {categoryGroupItem.label}
                                        </Link>
                                    </Button>
                                </li>
                            )}
                        </For>
                    </ol>
                </section>
            )}
        </For>
    );
}
