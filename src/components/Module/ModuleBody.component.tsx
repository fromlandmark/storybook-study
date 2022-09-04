import { ReactNode } from "react";
import "./Module.css";

export interface ModuleBody {
	children: ReactNode | ReactNode[];
	backgroundColor?: string;
}

export const ModuleBody = ({ children, backgroundColor = "transparent" }: ModuleBody) => {
	return <div className={`module__body module__body--${backgroundColor}`}>{children}</div>;
};
