import "./Button.css";
import { HTMLProps, ReactNode } from "react";

export interface Button extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
	kind?: "default" | "secondary" | "tertiary";
	type?: "danger" | "success" | "warning" | "primary";
	size?: "large" | "medium" | "small";
	children: ReactNode | ReactNode[];
}

export const Button = ({ type = "primary", children, size = "medium", kind }: Button) => {
	return (
		<button
			className={"btn" + `${type && ` btn--${type}`} ${size && ` btn--${size}`}`}
			data-type={`--${type}`}
			data-kind={kind && kind}
		>
			{children}
		</button>
	);
};
