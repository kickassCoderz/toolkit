import { createFileRoute, Outlet } from "@tanstack/react-router";

import { PackageSwitcherMenu } from "~features/packages/ui/package-switcher-menu";
import { Button } from "~shared/design-system/button";
import { Heading } from "~shared/design-system/typography/heading";
import { css, cx } from "~styled-system/css";
import { container } from "~styled-system/patterns";

export const Route = createFileRoute("/packages/kickass-ui/documentation")({
    component: RouteComponent,
});

const rootStyles = cx(
    container({
        width: "full",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    })
);

function RouteComponent() {
    return (
        <main className={rootStyles}>
            <DocumentationNavigationSidebar />
            <Outlet />
            <TOCNavigationSidebar />
        </main>
    );
}

function DocumentationNavigationSidebar() {
    return (
        <aside
            className={css({
                width: "64",
                height: "calc({sizes.viewportHeight} - {sizes.16})",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
            })}
        >
            <header
                className={css({
                    padding: "2",
                    width: "full",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2",
                })}
            >
                <PackageSwitcherMenu />
            </header>
            <div
                className={css({
                    width: "full",
                    minHeight: "0",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    position: "relative",
                })}
            >
                <section
                    className={css({
                        position: "relative",
                        width: "full",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2",
                    })}
                >
                    <div
                        className={css({
                            height: "8",
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "2",
                        })}
                    >
                        <Heading size="xs" weight="medium" highContrast={false}>
                            Overview
                        </Heading>
                    </div>
                    <ul
                        className={css({
                            width: "full",
                            minWidth: "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1",
                        })}
                    >
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Introduction
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Getting started
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Changelog
                            </Button>
                        </li>
                    </ul>
                </section>
                <section
                    className={css({
                        position: "relative",
                        width: "full",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2",
                    })}
                >
                    <div
                        className={css({
                            height: "8",
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "2",
                        })}
                    >
                        <Heading size="xs" weight="medium" highContrast={false}>
                            Theme
                        </Heading>
                    </div>
                    <ul
                        className={css({
                            width: "full",
                            minWidth: "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1",
                        })}
                    >
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Introduction
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Getting started
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Changelog
                            </Button>
                        </li>
                    </ul>
                </section>
                <section
                    className={css({
                        position: "relative",
                        width: "full",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        padding: "2",
                    })}
                >
                    <div
                        className={css({
                            height: "8",
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            paddingX: "2",
                        })}
                    >
                        <Heading size="xs" weight="medium" highContrast={false}>
                            Components
                        </Heading>
                    </div>
                    <ul
                        className={css({
                            width: "full",
                            minWidth: "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1",
                        })}
                    >
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Avatar
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Accordion
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Badge
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Button
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Callout
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Card
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Select
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Icon button
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Input field
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Fieldset
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Text input
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Number input
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Textarea
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Switch
                            </Button>
                        </li>
                        <li className={css({ position: "relative" })}>
                            <Button
                                fullWidth
                                highContrast
                                size="sm"
                                variant="ghost"
                                justify="start"
                                css={{ colorPalette: "neutral" }}
                            >
                                Tooltip
                            </Button>
                        </li>
                    </ul>
                </section>
            </div>
            {/* <footer
                className={css({
                    padding: "2",
                    width: "full",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2",
                })}
            >
                
            </footer> */}
        </aside>
    );
}

function TOCNavigationSidebar() {
    return <aside className={css({ width: "64" })}>TOC</aside>;
}
