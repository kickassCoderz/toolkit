import { createFileRoute, Outlet } from "@tanstack/react-router";

import { MarketingFooter } from "~widgets/marketing/ui/marketing-footer";
import { MarketingHeader } from "~widgets/marketing/ui/marketing-header";

export const Route = createFileRoute("/_marketing")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <MarketingHeader />
            <Outlet />
            <MarketingFooter />
        </>
    );
}
