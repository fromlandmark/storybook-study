import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input.component";
import { HiOutlineSearch } from "react-icons/hi";

export default {
	title: "Components/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: "Simple",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
	placeholder: "Simple",
	type: "number",
};

export const Disabled = Template.bind({});
Disabled.args = {
	placeholder: "Simple",
	disabled: true,
};

export const WithSuffic = Template.bind({});
WithSuffic.args = {
	...Default.args,
	suffix: [<HiOutlineSearch></HiOutlineSearch>],
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
	...Default.args,
	prefix: [<HiOutlineSearch></HiOutlineSearch>],
};
