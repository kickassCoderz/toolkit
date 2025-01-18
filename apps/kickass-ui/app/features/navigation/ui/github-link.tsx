import { Icon } from "~shared/design-system/icon";
import { IconButton } from "~shared/design-system/icon-button";
import { GithubIcon } from "~shared/icons/github-icon";

export function GithubLink() {
    return (
        <IconButton
            aria-label="Toolkit on Github"
            asChild
            radius="rounded"
            size="md"
            variant="ghost"
            highContrast
            css={{ colorPalette: "neutral" }}
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
    );
}
