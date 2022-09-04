import "./NavBarLink.css";
import { NavLink } from "react-router-dom";

type NavBarLinkProps = {
	path: string;
	label: string;
};

export const NavBarLink = ({ path, label }: NavBarLinkProps) => {
	return (
		<NavLink className={(isActive: any) => (isActive ? "navbar_link link-active" : "navbar_link")} to={path}>
			{label}
		</NavLink>
	);
};
