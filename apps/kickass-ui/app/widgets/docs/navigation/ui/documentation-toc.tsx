import { Heading } from "~shared/design-system/typography/heading";
import { Link } from "~shared/design-system/typography/link";
import { css } from "~styled-system/css";
import { stack } from "~styled-system/patterns";

export function DocumentationToc() {
    return (
        <aside
            className={css({
                height: "calc({sizes.viewportHeight} - {sizes.16})",
                width: "64",
                flexShrink: "0",
                position: "sticky",
                top: "0",
                left: "0",
                paddingY: "12",
            })}
        >
            <header>
                <Heading size="lg" as="h2">
                    On this page
                </Heading>
            </header>
            <nav className={css({ paddingY: "4" })}>
                <ul className={stack()}>
                    <li>
                        <Link size="sm" css={{ colorPalette: "neutral" }}>
                            Motivation
                        </Link>
                    </li>
                    <li>
                        <Link size="sm" css={{ colorPalette: "neutral" }}>
                            Solution
                        </Link>
                    </li>
                    <li>
                        <Link size="sm" css={{ colorPalette: "neutral" }}>
                            Acknowledgments
                        </Link>
                    </li>
                    <li>
                        <Link size="sm" css={{ colorPalette: "neutral" }}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
