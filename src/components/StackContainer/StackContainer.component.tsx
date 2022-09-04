import { ReactNode } from "react";
import { Stack } from "../Stack/Stack.component";
import "./StackContainer.css";

export interface StackContainerProps {
	children: ReactNode | ReactNode[];
}
export const StackContainer = ({ children }: Stack) => {
	return <section className="stack__container">{children}</section>;
};
