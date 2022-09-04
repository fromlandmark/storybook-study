import "./DropdownList.css";
import { ReactNode } from "react";

export interface DropdownListProps {
	children: ReactNode | ReactNode[];
	isOpen?: any;
}

export const DropdownList = ({ children, isOpen = false }: DropdownListProps) => {
	return <>{isOpen && <div className="dropdown__list">{children}</div>}</>;
};
