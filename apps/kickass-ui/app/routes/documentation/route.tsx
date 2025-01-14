import { createFileRoute, Outlet } from "@tanstack/react-router";

import { hstack, stack } from "~styled-system/patterns";
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

const mainStyles = hstack({
    width: "full",
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
