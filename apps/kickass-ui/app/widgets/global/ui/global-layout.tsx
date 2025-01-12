import { css } from "~styled-system/css";

const rootStyles = css({
    position: "relative",
    isolation: "isolate",
    width: "full",
});

type GlobalLayoutProperties = Readonly<{
    children: React.ReactNode;
}>;

export function GlobalLayout({ children }: GlobalLayoutProperties) {
    return <div className={rootStyles}>{children}</div>;
}
