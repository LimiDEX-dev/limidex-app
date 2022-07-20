import { ReactNode } from "react";

export interface SelectedChain {
    value: string,
    label: string,
    icon?: ReactNode,
    color?: string,
}