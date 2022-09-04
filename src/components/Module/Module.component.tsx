import { ReactNode } from "react";
import "./Module.css";

export interface Module {
	children: ReactNode | ReactNode[];
	backgroundColor?: string;
}

export const Module = ({ children, backgroundColor = "transparent" }: Module) => {
	return (
		<div className={`module`} style={{ backgroundClip: backgroundColor }}>
			{children}
		</div>
	);
};
