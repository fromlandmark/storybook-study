import "./layout.css";
import { ReactNode } from "react";

interface Layout {
	children: ReactNode[];
}

export const Layout = ({ children }: Layout) => {
	return <main>{children}</main>;
};
