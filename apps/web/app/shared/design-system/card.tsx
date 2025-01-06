import { ark, type PolymorphicProps } from "@ark-ui/react/factory";

import { card, type CardVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(card);

export type CardRootProperties = ComponentProps<typeof CardRoot>;
export const CardRoot = withProvider<
    HTMLElement,
    Assign<Assign<HTMLStyledProps<"article">, PolymorphicProps>, CardVariantProps>
>(ark.article, "root");

export const CardHeader = withContext<HTMLElement, HTMLStyledProps<"header">>("header", "header");

export const CardBody = withContext<HTMLDivElement, HTMLStyledProps<"div">>("div", "body");

export const CardFooter = withContext<HTMLElement, HTMLStyledProps<"footer">>("footer", "footer");
