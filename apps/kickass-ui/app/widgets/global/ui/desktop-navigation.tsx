import { For } from "@kickass-coderz/react-control-flow/for";
import { Link as RouterLink } from "@tanstack/react-router";

import { MAIN_NAVIGATION_DATA } from "~features/navigation/consts";
import { GithubLink } from "~features/navigation/ui/github-link";
import { Link } from "~shared/design-system/typography/link";
import { hstack } from "~styled-system/patterns";

const rootStyles = hstack({
    gap: "0",
    hideBelow: "xl",
});

const navListStyles = hstack({
    gap: "8",
});

const navListItemStyles = hstack();

export function DesktopNavigation() {
    return (
        <nav className={rootStyles}>
            <ul className={navListStyles}>
                <For each={MAIN_NAVIGATION_DATA}>
                    {(navigationItem) => (
                        <li key={navigationItem.linkOptions.to} className={navListItemStyles}>
                            <Link
                                asChild
                                size="sm"
                                css={{
                                    colorPalette: {
                                        base: "neutral",
                                        _active: "accent",
                                    },
                                }}
                                highContrast={{ base: true, _active: false }}
                                weight="medium"
                            >
                                <RouterLink {...navigationItem.linkOptions}>
                                    {navigationItem.title}
                                </RouterLink>
                            </Link>
                        </li>
                    )}
                </For>
                <li>
                    <GithubLink />
                </li>
            </ul>
        </nav>
    );
}
