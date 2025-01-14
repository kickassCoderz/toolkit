import { ChevronsUpDownIcon } from "lucide-react";

import { Avatar } from "~shared/design-system/avatar";
import { CardRoot } from "~shared/design-system/card";
import { Icon } from "~shared/design-system/icon";
import { Text } from "~shared/design-system/typography/text";
import { HStack, Stack } from "~styled-system/jsx";

export function DocumentationMenu() {
    return (
        <CardRoot
            asChild
            size="2xs"
            variant="ghost"
            css={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <button>
                <HStack gap="inherit" css={{ overflow: "hidden" }}>
                    <Avatar size="sm" radius="rounded" initials="SF" />
                    <Stack gap="0" css={{ overflow: "hidden" }}>
                        <Text
                            as="span"
                            select="none"
                            size="sm"
                            weight="semiBold"
                            align="left"
                            truncate
                        >
                            Kickass UI
                        </Text>
                        <Text
                            as="span"
                            select="none"
                            size="xs"
                            highContrast={false}
                            align="left"
                            truncate
                        >
                            Component library optimized for fast development, easy maintenance, and
                            accessibility. Build high-quality web apps with breeze.
                        </Text>
                    </Stack>
                </HStack>
                <Icon>
                    <ChevronsUpDownIcon />
                </Icon>
            </button>
        </CardRoot>
    );
}
