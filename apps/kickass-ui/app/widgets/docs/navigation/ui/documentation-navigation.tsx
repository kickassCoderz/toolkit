import { For } from "@kickass-coderz/react-control-flow/for";
import { Link } from "@tanstack/react-router";

import type { SidebarDocumentationNaviagationData } from "~entities/documentation/utils/create-documentation-naviagtion-data";
import { Button } from "~shared/design-system/button";
import { Heading } from "~shared/design-system/typography/heading";
import { HStack } from "~styled-system/jsx";
import { stack } from "~styled-system/patterns";

type DocumentationNavigationProperties = Readonly<{
    navigationData: SidebarDocumentationNaviagationData;
}>;

export function DocumentationNavigation({ navigationData }: DocumentationNavigationProperties) {
    return (
        <For each={navigationData}>
            {([categoryLabel, categoryGroup]) => (
                <section key={categoryLabel} className={stack({ gap: "2" })}>
                    <HStack css={{ paddingX: "3" }}>
                        <Heading as="h2" size="sm" select="none" transform="capitalizeFirst">
                            {categoryLabel}
                        </Heading>
                    </HStack>
                    <ol className={stack({ gap: "1" })}>
                        <For each={categoryGroup}>
                            {(categoryGroupItem) => (
                                <li key={categoryGroupItem.slug}>
                                    <Button
                                        asChild
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
                                        <Link
                                            to="/documentation/$"
                                            params={{ _splat: categoryGroupItem.slug }}
                                            activeOptions={{ exact: true }}
                                            activeProps={{ "data-active": "" }}
                                        >
                                            {categoryGroupItem.label}
                                        </Link>
                                    </Button>
                                </li>
                            )}
                        </For>
                    </ol>
                </section>
            )}
        </For>
    );
    // return (
    //     <>
    //         <section className={stack({ gap: "2" })}>
    //             <HStack css={{ paddingX: "3" }}>
    //                 <Heading as="h2" size="sm" select="none">
    //                     Overview
    //                 </Heading>
    //             </HStack>
    //             <ol className={stack({ gap: "1" })}>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                         data-active
    //                     >
    //                         <Icon>
    //                             <AlbumIcon />
    //                         </Icon>
    //                         Introduction
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         <Icon>
    //                             <CirclePlayIcon />
    //                         </Icon>
    //                         Getting started
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         <Icon>
    //                             <RocketIcon />
    //                         </Icon>
    //                         Releases
    //                     </Button>
    //                 </li>
    //             </ol>
    //         </section>
    //         <section className={stack({ gap: "2" })}>
    //             <HStack css={{ paddingX: "3" }}>
    //                 <Heading as="h2" size="sm" select="none">
    //                     Theme
    //                 </Heading>
    //             </HStack>
    //             <ol className={stack({ gap: "1" })}>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Overview
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Breakpoints
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Spacing
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Radius
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Shadows
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Typography
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Dark mode
    //                     </Button>
    //                 </li>
    //             </ol>
    //         </section>
    //         <section className={stack({ gap: "2" })}>
    //             <HStack css={{ paddingX: "3" }}>
    //                 <Heading as="h2" size="sm" select="none">
    //                     Components
    //                 </Heading>
    //             </HStack>
    //             <ol className={stack({ gap: "1" })}>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Accordion
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Avatar
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Badge
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Button
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Callout
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Card
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Select
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Icon button
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Input field
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Fieldset
    //                     </Button>
    //                 </li>
    //                 <li>
    //                     <Button
    //                         fullWidth
    //                         justify="start"
    //                         size="sm"
    //                         variant="ghost"
    //                         highContrast={{
    //                             base: false,
    //                             _active: true,
    //                         }}
    //                         css={{
    //                             colorPalette: {
    //                                 base: "neutral",
    //                                 _active: "accent",
    //                             },
    //                         }}
    //                     >
    //                         Text input
    //                     </Button>
    //                 </li>
    //             </ol>
    //         </section>
    //     </>
    // );
}
