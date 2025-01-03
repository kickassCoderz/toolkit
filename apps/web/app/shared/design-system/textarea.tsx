import { Field as ArkField } from "@ark-ui/react/field";

import { styled } from "~styled-system/jsx";
import { textarea } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export const TextareaInput = styled(ArkField.Textarea, textarea, {
    defaultProps: {
        size: "sm",
        variant: "surface",
    },
});

export type TextareaInputProperties = ComponentProps<typeof TextareaInput>;
