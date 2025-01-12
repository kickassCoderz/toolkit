import { ark, type PolymorphicProps } from "@ark-ui/react/factory";

import { sidebar, type SidebarVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "../utils/create-style-context";
import { useSidebarProvider } from "./use-sidebar-provider";

const { withProvider, withContext } = createStyleContext(sidebar);

export type SidebarRootProperties = ComponentProps<typeof SidebarRoot>;
export const SidebarRoot = withProvider<
    HTMLElement,
    Assign<Assign<HTMLStyledProps<"aside">, PolymorphicProps>, SidebarVariantProps>
>(ark.aside, "root");

export const SidebarHeader = withContext<
    HTMLElement,
    Assign<HTMLStyledProps<"header">, PolymorphicProps>
>(ark.header, "header");

export const SidebarContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "content");

export const SidebarFooter = withContext<
    HTMLElement,
    Assign<HTMLStyledProps<"footer">, PolymorphicProps>
>(ark.footer, "footer");

export const SidebarSection = withContext<
    HTMLElement,
    Assign<HTMLStyledProps<"section">, PolymorphicProps>
>(ark.section, "section");

export const SidebarSectionHeader = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "sectionHeader");

export const SidebarSectionLabel = withContext<
    HTMLHeadingElement,
    Assign<HTMLStyledProps<"h2">, PolymorphicProps>
>(ark.h2, "sectionLabel");

export const SidebarSectionContent = withContext<
    HTMLDivElement,
    Assign<HTMLStyledProps<"div">, PolymorphicProps>
>(ark.div, "sectionContent");

export const SidebarMenu = withContext<
    HTMLUListElement,
    Assign<HTMLStyledProps<"ul">, PolymorphicProps>
>(ark.ul, "menu");

export const SidebarMenuItem = withContext<
    HTMLLIElement,
    Assign<HTMLStyledProps<"li">, PolymorphicProps>
>(ark.li, "menuItem");

type SidebarProperties = Readonly<SidebarRootProperties & {}>;

export function Sidebar({ children, ...rest }: SidebarProperties) {
    const sidebarContext = useSidebarProvider();

    return <SidebarRoot {...rest}>{children}</SidebarRoot>;
}

export { SidebarProvider } from "./sidebar-provider";
