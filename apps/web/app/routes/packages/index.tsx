import { For } from "@kickass-coderz/react-control-flow/for";
import { Show } from "@kickass-coderz/react-control-flow/show";
import { createFileRoute } from "@tanstack/react-router";
import { BoxesIcon, CheckIcon, ChevronsUpDownIcon, SearchIcon } from "lucide-react";

import { FEATURED_PACKAGES } from "~features/packages/consts";
import { PackageCard } from "~features/packages/ui/package-card";
import { Icon } from "~shared/design-system/icon";
import { InputField } from "~shared/design-system/input-field";
import { Select, SelectItem } from "~shared/design-system/select";
import { createListCollection } from "~shared/design-system/select/create-list-collection";
import { TextInput } from "~shared/design-system/text-input";
import { Heading } from "~shared/design-system/typography/heading";
import { Text } from "~shared/design-system/typography/text";
import { useIsClient } from "~shared/hooks/use-is-client";
import { cx } from "~styled-system/css";
import { container, grid, gridItem, hstack, stack } from "~styled-system/patterns";
import { section } from "~styled-system/recipes";
import { AnimatedBackground } from "~widgets/global/ui/animated-background";

export const Route = createFileRoute("/packages/")({
    component: RouteComponent,
});

const SORT_BY_COLLECTION = createListCollection({
    items: [
        { label: "Name", value: "name" },
        { label: "Stars", value: "stars" },
        { label: "Downloads", value: "downloads" },
        { label: "Contributors", value: "contributors" },
    ] as const,
});

const ORDER_COLLECTION = createListCollection({
    items: [
        { label: "Ascending", value: "asc" },
        { label: "Descending", value: "desc" },
    ] as const,
});

// radial-gradient(circle 800px at 700px 200px, var(--purple-2), transparent), radial-gradient(circle 600px at calc(100% - 300px) 300px, var(--blue-3), transparent), radial-gradient(circle 800px at right center, var(--sky-3), transparent), radial-gradient(circle 800px at right bottom, var(--sky-1), transparent), radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), var(--pink-3), var(--pink-1), transparent);

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
    gap: "6",
});

const headerHgroupStyles = stack({ gap: "2" });

function RouteComponent() {
    const isClient = useIsClient();

    return (
        <main className={rootStyles}>
            <Show when={isClient}>
                <AnimatedBackground />
            </Show>
            <header className={headerStyles}>
                <Icon css={{ fontSize: "5xl", color: "colorPalette.11" }}>
                    <BoxesIcon />
                </Icon>
                <hgroup className={headerHgroupStyles}>
                    <Heading>Packages</Heading>
                    <Text highContrast={false} size="lg">
                        A gateway to our galaxy of JavaScript utilities, libraries, and tools
                        created to empower developers.
                    </Text>
                </hgroup>
            </header>
            <search className={stack({ gap: "6" })}>
                <div className={grid({ columns: 3, gap: "6" })}>
                    <div className={gridItem({ colSpan: 1 })}>
                        <InputField label="Search packages">
                            <TextInput
                                size="sm"
                                variant="surface"
                                type="search"
                                placeholder="Type to search..."
                                slotLeft={
                                    <Icon>
                                        <SearchIcon />
                                    </Icon>
                                }
                            />
                        </InputField>
                    </div>
                    <div
                        className={cx(
                            gridItem({ colSpan: 2 }),
                            hstack({ gap: "6", justify: "flex-end" })
                        )}
                    >
                        <InputField label="Sort by">
                            <Select
                                size="sm"
                                variant="surface"
                                collection={SORT_BY_COLLECTION}
                                defaultValue={["name"]}
                                indicator={
                                    <Icon>
                                        <ChevronsUpDownIcon />
                                    </Icon>
                                }
                            >
                                <For each={SORT_BY_COLLECTION.items}>
                                    {(item) => (
                                        <SelectItem
                                            key={item.value}
                                            item={item}
                                            indicator={
                                                <Icon>
                                                    <CheckIcon />
                                                </Icon>
                                            }
                                        >
                                            {item.label}
                                        </SelectItem>
                                    )}
                                </For>
                            </Select>
                        </InputField>
                        <InputField label="Order">
                            <Select
                                size="sm"
                                variant="surface"
                                collection={ORDER_COLLECTION}
                                defaultValue={["desc"]}
                                indicator={
                                    <Icon>
                                        <ChevronsUpDownIcon />
                                    </Icon>
                                }
                            >
                                <For each={ORDER_COLLECTION.items}>
                                    {(item) => (
                                        <SelectItem
                                            key={item.value}
                                            item={item}
                                            indicator={
                                                <Icon>
                                                    <CheckIcon />
                                                </Icon>
                                            }
                                        >
                                            {item.label}
                                        </SelectItem>
                                    )}
                                </For>
                            </Select>
                        </InputField>
                    </div>
                </div>
                <section>
                    <Heading srOnly>List of packages</Heading>
                    <ol className={grid({ columns: 3, gap: "6" })}>
                        <For each={FEATURED_PACKAGES}>
                            {(packageItem) => (
                                <li key={packageItem.id} className={gridItem({ colSpan: 1 })}>
                                    <PackageCard
                                        title={packageItem.title}
                                        description={packageItem.description}
                                        stats={packageItem.stats}
                                    />
                                </li>
                            )}
                        </For>
                    </ol>
                </section>
            </search>
        </main>
    );
}
