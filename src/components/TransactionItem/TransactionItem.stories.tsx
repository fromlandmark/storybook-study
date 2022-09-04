import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TransactionItem } from "./TransactionItem.component";

export default {
	title: "Components/Transaction/TransactionItem",
	components: TransactionItem,
} as ComponentMeta<typeof TransactionItem>;

const Template: ComponentStory<typeof TransactionItem> = (args) => <TransactionItem {...args}></TransactionItem>;

export const Default = Template.bind({});
Default.args = {
	item: {
		category: "Groceries",
		transaction_amount: 133,
		transaction_date: "01-01-1990",
		transaction_description: "Pingo Doce",
	},
};
