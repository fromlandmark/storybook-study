import { ReactNode } from "react";
import { Gap } from "../../utils/types";
import "./Stack.css";

export interface Stack {
	direction?: "column" | "column-reverse" | "row" | "row-reverse";
	gap?: Gap;
	children: ReactNode | ReactNode[];
}

export const Stack = ({ direction = "row", gap = 0, children }: Stack) => {
	return <div className={`stack stack-${direction} gap-${gap}`}>{children}</div>;
};
