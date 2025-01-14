import { SearchIcon } from "lucide-react";

import { Logo } from "~shared/components/logo";
import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Kbd } from "~shared/design-system/typography/kbd";
import { HStack } from "~styled-system/jsx";

import { DocumentationMenu } from "./documentation-menu";

type DocumentationNavigationHeaderContentProperties = Readonly<{
    action?: React.ReactNode | undefined;
}>;

export function DocumentationNavigationHeaderContent({
    action,
}: DocumentationNavigationHeaderContentProperties) {
    return (
        <>
            <HStack justify="space-between" css={{ paddingX: "2", paddingTop: "2" }}>
                <Logo interactive size="md" />
                {action}
            </HStack>
            <DocumentationMenu />
            <Button
                fullWidth
                justify="between"
                size="sm"
                variant="ghost"
                css={{ colorPalette: "neutral" }}
            >
                <HStack gap="inherit">
                    <Icon>
                        <SearchIcon />
                    </Icon>
                    Search...
                </HStack>
                <Kbd>Cmd + K</Kbd>
            </Button>
        </>
    );
}
