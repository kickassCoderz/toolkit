import { dataList, type DataListVariantProps } from "~styled-system/recipes";
import type { Assign, ComponentProps, HTMLStyledProps } from "~styled-system/types";

import { createStyleContext } from "./utils/create-style-context";

const { withProvider, withContext } = createStyleContext(dataList);

export type DataListRootProperties = ComponentProps<typeof DataListRoot>;
export const DataListRoot = withProvider<
    HTMLDataListElement,
    Assign<HTMLStyledProps<"dl">, DataListVariantProps>
>("dl", "root");

export const DataListItem = withContext<HTMLDivElement, HTMLStyledProps<"div">>("div", "item");

export const DataListLabel = withContext<HTMLElement, HTMLStyledProps<"dt">>("dt", "itemLabel");

export const DataListValue = withContext<HTMLElement, HTMLStyledProps<"dd">>("dd", "itemValue");
