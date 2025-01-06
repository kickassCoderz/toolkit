import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/packages/kickass-ui/playground/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <main>UI Playground</main>;
}
