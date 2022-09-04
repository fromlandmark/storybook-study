import "./SidebarItem.css";
import {
	MdOutlineDashboard,
	MdOutlineCreditCard,
	MdOutlineAnalytics,
	MdOutlineDocumentScanner,
	MdOutlineSettings,
	MdOutlinePictureInPictureAlt,
} from "react-icons/md";
import { Chip } from "../Chip/Chip.component";
export interface SidebarItemProps {
	label: string;
	hasNotifications?: boolean;
	notificationsCount?: number;
}

// Retrieve Icon by Category
// @params: label: string
// @return <Icon>
const returnIconByLabel = (label: string) => {
	switch (label) {
		case "Dashboard":
			return <MdOutlineDashboard></MdOutlineDashboard>;
		case "Transactions":
			return <MdOutlineCreditCard></MdOutlineCreditCard>;
		case "Analytics":
			return <MdOutlineAnalytics></MdOutlineAnalytics>;
		case "Documents":
			return <MdOutlineDocumentScanner></MdOutlineDocumentScanner>;
		case "Settings":
			return <MdOutlineSettings></MdOutlineSettings>;
		default:
			return <MdOutlinePictureInPictureAlt></MdOutlinePictureInPictureAlt>;
	}
};

export const SidebarItem = ({ label, hasNotifications, notificationsCount }: SidebarItemProps) => {
	return (
		<div className="sidebar_item">
			<div className="sidebar_item__icon">{returnIconByLabel(label)}</div>
			<div className="sidebar_item__label">
				<span>{label}</span>
				{hasNotifications && <Chip count={notificationsCount} type="primary"></Chip>}
			</div>
		</div>
	);
};
