import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { NavBarLink } from "./NavBarLink.component";

test("render NavLink", () => {
	render(
		<Router>
			<NavBarLink path="/" label="Dashboard"></NavBarLink>
		</Router>,
	);
	const NavLink = screen.getByText("Dashboard");
	expect(NavLink).toBeInTheDocument();
	expect(NavLink).toHaveTextContent("Dashboard");
	expect(NavLink).toHaveAttribute("href");
	expect(NavLink).toHaveClass("link-active");
});
