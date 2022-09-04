import "./CreditCard.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CreditCard } from "./CreditCard.component";

export default {
	title: "Components/CreditCard",
	component: CreditCard,
	argTypes: {
		hasGradientBackground: {
			control: { type: "boolean" },
		},
	},
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => <CreditCard {...args} />;

export const Story = Template.bind({});
Story.args = {
	hasGradientBackground: false,
};
