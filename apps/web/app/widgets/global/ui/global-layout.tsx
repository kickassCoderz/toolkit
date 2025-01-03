import { css } from "~styled-system/css";

import { GlobalFooter } from "./global-footer";
import { GlobalHeader } from "./global-header";

const rootStyles = css({
    isolation: "isolate",
    width: "full",
});

type GlobalLayoutProperties = Readonly<{
    children: React.ReactNode;
}>;

export function GlobalLayout({ children }: GlobalLayoutProperties) {
    return (
        <div className={rootStyles}>
            <GlobalHeader />
            {children}
            <GlobalFooter />
        </div>
    );
}
