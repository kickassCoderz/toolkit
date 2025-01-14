import { PaletteIcon } from "lucide-react";

import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import { GithubIcon } from "~shared/icons/github-icon";
import { HStack } from "~styled-system/jsx";

export function DocumentationNavigationFooterContent() {
    return (
        <HStack justify="space-between">
            <IconButton size="sm" variant="ghost" highContrast css={{ colorPalette: "neutral" }}>
                <Icon>
                    <GithubIcon />
                </Icon>
            </IconButton>
            <IconButton size="sm" variant="ghost" highContrast css={{ colorPalette: "neutral" }}>
                <Icon>
                    <PaletteIcon />
                </Icon>
            </IconButton>
        </HStack>
    );
}
