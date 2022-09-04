import { HTMLProps, ReactNode } from "react";

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
	children: ReactNode[];
}

export const Select = ({ children }: SelectProps) => {
	return <select>{children}</select>;
};
