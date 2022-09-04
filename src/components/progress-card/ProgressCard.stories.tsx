import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressCard } from "./ProgressCard.component";

export default {
	title: "Components/Progress/Progress Card",
	component: ProgressCard,
	argTypes: {
		type: {
			options: ["default", "primary", "warning"],
			control: { type: "select" },
		},
		progressBar: {
			amount: {
				control: { type: "range" },
			},
		},
	},
} as ComponentMeta<typeof ProgressCard>;

const Template: ComponentStory<typeof ProgressCard> = (args) => <ProgressCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Progress Card",
	currency: "$",
	totalAmount: 1000,
	currentAmount: 500,
	progressBar: { type: "warning", amount: 50 },
};
