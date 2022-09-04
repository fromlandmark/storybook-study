import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SidebarList } from "./SidebarList.component";

export default {
	title: "Components/Sidebar/Sidebar List",
	component: SidebarList,
} as ComponentMeta<typeof SidebarList>;

const Template: ComponentStory<typeof SidebarList> = (args) => <SidebarList {...args}></SidebarList>;

export const Default = Template.bind({});
Default.args = {
	title: "List Group",
	items: [
		{
			label: "Dashboard",
			hasNotifications: false,
		},
		{
			label: "Transactions",
			hasNotifications: false,
		},
		{
			label: "Analytics",
			hasNotifications: true,
			notificationsCount: 19,
		},
		{
			label: "Documents",
			hasNotifications: false,
		},
		{
			label: "Settings",
			hasNotifications: false,
		},
	],
};
