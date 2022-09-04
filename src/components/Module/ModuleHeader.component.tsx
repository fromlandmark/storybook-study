import { ReactNode } from "react";
import "./Module.css";

export interface ModuleHeader {
	justifyBetween?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
	children: ReactNode | ReactNode[];
}

export const ModuleHeader = ({ justifyBetween = "space-between", children }: ModuleHeader) => {
	return (
		<div className="module__header" style={{ justifyContent: justifyBetween }}>
			{children}
		</div>
	);
};
