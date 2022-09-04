import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar } from "./ProgressBar.component";

export default {
	title: "Components/Progress/Progress Bar",
	component: ProgressBar,
	argTypes: {
		type: {
			options: ["default", "primary", "warning"],
			control: { type: "select" },
		},
		amount: {
			control: { type: "range" },
		},
	},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	amount: 90,
	type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
	amount: 90,
	type: "primary",
	//fgColor: "#4807EA",
};

export const Warning = Template.bind({});
Warning.args = {
	amount: 50,
	type: "warning",
	//fgColor: "#FD4438",
};
