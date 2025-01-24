import { styled } from "@kickass-coderz/kaui-react/styled-system/jsx";
import { badge } from "@kickass-coderz/kaui-react/styled-system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/styled-system/types";
import { createSlotable } from "@kickass-coderz/react-slotable";

const SlotableSpan = createSlotable("span");

export const Badge = styled(SlotableSpan, badge);

Badge.displayName = "Badge";

export type BadgeProperties = ComponentProps<typeof Badge>;
