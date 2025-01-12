import { SidebarContext } from "./sidebar-context";

type SidebarProviderProperties = Readonly<{
    children: React.ReactNode;
}>;

export function SidebarProvider({ children }: SidebarProviderProperties) {
    return <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>;
}
