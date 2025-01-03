import { Logo } from "~shared/components/logo";
import { Link } from "~shared/design-system/typography/link";
import { Text } from "~shared/design-system/typography/text";
import { sva } from "~styled-system/css";
import { Stack } from "~styled-system/jsx";
import { container } from "~styled-system/patterns";

const footerRecipe = sva({
    slots: ["root", "toolbar"],
    base: {
        root: {
            width: "full",
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
            borderImageSource:
                "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
            // borderImageSource:
            //     "linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .2) 55%, hsla(0, 0%, 100%, 0))",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderImageSlice: "1",
            paddingY: "8",
        }),
    },
});

export function GlobalFooter() {
    const classes = footerRecipe();

    return (
        <footer className={classes.root}>
            <div className={classes.toolbar}>
                <Stack gap="2">
                    <Logo />
                    <Text size="sm" highContrast={false}>
                        Project by{" "}
                        <Link
                            underline="always"
                            href="https://github.com/kickassCoderz"
                            target="_blank"
                            rel="noopener noreferrer"
                            css={{ colorPalette: "neutral" }}
                        >
                            KickassCoderz
                        </Link>{" "}
                        © {new Date().getFullYear()}
                    </Text>
                </Stack>
            </div>
        </footer>
    );
}
