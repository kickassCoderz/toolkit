import { Show } from "@kickass-coderz/react-control-flow/show";
import {
    createRootRoute,
    ErrorComponent,
    type ErrorComponentProps,
    Link,
    Outlet,
    rootRouteId,
    ScrollRestoration,
    useMatch,
    useRouter,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { outdent } from "outdent";

import { GlobalLayout } from "~widgets/global/ui/global-layout";

import appCss from "../css/index.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Kickass UI",
            },
            {
                name: "description",
                content:
                    "Component library optimized for fast development, easy maintenance, and accessibility. Build high-quality web apps with breeze.",
            },
            {
                name: "robots",
                content: "noindex, nofollow",
            },
        ],
        links: [
            {
                rel: "preload",
                href: appCss,
                as: "style",
            },
            {
                rel: "stylesheet",
                href: appCss,
            },
        ],
        // TODO: remove when hot reloading is fixed -- https://github.com/TanStack/router/issues/1992
        scripts: import.meta.env.PROD
            ? []
            : [
                  {
                      id: "react-refresh",
                      type: "module",
                      children: outdent/* js */ `
                        import RefreshRuntime from "/_build/@react-refresh"
                        RefreshRuntime.injectIntoGlobalHook(window)
                        window.$RefreshReg$ = () => {}
                        window.$RefreshSig$ = () => (type) => type
                    `,
                  },
              ],
    }),
    component: RootComponent,
    notFoundComponent: NotFoundFoundComponent,
    errorComponent: DefaultCatchBoundary,
});

function RootComponent() {
    return (
        <RootDocument>
            <GlobalLayout>
                <Outlet />
            </GlobalLayout>
        </RootDocument>
    );
}

type RootDocumentProperties = Readonly<{ children: React.ReactNode }>;

function RootDocument({ children }: RootDocumentProperties) {
    return (
        <html lang="en">
            <head>
                <Meta />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

function NotFoundFoundComponent() {
    return <div>Not Found Custom</div>;
}

function DefaultCatchBoundary({ error }: ErrorComponentProps) {
    const router = useRouter();
    const isRoot = useMatch({
        strict: false,
        select: (state) => state.id === rootRouteId,
    });

    const handleTryAgain = () => {
        void router.invalidate();
    };

    const handleGoBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        router.history.back();
    };

    return (
        <div>
            <ErrorComponent error={error} />
            <button onClick={handleTryAgain}>Try again</button>
            <Show
                when={isRoot}
                fallback={
                    <Link to="/" onClick={handleGoBack}>
                        Go Back
                    </Link>
                }
            >
                <Link to="/">Home</Link>
            </Show>
        </div>
    );
}
