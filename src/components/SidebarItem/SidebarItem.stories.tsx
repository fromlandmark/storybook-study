import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SidebarItem } from "./SidebarItem.component";

export default {
	title: "Components/Sidebar/Sidebar Item",
	component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args}></SidebarItem>;

export const Default = Template.bind({});
Default.args = {
	label: "Dashboard",
	hasNotifications: true,
	notificationsCount: 9,
};
