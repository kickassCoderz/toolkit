import { AlbumIcon, CirclePlayIcon, RocketIcon } from "lucide-react";

import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { HStack } from "~styled-system/jsx";
import { stack } from "~styled-system/patterns";

export function DocumentationNavigation() {
    return (
        <>
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
        </>
    );
}
