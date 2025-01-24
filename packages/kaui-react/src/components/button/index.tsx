import { styled } from "@kickass-coderz/kaui-react/styled-system/jsx";
import { button } from "@kickass-coderz/kaui-react/styled-system/recipes";
import type { ComponentProps } from "@kickass-coderz/kaui-react/styled-system/types";
import { createSlotable } from "@kickass-coderz/react-slotable";

const SlotableButton = createSlotable("button");

export const Button = styled(SlotableButton, button, {
    defaultProps: {
        variant: "solid",
        size: "md",
        radius: "rounded",
        fullWidth: false,
        justify: "center",
        highContrast: false,
    },
});

export type ButtonProperties = Readonly<ComponentProps<typeof Button>>;
