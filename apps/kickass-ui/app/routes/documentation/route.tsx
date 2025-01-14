import { createFileRoute, Outlet } from "@tanstack/react-router";

import { stack } from "~styled-system/patterns";
import { DocumentationHeader } from "~widgets/docs/navigation/ui/documentation-header";

export const Route = createFileRoute("/documentation")({
    component: RouteComponent,
});

const rootStyles = stack({
    direction: {
        base: "column",
        lg: "row",
    },
    gap: "0",
});

const mainStyles = stack({
    width: "full",

    direction: {
        base: "column-reverse",
        xl: "row",
    },
});

function RouteComponent() {
    return (
        <div className={rootStyles}>
            <DocumentationHeader />
            <main className={mainStyles}>
                <Outlet />
            </main>
        </div>
    );
}
