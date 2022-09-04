import { TransactionItem } from "../TransactionItem/TransactionItem.component";

interface TransactionListProps {
	data: Array<any>;
	title?: string;
	expanded?: boolean;
	showItems?: number;
}

export const dummyData = [
	{
		category: "Groceries",
		transaction_description: "Pingo Doce",
		transaction_date: "01-01-1990",
		transaction_amount: 999,
	},
	{
		category: "Groceries",
		transaction_description: "Pingo Doce",
		transaction_date: "01-01-1990",
		transaction_amount: 999,
	},
	{
		category: "Groceries",
		transaction_description: "Pingo Doce",
		transaction_date: "01-01-1990",
		transaction_amount: 999,
	},
];

export const TransactionList = ({ data, title, showItems, expanded = false }: TransactionListProps) => {
	return (
		<div>
			<h3>{title}</h3>
			<div className="">
				{dummyData.slice(0, (showItems = 10)).map((item) => (
					<TransactionItem item={item}></TransactionItem>
				))}
			</div>
		</div>
	);
};
