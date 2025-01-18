import { createFileRoute, Outlet } from "@tanstack/react-router";

import { container } from "~styled-system/patterns";
import { DocumentationNavigationSidebar } from "~widgets/docs/ui/documentation-navigation-sidebar";

export const Route = createFileRoute("/documentation")({
    component: RouteComponent,
});

const rootStyles = container({
    display: "flex",
    flexDirection: "row",
    position: "relative",
});

function RouteComponent() {
    return (
        <main className={rootStyles}>
            <DocumentationNavigationSidebar />
            <Outlet />
        </main>
    );
}
