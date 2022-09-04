import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StatisticsCard } from "./StatisticsCard.component";

export default {
	title: "Components/Statistic Card",
	component: StatisticsCard,
} as ComponentMeta<typeof StatisticsCard>;

const Template: ComponentStory<typeof StatisticsCard> = (args) => <StatisticsCard {...args}></StatisticsCard>;

export const Default = Template.bind({});
Default.args = {
	title: "Title",
	currentValue: 1000,
	pastValue: 1009,
	currency: "€",
};

export const WithoutLastValue = Template.bind({});
WithoutLastValue.args = {
	title: "Title",
	currentValue: 1000,
	currency: "€",
};
