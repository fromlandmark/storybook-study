import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select.component";

export default {
	title: "Components/Select",
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}></Select>;

const Default = Template.bind({});
Default.args = {};
