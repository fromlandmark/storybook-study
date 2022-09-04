import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chip } from "./Chip.component";

export default {
	title: "Components/Chip",
	component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args}></Chip>;

export const Default = Template.bind({});
Default.args = {
	label: "Default",
	type: "",
};

export const ChipLabelWithPrimary = Template.bind({});
ChipLabelWithPrimary.args = {
	label: "Primary",
	type: "primary",
};

export const ChipLabelWithWarning = Template.bind({});
ChipLabelWithWarning.args = {
	label: "Warning",
	type: "warning",
};

export const ChipLabelSuccess = Template.bind({});
ChipLabelSuccess.args = {
	count: 9,
	type: "success",
};

export const ChipCountWithPrimary = Template.bind({});
ChipCountWithPrimary.args = {
	count: 9,
	type: "primary",
};

export const ChipCountWithWarning = Template.bind({});
ChipCountWithWarning.args = {
	count: 9,
	type: "warning",
};

export const ChipCountSuccess = Template.bind({});
ChipCountSuccess.args = {
	count: 9,
	type: "success",
};
