import { For } from "@kickass-coderz/react-control-flow/for";
import { Show } from "@kickass-coderz/react-control-flow/show";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { ArrowRightIcon, PartyPopperIcon } from "lucide-react";

import { FEATURED_PACKAGES } from "~features/packages/consts";
import { PackageCard } from "~features/packages/ui/package-card";
import { Badge } from "~shared/design-system/badge";
import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { useIsClient } from "~shared/hooks/use-is-client";
import { GithubIcon } from "~shared/icons/github-icon";
import { css } from "~styled-system/css";
import { container, grid, gridItem, stack } from "~styled-system/patterns";
import { AnimatedBackground } from "~widgets/global/ui/animated-background";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

const rootStyles = css({
    width: "full",
    minHeight: "viewportHeight",
    position: "relative",
});

const headerStyles = container({
    height: "calc({sizes.viewportHeight} - {sizes.16})",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10",
});

const headerHgroupStyles = stack({
    gap: "5",
});

function RouteComponent() {
    const isClient = useIsClient();
    return (
        <main className={rootStyles}>
            <Show when={isClient}>
                <AnimatedBackground />
            </Show>
            <header className={headerStyles}>
                <Badge size="md" radius="full">
                    <Icon>
                        <PartyPopperIcon />
                    </Icon>
                    Celebrating the launch of Kickass Toolkit
                    <Icon>
                        <ArrowRightIcon />
                    </Icon>
                </Badge>
                <hgroup className={headerHgroupStyles}>
                    <Heading size="5xl" align="center">
                        Develop Kickass projects
                        <br /> with rapid development Toolkit
                    </Heading>
                    <Text size="2xl" highContrast={false} align="center">
                        Simple, powerful and flexible toolkit for building web apps.
                        <br /> Focus on code let us take care of chores!
                    </Text>
                </hgroup>
                <Button asChild size="lg" variant="solid">
                    <RouterLink to="/packages">
                        Get started
                        <Icon>
                            <ArrowRightIcon />
                        </Icon>
                    </RouterLink>
                </Button>
            </header>
            <section
                className={container({
                    maxWidth: "5xl",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16",
                })}
            >
                <hgroup className={stack({ gap: "2.5", align: "center" })}>
                    <Heading weight="semiBold">Redefining development experience</Heading>
                    <Text size="lg" highContrast={false}>
                        Streamlining the development one step at the time.
                    </Text>
                </hgroup>
                <ul
                    className={grid({
                        columns: 6,
                        gap: "8",
                    })}
                >
                    <For each={FEATURED_PACKAGES}>
                        {(packageItem, index) => (
                            <li
                                key={packageItem.id}
                                className={gridItem({
                                    colSpan: index % 3 === 0 ? 2 : 4,
                                })}
                            >
                                <PackageCard
                                    title={packageItem.title}
                                    description={packageItem.description}
                                    stats={packageItem.stats}
                                />
                            </li>
                        )}
                    </For>
                </ul>
                <Button asChild size="md" variant="soft" highContrast css={{ alignSelf: "center" }}>
                    <RouterLink to="/packages">
                        Explore All
                        <Icon>
                            <ArrowRightIcon />
                        </Icon>
                    </RouterLink>
                </Button>
            </section>
            <section
                className={container({
                    maxWidth: "5xl",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16",
                    paddingY: "40",
                })}
            >
                <hgroup className={stack({ gap: "2.5", align: "center" })}>
                    <Heading weight="semiBold">Kickass Toolkit is Open Source</Heading>
                    <Text size="lg" highContrast={false} align="center">
                        Our code&apos;s chillin&apos; on GitHub - dive in, peep it, shit on it, or
                        drop
                        <br /> some hot commits if you&apos;re feelin&apos; it!
                    </Text>
                </hgroup>
                <Button
                    asChild
                    size="md"
                    variant="soft"
                    highContrast
                    css={{ colorPalette: "neutral", alignSelf: "center" }}
                >
                    <a
                        href="https://github.com/kickassCoderz/kickass-toolkit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon>
                            <GithubIcon />
                        </Icon>
                        View on Github
                    </a>
                </Button>
            </section>
        </main>
    );
}
