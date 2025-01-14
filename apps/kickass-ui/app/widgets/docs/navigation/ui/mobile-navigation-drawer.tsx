import { MenuIcon, XIcon } from "lucide-react";

import {
    Drawer,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerFooter,
    DrawerHeader,
} from "~shared/design-system/drawer";
import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";

import { DocumentationNavigation } from "./documentation-navigation";
import { DocumentationNavigationFooterContent } from "./documentation-navigation-footer-content";
import { DocumentationNavigationHeaderContent } from "./documentation-navigation-header-content";

export function MobileNavigationDrawer() {
    return (
        <Drawer
            size="xs"
            placement="left"
            trigger={
                <IconButton
                    highContrast
                    size="sm"
                    variant="ghost"
                    css={{ colorPalette: "neutral" }}
                >
                    <Icon>
                        <MenuIcon />
                    </Icon>
                </IconButton>
            }
        >
            <DrawerHeader>
                <DocumentationNavigationHeaderContent
                    action={
                        <DrawerCloseTrigger asChild>
                            <IconButton
                                highContrast
                                size="sm"
                                variant="ghost"
                                css={{ colorPalette: "neutral", marginRight: "-2" }}
                            >
                                <Icon>
                                    <XIcon />
                                </Icon>
                            </IconButton>
                        </DrawerCloseTrigger>
                    }
                />
            </DrawerHeader>
            <DrawerBody>
                <DocumentationNavigation />
            </DrawerBody>
            <DrawerFooter>
                <DocumentationNavigationFooterContent />
            </DrawerFooter>
        </Drawer>
    );
}
