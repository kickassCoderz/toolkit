import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_marketing/showcase/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello Showcase</div>;
}
