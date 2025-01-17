import { createFileRoute } from "@tanstack/react-router";

import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { container, stack } from "~styled-system/patterns";

export const Route = createFileRoute("/_marketing/showcase/")({
    component: RouteComponent,
});

const rootStyles = container({
    py: "12",
    display: "flex",
    flexDirection: "column",
    gap: "12",
});

function RouteComponent() {
    return (
        <main className={rootStyles}>
            <header>
                <hgroup className={stack({ gap: "2" })}>
                    <Heading size="4xl">Showcase</Heading>
                    <Text highContrast={false} size="lg">
                        A collection of examples to inspire your next project.
                    </Text>
                </hgroup>
            </header>
        </main>
    );
}
