import { Logo } from "~shared/components/logo";
import { css } from "~styled-system/css";
import { HStack } from "~styled-system/jsx";
import { container } from "~styled-system/patterns";

import { DocumentationNavigation } from "./documentation-navigation";
import { DocumentationNavigationFooterContent } from "./documentation-navigation-footer-content";
import { DocumentationNavigationHeaderContent } from "./documentation-navigation-header-content";
import { MobileNavigationDrawer } from "./mobile-navigation-drawer";

const rootStyles = css({
    width: {
        base: "full",
        lg: "64",
    },
    height: {
        base: "16",
        lg: "viewportHeight",
    },
    flexShrink: "0",
    position: "sticky",
    top: "0",
    left: "0",
    zIndex: "sticky",

    lgDown: {
        backgroundColor: "background.translucent",
        backdropFilter: "auto",
        backdropBlur: "3xl",
        borderImageSource:
            "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderImageSlice: "1",
    },
    lg: {
        backgroundColor: "panel",
        borderRight: "default",
    },
});

export function DocumentationHeader() {
    return (
        <header className={rootStyles}>
            <MobileContent />
            <DesktopContent />
        </header>
    );
}

const mobileContentRootStyles = container({
    hideFrom: "lg",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

function MobileContent() {
    return (
        <div className={mobileContentRootStyles}>
            <Logo />
            <HStack>
                <MobileNavigationDrawer />
            </HStack>
        </div>
    );
}

const desktopContentRootStyles = css({
    width: "full",
    height: "full",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    hideBelow: "lg",
});

const desktopBodyStyles = css({
    width: "full",
    minHeight: "0",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    position: "relative",
    padding: "2",
    gap: "4",
    hideBelow: "lg",
});

const desktopFooterAndHeaderStyles = css({
    padding: "2",
    width: "full",
    flexShrink: "0",
    display: "flex",
    flexDirection: "column",
    gap: "2",
});

function DesktopContent() {
    return (
        <div className={desktopContentRootStyles}>
            <div className={desktopFooterAndHeaderStyles}>
                <DocumentationNavigationHeaderContent />
            </div>
            <div className={desktopBodyStyles}>
                <DocumentationNavigation />
            </div>
            <div className={desktopFooterAndHeaderStyles}>
                <DocumentationNavigationFooterContent />
            </div>
        </div>
    );
}
