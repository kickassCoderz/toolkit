import {
    AlbumIcon,
    ChevronsUpDownIcon,
    CirclePlayIcon,
    PaletteIcon,
    RocketIcon,
    SearchIcon,
} from "lucide-react";

import { Logo } from "~shared/components/logo";
import { Avatar } from "~shared/design-system/avatar";
import { Button } from "~shared/design-system/button";
import { CardRoot } from "~shared/design-system/card";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from "~shared/design-system/drawer";
import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import { Heading } from "~shared/design-system/typography/heading";
import { Kbd } from "~shared/design-system/typography/kbd";
import { Text } from "~shared/design-system/typography/text";
import { GithubIcon } from "~shared/icons/github-icon";
import { HStack, Stack } from "~styled-system/jsx";
import { stack } from "~styled-system/patterns";

export function MobileNavigationDrawer() {
    return (
        <Drawer size="xs" placement="left" trigger={<Button variant="solid">Open drawer</Button>}>
            <DrawerHeader>
                <HStack justify="space-between" css={{ paddingX: "2", paddingTop: "2" }}>
                    <Logo interactive size="md" />
                </HStack>
                <CardRoot
                    asChild
                    size="2xs"
                    variant="ghost"
                    css={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <button>
                        <HStack gap="inherit" css={{ overflow: "hidden" }}>
                            <Avatar size="sm" radius="rounded" initials="SF" />
                            <Stack gap="0" css={{ overflow: "hidden" }}>
                                <Text
                                    as="span"
                                    select="none"
                                    size="sm"
                                    weight="semiBold"
                                    align="left"
                                    truncate
                                >
                                    Kickass UI
                                </Text>
                                <Text
                                    as="span"
                                    select="none"
                                    size="xs"
                                    highContrast={false}
                                    align="left"
                                    truncate
                                >
                                    Component library optimized for fast development, easy
                                    maintenance, and accessibility. Build high-quality web apps with
                                    breeze.
                                </Text>
                            </Stack>
                        </HStack>
                        <Icon>
                            <ChevronsUpDownIcon />
                        </Icon>
                    </button>
                </CardRoot>
                <Button
                    fullWidth
                    justify="between"
                    size="sm"
                    variant="ghost"
                    css={{ colorPalette: "neutral" }}
                >
                    <HStack gap="inherit">
                        <Icon>
                            <SearchIcon />
                        </Icon>
                        Search...
                    </HStack>
                    <Kbd>Cmd + K</Kbd>
                </Button>
            </DrawerHeader>
            <DrawerBody>
                <section className={stack({ gap: "2" })}>
                    <HStack css={{ paddingX: "3" }}>
                        <Heading as="h2" size="sm" select="none">
                            Overview
                        </Heading>
                    </HStack>
                    <ol className={stack({ gap: "1" })}>
                        <li>
                            <Button
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
                                data-active
                            >
                                <Icon>
                                    <AlbumIcon />
                                </Icon>
                                Introduction
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                <Icon>
                                    <CirclePlayIcon />
                                </Icon>
                                Getting started
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                <Icon>
                                    <RocketIcon />
                                </Icon>
                                Releases
                            </Button>
                        </li>
                    </ol>
                </section>
                <section className={stack({ gap: "2" })}>
                    <HStack css={{ paddingX: "3" }}>
                        <Heading as="h2" size="sm" select="none">
                            Theme
                        </Heading>
                    </HStack>
                    <ol className={stack({ gap: "1" })}>
                        <li>
                            <Button
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
                                Overview
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Breakpoints
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Spacing
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Radius
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Shadows
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Typography
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Dark mode
                            </Button>
                        </li>
                    </ol>
                </section>
                <section className={stack({ gap: "2" })}>
                    <HStack css={{ paddingX: "3" }}>
                        <Heading as="h2" size="sm" select="none">
                            Components
                        </Heading>
                    </HStack>
                    <ol className={stack({ gap: "1" })}>
                        <li>
                            <Button
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
                                Accordion
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Avatar
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Badge
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Button
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Callout
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Card
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Select
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Icon button
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Input field
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Fieldset
                            </Button>
                        </li>
                        <li>
                            <Button
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
                                Text input
                            </Button>
                        </li>
                    </ol>
                </section>
            </DrawerBody>
            <DrawerFooter>
                <HStack justify="space-between">
                    <IconButton
                        size="sm"
                        variant="ghost"
                        highContrast
                        css={{ colorPalette: "neutral" }}
                    >
                        <Icon>
                            <GithubIcon />
                        </Icon>
                    </IconButton>
                    <IconButton
                        size="sm"
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
