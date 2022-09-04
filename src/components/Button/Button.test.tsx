import { render, screen, cleanup } from "@testing-library/react";
import { Button } from "./Button.component";

afterEach(() => {
	cleanup();
});

test("should render Button", () => {
	render(<Button>Button</Button>);
	const ButtonElement = screen.getByRole("button");
	expect(ButtonElement).toHaveClass("btn");
	expect(ButtonElement).toHaveTextContent("Button");
});

test("should render a Primary Button", () => {
	render(
		<Button type="primary" size="medium" kind={"default"}>
			Button
		</Button>,
	);
	const ButtonElement = screen.getByRole("button");
	expect(ButtonElement).toHaveClass("btn");
	expect(ButtonElement).toHaveClass("btn--primary");
	expect(ButtonElement).toHaveAttribute("data-kind", "default");
	expect(ButtonElement).toHaveTextContent("Button");
});
