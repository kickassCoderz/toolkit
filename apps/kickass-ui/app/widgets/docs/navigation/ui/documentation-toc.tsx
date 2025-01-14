import { ChevronRightIcon, TextIcon } from "lucide-react";

import { Button } from "~shared/design-system/button";
import { Icon } from "~shared/design-system/icon";
import { Heading } from "~shared/design-system/typography/heading";
import { Link } from "~shared/design-system/typography/link";
import { Text } from "~shared/design-system/typography/text";
import { css } from "~styled-system/css";
import { container, hstack, stack } from "~styled-system/patterns";

export function DocumentationToc() {
    return (
        <aside
            className={css({
                height: {
                    base: "9",
                    xl: "fit",
                },
                width: {
                    base: "full",
                    xl: "64",
                },
                flexShrink: "0",
                position: "sticky",
                top: {
                    base: "16",
                    lg: "0",
                },
                left: "0",
                xlDown: {
                    backgroundColor: "background.translucent",
                    backdropFilter: "auto",
                    backdropBlur: "3xl",
                    borderImageSource:
                        "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    borderImageSlice: "1",
                },
            })}
        >
            <MobileContent />
            <DesktopContent />
        </aside>
    );
}

const mobileContentRootStyles = container({
    hideFrom: "xl",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
});

const mobileContentHeadingStyles = hstack({
    gap: "0",
});

function MobileContent() {
    return (
        <div className={mobileContentRootStyles}>
            <h1 className={mobileContentHeadingStyles}>
                <Button highContrast size="xs" variant="ghost" css={{ colorPalette: "neutral" }}>
                    <Icon>
                        <TextIcon />
                    </Icon>
                    On this page
                </Button>
                <Icon>
                    <ChevronRightIcon />
                </Icon>
                <Text
                    as="span"
                    highContrast={false}
                    weight="medium"
                    size="xs"
                    css={{ paddingLeft: "2" }}
                >
                    Motivation
                </Text>
            </h1>
        </div>
    );
}

const desktopContentRootStyles = css({
    hideBelow: "xl",
    paddingY: "12",
});

function DesktopContent() {
    return (
        <div className={desktopContentRootStyles}>
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
        </div>
    );
}
