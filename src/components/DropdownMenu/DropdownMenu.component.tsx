import React, { ReactElement, ReactNode } from "react";

export interface DropdownMenuProps {
	children: ReactNode;
}
export const DropdownMenu = ({ children }: DropdownMenuProps) => {
	return <div className="dropdown">{children}</div>;
};
