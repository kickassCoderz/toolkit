import { css } from "~styled-system/css";

export function DocumentationHeader() {
    return (
        <header
            className={css({
                width: "64",
                flexShrink: "0",
                height: "viewportHeight",
                position: "sticky",
                top: "0",
                left: "0",
                backgroundColor: "panel",
                borderRight: "default",
            })}
        ></header>
    );
}
