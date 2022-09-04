import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TransactionList } from "./TransactionList.component";

export default {
	title: "Components/TransactionList",
	component: TransactionList,
} as ComponentMeta<typeof TransactionList>;

const Template: ComponentStory<typeof TransactionList> = (args) => <TransactionList {...args}></TransactionList>;

export const Default = Template.bind({});
Default.args = {};
