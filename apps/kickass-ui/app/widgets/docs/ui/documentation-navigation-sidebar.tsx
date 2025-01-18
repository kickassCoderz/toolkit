import { For } from "@kickass-coderz/react-control-flow/for";
import { Link as RouterLink } from "@tanstack/react-router";

import { DOCUMENTATION_NAVIGATION_DATA } from "~features/navigation/consts";
import {
    NavigationSection,
    NavigationSectionHeader,
    NavigationSectionList,
    NavigationSectionListItem,
} from "~features/navigation/ui/sidebar-navigation-layout";
import { Button } from "~shared/design-system/button";
import { Heading } from "~shared/design-system/typography/heading";
import { stack } from "~styled-system/patterns";

const navStyles = stack({
    flexShrink: "0",
    direction: "column",
    gap: "4",
    width: "64",
    height: "calc({sizes.viewportHeight} - {sizes.16})",
    position: "sticky",
    top: "16",
    left: "0",
    paddingY: "12",
    paddingRight: "2",
    overflowY: "auto",
    hideBelow: "xl",
});

export function DocumentationNavigationSidebar() {
    return (
        <nav className={navStyles}>
            <For each={DOCUMENTATION_NAVIGATION_DATA}>
                {([categoryTitle, categoryGroup]) => (
                    <NavigationSection key={categoryTitle}>
                        <NavigationSectionHeader>
                            <Heading as="h3" size="sm" select="none">
                                {categoryTitle}
                            </Heading>
                        </NavigationSectionHeader>
                        <NavigationSectionList>
                            <For each={categoryGroup}>
                                {(categoryGroupItem) => (
                                    <NavigationSectionListItem
                                        key={`${categoryGroupItem.label}-${categoryGroupItem.linkOptions.to ?? ""}`}
                                    >
                                        <Button
                                            asChild
                                            fullWidth
                                            justify="start"
                                            size="md"
                                            variant="ghost"
                                            highContrast={{
                                                base: false,
                                                _active: true,
                                                _hover: true,
                                            }}
                                            css={{
                                                colorPalette: {
                                                    base: "neutral",
                                                    _active: "accent",
                                                },
                                            }}
                                        >
                                            <RouterLink {...categoryGroupItem.linkOptions}>
                                                {categoryGroupItem.label}
                                            </RouterLink>
                                        </Button>
                                    </NavigationSectionListItem>
                                )}
                            </For>
                        </NavigationSectionList>
                    </NavigationSection>
                )}
            </For>
        </nav>
    );
}
