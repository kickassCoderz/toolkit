import { useMatchRoute } from "@tanstack/react-router";

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
    const match = useMatchRoute();

    const matches = match({ to: "/packages/kickass-ui/documentation" });

    return (
        <div className={rootStyles}>
            {!matches && <GlobalHeader />}
            {children}
            <GlobalFooter />
        </div>
    );
}
