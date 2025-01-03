import { Show } from "@kickass-coderz/react-control-flow/show";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { ArrowRightIcon, PartyPopperIcon } from "lucide-react";

import { Badge } from "~shared/design-system/badge";
import { Button } from "~shared/design-system/button";
import { CardBody, CardHeader, CardRoot } from "~shared/design-system/card";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { useIsClient } from "~shared/hooks/use-is-client";
import { GithubIcon } from "~shared/icons/github-icon";
import { css } from "~styled-system/css";
import { Grid, GridItem } from "~styled-system/jsx";
import { container, stack } from "~styled-system/patterns";
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
                    <RouterLink to="/showcase">
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

                <Grid columns={6} gap="8">
                    <GridItem colSpan={2}>
                        <CardRoot size="md">
                            <CardHeader>
                                <Heading size="xl" weight="medium">
                                    Hooks
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text size="md" highContrast={false}>
                                    A collection of React hooks.
                                    <br />
                                    Typed,tested and ready to use.
                                </Text>
                            </CardBody>
                        </CardRoot>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <CardRoot size="md">
                            <CardHeader>
                                <Heading size="xl" weight="medium">
                                    UI
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text size="md" highContrast={false}>
                                    Component library optimized for fast development, easy
                                    maintenance, and accessibility. Build high-quality web apps with
                                    breeze.
                                </Text>
                            </CardBody>
                        </CardRoot>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <CardRoot size="md">
                            <CardHeader>
                                <Heading size="xl" weight="medium">
                                    Data Service
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text size="md" highContrast={false}>
                                    Streamline data fetching, caching, and updating with a single
                                    service. No more any&apos;s and typecasting.
                                </Text>
                            </CardBody>
                        </CardRoot>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <CardRoot size="md">
                            <CardHeader>
                                <Heading size="xl" weight="medium">
                                    Control Flows
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text size="md" highContrast={false}>
                                    Simplify the complexity of conditional rendering.
                                </Text>
                            </CardBody>
                        </CardRoot>
                    </GridItem>
                </Grid>
                <Button size="md" variant="soft" highContrast css={{ alignSelf: "center" }}>
                    Explore All
                    <Icon>
                        <ArrowRightIcon />
                    </Icon>
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
