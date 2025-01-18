import { For } from "@kickass-coderz/react-control-flow/for";
import { Show } from "@kickass-coderz/react-control-flow/show";
import { Link as RouterLink } from "@tanstack/react-router";
import { MenuIcon, PaletteIcon, XIcon } from "lucide-react";

import { DOCUMENTATION_NAVIGATION_DATA, MAIN_NAVIGATION_DATA } from "~features/navigation/consts";
import { GithubLink } from "~features/navigation/ui/github-link";
import {
    NavigationSection,
    NavigationSectionHeader,
    NavigationSectionList,
    NavigationSectionListItem,
} from "~features/navigation/ui/sidebar-navigation-layout";
import { Logo } from "~shared/components/logo";
import { Button } from "~shared/design-system/button";
import {
    Drawer,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "~shared/design-system/drawer";
import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import { Heading } from "~shared/design-system/typography/heading";
import { HStack } from "~styled-system/jsx";
import { stack } from "~styled-system/patterns";

const DRAWER_TITLE_ID = "global-navigation-drawer-title";

export function GlobalNavigationDrawer() {
    return (
        <Drawer
            ids={{
                title: DRAWER_TITLE_ID,
            }}
            size="xs"
            placement="left"
            trigger={
                <IconButton
                    aria-label={DRAWER_TITLE_ID}
                    highContrast
                    size="md"
                    variant="ghost"
                    css={{
                        colorPalette: "neutral",
                        hideFrom: "xl",
                    }}
                >
                    <Icon>
                        <MenuIcon />
                    </Icon>
                </IconButton>
            }
        >
            <DrawerHeader>
                <DrawerTitle css={{ srOnly: true }}>Site navigation</DrawerTitle>
                <HStack
                    justify="space-between"
                    css={{ paddingX: "2", paddingTop: "1", paddingBottom: "2" }}
                    style={{ paddingTop: "4px" }}
                >
                    <Logo interactive size="md" />
                    <DrawerCloseTrigger asChild>
                        <IconButton
                            highContrast
                            size="md"
                            variant="ghost"
                            css={{ colorPalette: "neutral", marginRight: "-2" }}
                        >
                            <Icon>
                                <XIcon />
                            </Icon>
                        </IconButton>
                    </DrawerCloseTrigger>
                </HStack>
                <ol className={stack({ gap: "1" })}>
                    <For each={MAIN_NAVIGATION_DATA}>
                        {(navigationItem) => (
                            <Show
                                key={navigationItem.linkOptions.to}
                                when={navigationItem.linkOptions.to !== "/documentation/$"}
                            >
                                <li key={navigationItem.linkOptions.to}>
                                    <DrawerCloseTrigger asChild>
                                        <Button
                                            asChild
                                            fullWidth
                                            justify="start"
                                            size="md"
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
                                            <RouterLink {...navigationItem.linkOptions}>
                                                <Icon>
                                                    <navigationItem.icon />
                                                </Icon>
                                                {navigationItem.title}
                                            </RouterLink>
                                        </Button>
                                    </DrawerCloseTrigger>
                                </li>
                            </Show>
                        )}
                    </For>
                </ol>
            </DrawerHeader>
            <DrawerBody asChild>
                <nav>
                    <NavigationSectionHeader>
                        <Heading as="h2" size="md" select="none">
                            Documentation
                        </Heading>
                    </NavigationSectionHeader>
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
                                                <DrawerCloseTrigger asChild>
                                                    <Button
                                                        asChild
                                                        fullWidth
                                                        justify="start"
                                                        size="md"
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
                                                        <RouterLink
                                                            {...categoryGroupItem.linkOptions}
                                                        >
                                                            {categoryGroupItem.label}
                                                        </RouterLink>
                                                    </Button>
                                                </DrawerCloseTrigger>
                                            </NavigationSectionListItem>
                                        )}
                                    </For>
                                </NavigationSectionList>
                            </NavigationSection>
                        )}
                    </For>
                </nav>
            </DrawerBody>
            <DrawerFooter>
                <HStack justify="space-between">
                    <GithubLink />
                    <IconButton
                        size="md"
                        variant="ghost"
                        highContrast
                        css={{ colorPalette: "neutral" }}
                    >
                        <Icon>
                            <PaletteIcon />
                        </Icon>
                    </IconButton>
                </HStack>
            </DrawerFooter>
        </Drawer>
    );
}
