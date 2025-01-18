import { Logo } from "~shared/components/logo";
import { css } from "~styled-system/css";
import { container } from "~styled-system/patterns";

import { DesktopNavigation } from "./desktop-navigation";
import { GlobalNavigationDrawer } from "./global-navigation-drawer";

const rootStyles = css({
    position: "sticky",
    top: "0",
    left: "0",
    zIndex: "sticky",
    width: "full",
    height: "16",
    backgroundColor: "background.translucent",
    backdropFilter: "auto",
    backdropBlur: "3xl",
});

const innerStyles = container({
    position: "relative",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderImageSource:
        "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderImageSlice: "1",
});

export function GlobalHeader() {
    return (
        <header className={rootStyles}>
            <div className={innerStyles}>
                <Logo interactive />

                <DesktopNavigation />
                <GlobalNavigationDrawer />
            </div>
        </header>
    );
}
