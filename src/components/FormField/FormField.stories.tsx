import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../Input/Input.component";
import InputStories from "../Input/Input.stories";
import { FormField, FormFieldProps } from "./FormField.component";

export default {
	title: "Components/Form Field",
	component: FormField,
	subcomponents: { Input },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
	<FormField {...args}>
		<Input placeholder="Form Field Placeholder"></Input>
	</FormField>
);

export const Default = Template.bind({});
Default.args = {
	label: "Label",
	//children: [<Input {...(InputStories.args as FormFieldProps)} />],
};
