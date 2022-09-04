import { StatisticsCard } from "../components/StatisticsCard/StatisticsCard.component";

export const HomePage = () => {
	return (
		<div>
			<p>home</p>
			<StatisticsCard currency="$" currentValue={100} title="Amounts" pastValue={1000}></StatisticsCard>
		</div>
	);
};
