import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_marketing/playground/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello Playground</div>;
}
