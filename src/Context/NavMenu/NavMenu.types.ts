import { ReactNode } from "react";

interface INavMenuContext {
    isDesktop: boolean;
    isNavOpen: boolean;
    toggleNav: () => void;
}


interface INavMenuProps {
    children: ReactNode
}

export type { INavMenuContext, INavMenuProps };