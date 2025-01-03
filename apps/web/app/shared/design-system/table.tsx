import { table, type TableVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(table);

export const TableRoot = withProvider<
    HTMLTableElement,
    Assign<HTMLStyledProps<"table">, TableVariantProps>
>("table", "root");

export type TableRootProperties = ComponentProps<typeof TableRoot>;

export const TableHeader = withContext<HTMLTableSectionElement, HTMLStyledProps<"thead">>(
    "thead",
    "header"
);

export const TableBody = withContext<HTMLTableSectionElement, HTMLStyledProps<"tbody">>(
    "tbody",
    "body"
);

export const TableRow = withContext<HTMLTableRowElement, HTMLStyledProps<"tr">>("tr", "row");

export const TableCell = withContext<HTMLTableCellElement, HTMLStyledProps<"td">>("td", "cell");

export const TableColumnHeaderCell = withContext<HTMLTableCellElement, HTMLStyledProps<"th">>(
    TableCell,
    "columnHeaderCell"
);

export const TableRowHeaderCell = withContext<HTMLTableCellElement, HTMLStyledProps<"th">>(
    TableCell,
    "rowHeaderCell"
);

export const TableCaption = withContext<HTMLTableCaptionElement, HTMLStyledProps<"caption">>(
    "caption",
    "caption"
);
