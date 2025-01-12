import { Link as RouterLink } from "@tanstack/react-router";

import { Logo } from "~shared/components/logo";
import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import { Link } from "~shared/design-system/typography/link";
import { GithubIcon } from "~shared/icons/github-icon";
import { sva } from "~styled-system/css";
import { container } from "~styled-system/patterns";

const headerRecipe = sva({
    slots: ["root", "toolbar", "toolbarRight", "nav", "navList", "navListItem"],
    base: {
        root: {
            position: "sticky",
            top: "0",
            left: "0",
            zIndex: "sticky",
            width: "full",
            height: "16",
            backgroundColor: "background.translucent",
            backdropFilter: "auto",
            backdropBlur: "3xl",
        },
        toolbar: container.raw({
            position: "relative",
            width: "full",
            height: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderImageSource:
                "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
            // borderImageSource:
            //     "linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .2) 55%, hsla(0, 0%, 100%, 0))",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderImageSlice: "1",
        }),

        toolbarRight: {
            display: "flex",
            alignItems: "center",
            gap: "8",
        },

        nav: {
            display: "none",
            md: {
                display: "flex",
                alignItems: "center",
            },
        },
        navList: {
            display: "flex",
            alignItems: "center",
            gap: "8",
        },
        navListItem: {
            display: "flex",
            alignItems: "center",
        },
    },
});

export function GlobalHeader() {
    const classes = headerRecipe();
    return (
        <header className={classes.root}>
            <div className={classes.toolbar}>
                <Logo interactive />
                <div className={classes.toolbarRight}>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            <li className={classes.navListItem}>
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
                                    <RouterLink
                                        to="/packages"
                                        activeProps={{
                                            "data-active": "",
                                        }}
                                    >
                                        Packages
                                    </RouterLink>
                                </Link>
                            </li>
                            <li className={classes.navListItem}>
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
                                    <RouterLink
                                        to="/showcase"
                                        activeProps={{
                                            "data-active": "",
                                        }}
                                    >
                                        Showcase
                                    </RouterLink>
                                </Link>
                            </li>
                            <li className={classes.navListItem}>
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
                                    <RouterLink
                                        to="/blog"
                                        activeProps={{
                                            "data-active": "",
                                        }}
                                    >
                                        Blog
                                    </RouterLink>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <IconButton
                        asChild
                        radius="rounded"
                        size="sm"
                        variant="ghost"
                        highContrast
                        css={{ colorPalette: "neutral" }}
                        aria-label="Toolkit on Github"
                    >
                        <a
                            href="https://github.com/kickassCoderz/toolkit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon>
                                <GithubIcon />
                            </Icon>
                        </a>
                    </IconButton>
                </div>
            </div>
        </header>
    );
}
