import { Logo } from "~shared/components/logo";
import { Link } from "~shared/design-system/typography/link";
import { Text } from "~shared/design-system/typography/text";
import { css } from "~styled-system/css";
import { Stack } from "~styled-system/jsx";
import { container } from "~styled-system/patterns";

const rootStyles = css({
    width: "full",
    backdropFilter: "auto",
    backdropBlur: "3xl",
    backgroundGradient: "to-r",
    gradientFrom: "background.translucent",
    gradientVia: "neutral.a2",
    gradientTo: "background.translucent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const innerStyles = container({
    position: "relative",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    borderImageSource:
        "linear-gradient(90deg, {colors.background.translucent} 0, {colors.neutral.a6} 55%, {colors.background.translucent})",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderImageSlice: "1",
    paddingY: "8",
});

export function GlobalFooter() {
    return (
        <footer className={rootStyles}>
            <div className={innerStyles}>
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
