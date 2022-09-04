import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button } from "./Button.component";

export default {
	title: "Components/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Button",
	disabled: true,
};
