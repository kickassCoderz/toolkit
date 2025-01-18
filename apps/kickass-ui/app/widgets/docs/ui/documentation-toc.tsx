import { For } from "@kickass-coderz/react-control-flow/for";
import { Link as RouterLink } from "@tanstack/react-router";
import { ChevronRightIcon, TextIcon } from "lucide-react";

import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Link } from "~shared/design-system/typography/link";
import { Text } from "~shared/design-system/typography/text";
import { css } from "~styled-system/css";
import { container, hstack, stack } from "~styled-system/patterns";

type TocEntries = Array<{
    title: string;
    url: string;
    depth: number;
}>;

type DocumentationTocProperties = Readonly<{
    entries: TocEntries;
}>;

const mobileContentRootStyles = container({
    hideFrom: "xl",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
});

const mobileContentHeadingStyles = hstack({
    gap: "0",
});

const desktopContentRootStyles = css({
    hideBelow: "xl",
    paddingY: "12",
});

const desktopEntryItemStyles = css({
    height: "fit",
    width: "fit",
    "&:where([data-depth='0'])": {
        paddingLeft: "0",
    },
    "&:where([data-depth='1'])": {
        paddingLeft: "4",
    },
    "&:where([data-depth='2'])": {
        paddingLeft: "8",
    },
    "&:where([data-depth='3'])": {
        paddingLeft: "12",
    },
    "&:where([data-depth='4'])": {
        paddingLeft: "16",
    },
    "&:where([data-depth='5'])": {
        paddingLeft: "20",
    },
    "&:where([data-depth='6'])": {
        paddingLeft: "24",
    },
});

export function DocumentationToc({ entries }: DocumentationTocProperties) {
    return (
        <aside
            className={css({
                height: {
                    base: "9",
                    xl: "fit",
                },
                width: {
                    base: "auto",
                    xl: "64",
                },
                flexShrink: "0",
                position: "sticky",
                top: {
                    base: "16",
                    lg: "16",
                },
                left: "0",
                xlDown: {
                    backgroundColor: "background.translucent",
                    backdropFilter: "auto",
                    backdropBlur: "3xl",
                    borderImageSource:
                        "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderImageSlice: "1",
                },

                marginX: {
                    base: "-4",
                    md: "-6",
                    lg: "-8",
                    xl: "0",
                },
            })}
        >
            <div className={mobileContentRootStyles}>
                <h1 className={mobileContentHeadingStyles}>
                    <Button
                        highContrast
                        size="xs"
                        variant="ghost"
                        css={{ colorPalette: "neutral" }}
                    >
                        <Icon>
                            <TextIcon />
                        </Icon>
                        On this page
                    </Button>
                    <Icon>
                        <ChevronRightIcon />
                    </Icon>
                    <Text
                        as="span"
                        highContrast={false}
                        weight="medium"
                        size="xs"
                        css={{ paddingLeft: "2" }}
                    >
                        Motivation
                    </Text>
                </h1>
            </div>
            <div className={desktopContentRootStyles}>
                <header>
                    <Heading size="lg" as="h2">
                        On this page
                    </Heading>
                </header>
                <nav className={css({ paddingY: "4" })}>
                    <ul className={stack()}>
                        <For each={entries}>
                            {(entryItem) => (
                                <li
                                    key={entryItem.title}
                                    data-depth={entryItem.depth}
                                    className={desktopEntryItemStyles}
                                >
                                    <Link
                                        asChild
                                        size="sm"
                                        underline={{
                                            base: "hover",
                                            _active: "always",
                                        }}
                                        css={{
                                            colorPalette: {
                                                base: "neutral",
                                                _active: "accent",
                                            },
                                        }}
                                    >
                                        <RouterLink
                                            to="."
                                            hash={entryItem.url}
                                            activeOptions={{
                                                includeHash: true,
                                            }}
                                            activeProps={{
                                                "data-active": "",
                                            }}
                                        >
                                            {entryItem.title}
                                        </RouterLink>
                                    </Link>
                                </li>
                            )}
                        </For>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
