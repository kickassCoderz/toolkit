import { Portal } from "@ark-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ChevronsUpDownIcon, EllipsisIcon, GalleryVerticalEndIcon, SearchIcon } from "lucide-react";

import { Logo } from "~shared/components/logo";
import { Avatar } from "~shared/design-system/avatar";
import { Button } from "~shared/design-system/button";
import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerPositioner,
    DrawerRoot,
    DrawerRootProvider,
} from "~shared/design-system/drawer";
import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSection,
    SidebarSectionContent,
    SidebarSectionHeader,
    SidebarSectionLabel,
} from "~shared/design-system/sidebar";
import { Text } from "~shared/design-system/typography/text";
import { css } from "~styled-system/css";
import { Box, HStack, Stack } from "~styled-system/jsx";

export const Route = createFileRoute("/documentation")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className={css({ display: "flex", flexDirection: "row" })}>
            {/* <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        <HStack justify="space-between" css={{ paddingLeft: "2", paddingTop: "2" }}>
                            <Logo size="sm" />
                            <IconButton size="sm" variant="ghost" css={{ colorPalette: "neutral" }}>
                                <Icon>
                                    <EllipsisIcon />
                                </Icon>
                            </IconButton>
                        </HStack>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Box
                                    css={{
                                        width: "8",
                                        height: "8",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "accent.9",
                                        color: "accent.contrast",
                                        borderRadius: "lg",
                                    }}
                                >
                                    <Icon>
                                        <GalleryVerticalEndIcon />
                                    </Icon>
                                </Box>
                                <Stack gap="0" css={{ flexGrow: "1" }}>
                                    <Text as="span" size="sm" weight="semiBold">
                                        Acme Inc
                                    </Text>
                                    <Text as="span" size="xs" highContrast={false}>
                                        Enterprise
                                    </Text>
                                </Stack>
                                <Icon>
                                    <ChevronsUpDownIcon />
                                </Icon>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Icon>
                                    <SearchIcon />
                                </Icon>
                                Search...
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarSection>
                            <SidebarSectionHeader>
                                <SidebarSectionLabel>Overview</SidebarSectionLabel>
                            </SidebarSectionHeader>
                            <SidebarSectionContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>Introduction</SidebarMenuItem>
                                    <SidebarMenuItem>Getting started</SidebarMenuItem>
                                    <SidebarMenuItem>Changelog</SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarSectionContent>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarSectionHeader>
                                <SidebarSectionLabel>Theme</SidebarSectionLabel>
                            </SidebarSectionHeader>
                            <SidebarSectionContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>Overview</SidebarMenuItem>
                                    <SidebarMenuItem>Breakpoints</SidebarMenuItem>
                                    <SidebarMenuItem>Spacing</SidebarMenuItem>
                                    <SidebarMenuItem>Radius</SidebarMenuItem>
                                    <SidebarMenuItem>Shadows</SidebarMenuItem>
                                    <SidebarMenuItem>Typography</SidebarMenuItem>
                                    <SidebarMenuItem>Colors</SidebarMenuItem>
                                    <SidebarMenuItem>Dark mode</SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarSectionContent>
                        </SidebarSection>
                        <SidebarSection>
                            <SidebarSectionHeader>
                                <SidebarSectionLabel>Components</SidebarSectionLabel>
                            </SidebarSectionHeader>
                            <SidebarSectionContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>Accordion</SidebarMenuItem>
                                    <SidebarMenuItem>Avatar</SidebarMenuItem>
                                    <SidebarMenuItem>Badge</SidebarMenuItem>
                                    <SidebarMenuItem>Button</SidebarMenuItem>
                                    <SidebarMenuItem>Callout</SidebarMenuItem>
                                    <SidebarMenuItem>Card</SidebarMenuItem>
                                    <SidebarMenuItem>Select</SidebarMenuItem>
                                    <SidebarMenuItem>Icon button</SidebarMenuItem>
                                    <SidebarMenuItem>Input field</SidebarMenuItem>
                                    <SidebarMenuItem>Fieldset</SidebarMenuItem>
                                    <SidebarMenuItem>Text input</SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarSectionContent>
                        </SidebarSection>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Avatar size="sm" initials="SF" />
                                <Stack gap="0" css={{ flexGrow: "1" }}>
                                    <Text as="span" size="sm" weight="semiBold">
                                        John Doe
                                    </Text>
                                    <Text as="span" size="xs" highContrast={false}>
                                        john.doe@email.com
                                    </Text>
                                </Stack>
                                <Icon>
                                    <ChevronsUpDownIcon />
                                </Icon>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
            </SidebarProvider> */}

            <Outlet />
        </div>
    );
}
