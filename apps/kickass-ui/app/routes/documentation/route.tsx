import { createFileRoute, Outlet } from "@tanstack/react-router";

import { createSidebarDocumentationNaviagationData } from "~entities/documentation/utils/create-documentation-naviagtion-data";
import { docs } from "~site-content";
import { stack } from "~styled-system/patterns";
import { DocumentationHeader } from "~widgets/docs/navigation/ui/documentation-header";

export const Route = createFileRoute("/documentation")({
    loader() {
        const sidebarData = createSidebarDocumentationNaviagationData(docs);

        return sidebarData;
    },
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
    const sidebarData = Route.useLoaderData();

    return (
        <div className={rootStyles}>
            <DocumentationHeader navigationData={sidebarData} />
            <main className={mainStyles}>
                <Outlet />
            </main>
        </div>
    );
}
