import { createFileRoute, Outlet } from "@tanstack/react-router";

import { css } from "~styled-system/css";
import { DocumentationHeader } from "~widgets/docs/navigation/ui/documentation-header";

export const Route = createFileRoute("/documentation")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className={css({ display: "flex", flexDirection: "row" })}>
            <DocumentationHeader />
            <Outlet />
        </div>
    );
}
