import "./StatisticsCard.css";
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";
interface PercentageCalculationsProps {
	currentValue: number;
	pastValue: number;
}

interface StatisticsCardProps {
	title: string;
	currentValue: number;
	pastValue?: number;
	currency: string;
}

export const PercentageThreeshold = ({ currentValue, pastValue }: PercentageCalculationsProps) => {
	const currentPercentage = ((currentValue - pastValue) / pastValue) * 100;

	return (
		<div className="statistics_card__percentage" data-variation={currentPercentage < 0 ? "down" : "up"}>
			{currentPercentage < 0 ? (
				<MdOutlineArrowDownward></MdOutlineArrowDownward>
			) : (
				<MdOutlineArrowUpward></MdOutlineArrowUpward>
			)}
			<span>{currentPercentage.toFixed() + "%"}</span>
		</div>
	);
};

export const StatisticsCard = ({ title, currentValue, pastValue, currency }: StatisticsCardProps) => {
	return (
		<div className="statistics_card">
			<span className="statistics_card__title">{title}</span>
			<div className="statistics_card__details">
				<h2 className="statistics_card__value">{currentValue + currency}</h2>
				{pastValue && (
					<PercentageThreeshold currentValue={currentValue} pastValue={pastValue}></PercentageThreeshold>
				)}
			</div>
			{pastValue ? (
				<span>
					{currentValue < pastValue ? "Decrease " : "Increase "}
					of {currentValue - pastValue + currency}
				</span>
			) : (
				<span>No Data to compare</span>
			)}
		</div>
	);
};
