import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "./Avatar.component";

export default {
	title: "Components/Avatar",
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
