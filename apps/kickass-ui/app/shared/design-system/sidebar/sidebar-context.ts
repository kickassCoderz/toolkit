import { createContext } from "react";

type SidebarContextValue = Readonly<{
    isOpened?: boolean | undefined;
    onOpenChange?: ((isOpen: boolean) => void) | undefined;
}>;

export const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);
