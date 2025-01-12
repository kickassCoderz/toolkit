import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { ArrowRightIcon, PaletteIcon, SwatchBookIcon } from "lucide-react";

import { Logo } from "~shared/components/logo";
import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { cx } from "~styled-system/css";
import { Stack } from "~styled-system/jsx";
import { container, stack } from "~styled-system/patterns";
import { section } from "~styled-system/recipes";

export const Route = createFileRoute("/_marketing/")({
    component: RouteComponent,
});

const rootStyles = cx(
    container({
        maxWidth: "7xl",
        width: "full",
        minHeight: "viewportHeight",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "12",
    }),
    section({ size: "lg" })
);

const headerStyles = stack({
    paddingTop: "16",
    gap: "10",
});

const headerHgroupStyles = stack({
    gap: "5",
    maxWidth: "prose",
});

function RouteComponent() {
    return (
        <main className={rootStyles}>
            <header className={headerStyles}>
                <Logo
                    size="xl"
                    hideText
                    label="Kickass UI"
                    to="/"
                    icon={
                        <Icon>
                            <SwatchBookIcon />
                        </Icon>
                    }
                />
                <hgroup className={headerHgroupStyles}>
                    <Heading size={["4xl", "5xl"]}>
                        Build beautiful
                        <br /> interfaces with speed
                    </Heading>
                    <Text size={["lg", "xl"]} highContrast={false}>
                        Component library optimized for fast development, easy maintenance, and
                        accessibility. Build high-quality web apps with breeze.
                    </Text>
                </hgroup>
                <Stack direction={["column", "row"]} gap="4">
                    <Button asChild fullWidth={[true, false]} size="lg" variant="solid">
                        <RouterLink to="/documentation">
                            Get Started
                            <Icon>
                                <ArrowRightIcon />
                            </Icon>
                        </RouterLink>
                    </Button>
                    <Button
                        asChild
                        highContrast
                        fullWidth={[true, false]}
                        size="lg"
                        variant="soft"
                        css={{ colorPalette: "neutral" }}
                    >
                        <RouterLink to="/playground">
                            <Icon>
                                <PaletteIcon />
                            </Icon>
                            Playground
                        </RouterLink>
                    </Button>
                </Stack>
            </header>
        </main>
    );
}
