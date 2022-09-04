import "./SidebarList.css";
import { SidebarItem, SidebarItemProps } from "../SidebarItem/SidebarItem.component";

export interface SidebarListProps {
	title?: string;
	items: SidebarItemProps;
}

export const SidebarList = ({ title, items }: any) => {
	return (
		<div>
			<h4>{title}</h4>
			{items &&
				items.map((item: SidebarItemProps) => (
					<SidebarItem
						label={item.label}
						hasNotifications={item.hasNotifications}
						notificationsCount={item.notificationsCount}
					></SidebarItem>
				))}
		</div>
	);
};
