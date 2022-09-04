import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { NavBarLink } from "./NavBarLink.component";

export default {
	title: "Components/NavBarLink",
	component: NavBarLink,
	decorators: [withRouter],

	args: {
		path: "string",
		label: "string",
	},
} as ComponentMeta<typeof NavBarLink>;

const Template: ComponentStory<typeof NavBarLink> = (args) => <NavBarLink {...args} />;

export const Default = Template.bind({});
Default.story = {
	parameters: {},
};
Default.args = {
	label: "Dashboard",
};
