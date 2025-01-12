import { useContext } from "react";

import { SidebarContext } from "./sidebar-context";

export function useSidebarProvider() {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebarProvider must be used within a SidebarProvider");
    }

    return context;
}
