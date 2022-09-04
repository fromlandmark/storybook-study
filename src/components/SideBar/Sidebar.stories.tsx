import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sidebar } from "./Sidebar.component";

export default {
	title: "Components/Sidebar/Sidebar",
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args}></Sidebar>;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
};
