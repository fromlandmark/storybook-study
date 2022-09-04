import "./Sidebar.css";
import { SidebarList } from "../SideBarList/SidebarList.component";
import { SidebarItemProps } from "../SidebarItem/SidebarItem.component";
import { Input } from "../Input/Input.component";
import { MdSearch } from "react-icons/md";

export interface SidebarProps {
	isOpen: boolean;
}

// Template Data;
export const sidebarData: SidebarItemProps[] = [
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
];

export const Sidebar = ({ isOpen = true }) => {
	return (
		<div className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--close"}`}>
			<div className="sidebar__search">
				<Input placeholder="Search" suffix={<MdSearch></MdSearch>}></Input>
			</div>

			{/* Sidebar Groups */}
			<SidebarList title="" isOpen={isOpen} items={sidebarData}></SidebarList>
		</div>
	);
};
