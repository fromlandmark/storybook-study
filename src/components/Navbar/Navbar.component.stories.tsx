import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBarLink } from "../NavBarLink/NavBarLink.component";
import { withRouter } from "storybook-addon-react-router-v6";

import { Navbar } from "./Navbar.component";
import { Dropdown } from "../Dropdown/Dropdown.component";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu.component";
import { DropdownList } from "../DropdownList/DropdownList.component";

export default {
	title: "Components/Navbar",
	component: Navbar,
	decorators: [withRouter],

	args: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
	<Navbar {...args}>
		<div className="navbar__logo">
			<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg" alt="" />
		</div>
		<div className="navbar__group">
			<NavBarLink label="Dashboard" path="/" />
			<NavBarLink label="Operations" path="/" />
			<NavBarLink label="Analytics" path="/" />
			<NavBarLink label="Settings" path="/" />
		</div>
		<Dropdown>
			<DropdownMenu>
				<div>Cristian</div>
			</DropdownMenu>
			<DropdownList>
				<span>Item</span>
			</DropdownList>
		</Dropdown>
	</Navbar>
);

export const Story = Template.bind({});
Story.args = {};
