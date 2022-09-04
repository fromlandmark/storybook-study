import "./Navbar.css";
import { ReactElement } from "react";

interface NavbarProps {
	children: ReactElement[];
}
export const Navbar = ({ children }: NavbarProps) => {
	return <nav>{children}</nav>;
};
