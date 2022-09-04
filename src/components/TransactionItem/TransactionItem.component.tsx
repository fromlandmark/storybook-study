import "./TransactionItem.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
interface TransactionItemProps {
	item: {
		category: string;
		transaction_description?: string;
		transaction_date?: string;
		transaction_amount?: number;
	};
}

const returnCategoryIcon = (category: string) => {
	switch (category) {
		case "Groceries":
			return <MdOutlineLocalGroceryStore></MdOutlineLocalGroceryStore>;
			break;

		default:
			return category.split("")[0];
			break;
	}
};

export const TransactionItem = ({ item }: TransactionItemProps) => {
	return (
		<div className="transaction_item">
			<div className="transaction_item__thumbnail">{returnCategoryIcon(item.category)}</div>
			<div className="transaction__item__details">
				<p className="transaction_item__description">{item.transaction_description}</p>
				<p className="transaction_item__date">{item.transaction_date}</p>
			</div>
			<div className="transaction_item__amount">
				<p className="transaction__amount">{item.transaction_amount}</p>
			</div>
		</div>
	);
};
