import {
    AnchorIcon,
    ArrowUpDownIcon,
    ChevronsUpDownIcon,
    CircuitBoardIcon,
    DatabaseIcon,
    FileKey2Icon,
    SwatchBookIcon,
} from "lucide-react";

import { Avatar } from "~shared/design-system/avatar";
import { CardBody, CardRoot } from "~shared/design-system/card";
import { Icon } from "~shared/design-system/icon";
import {
    Menu,
    MenuItem,
    MenuItemGroup,
    MenuItemGroupLabel,
    MenuSeparator,
} from "~shared/design-system/menu";
import { Text } from "~shared/design-system/typography/text";
import { HStack, Stack } from "~styled-system/jsx";

export function PackageSwitcherMenu() {
    return (
        <Menu
            size="sm"
            variant="solid"
            positioning={{ placement: "right-start", offset: { mainAxis: 4 } }}
            trigger={
                <CardRoot asChild size="2xs" variant="ghost">
                    <button type="button">
                        <CardBody
                            css={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <HStack css={{ overflow: "hidden" }}>
                                <Avatar
                                    size="sm"
                                    variant="solid"
                                    radius="rounded"
                                    icon={
                                        <Icon>
                                            <SwatchBookIcon />
                                        </Icon>
                                    }
                                />
                                <Stack gap="0" css={{ overflow: "hidden" }}>
                                    <Text as="span" size="sm" weight="semiBold" align="left">
                                        Kickass UI
                                    </Text>
                                    <Text
                                        as="span"
                                        size="xs"
                                        truncate
                                        highContrast={false}
                                        align="left"
                                    >
                                        A component library for building modern web applications.
                                    </Text>
                                </Stack>
                                <Icon>
                                    <ChevronsUpDownIcon />
                                </Icon>
                            </HStack>
                        </CardBody>
                    </button>
                </CardRoot>
            }
        >
            <MenuItemGroup>
                <MenuItemGroupLabel>React</MenuItemGroupLabel>
                <MenuItem value="kickass-ui">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <SwatchBookIcon />
                            </Icon>
                        }
                    />{" "}
                    Kickass UI
                </MenuItem>
                <MenuItem value="react-hooks">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <AnchorIcon />
                            </Icon>
                        }
                    />{" "}
                    React hooks
                </MenuItem>
                <MenuItem value="react-control-flows">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <ArrowUpDownIcon />
                            </Icon>
                        }
                    />{" "}
                    React control flows
                </MenuItem>
            </MenuItemGroup>
            <MenuSeparator />
            <MenuItemGroup>
                <MenuItemGroupLabel>Utils</MenuItemGroupLabel>
                <MenuItem value="data-service">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <DatabaseIcon />
                            </Icon>
                        }
                    />{" "}
                    Data service
                </MenuItem>
                <MenuItem value="envalidate">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <FileKey2Icon />
                            </Icon>
                        }
                    />{" "}
                    Envalidate
                </MenuItem>
                <MenuItem value="fetch-client">
                    <Avatar
                        size="xs"
                        variant="solid"
                        radius="rounded"
                        css={{ colorPalette: "accent" }}
                        icon={
                            <Icon>
                                <CircuitBoardIcon />
                            </Icon>
                        }
                    />{" "}
                    Fetch client
                </MenuItem>
            </MenuItemGroup>
        </Menu>
    );
}
