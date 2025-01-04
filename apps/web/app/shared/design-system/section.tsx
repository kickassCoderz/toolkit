import { ark } from "@ark-ui/react/factory";

import { styled } from "~styled-system/jsx";
import { section } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export const Section = styled(ark.section, section, {
    defaultProps: {
        size: "md",
    },
});

export type SectionProperties = ComponentProps<typeof Section>;
