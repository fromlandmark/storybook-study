import { ProgressBar, ProgressBarProps } from "../progress-bar/ProgressBar.component";
import "./ProgressCard.css";

interface ProgressCardProps {
	title: string;
	currency: string;
	currentAmount: number;
	totalAmount: number;
	progressBar: ProgressBarProps;
}

export const ProgressCard = ({
	title,
	currency,
	currentAmount = 0,
	totalAmount,
	...progressBar
}: ProgressCardProps) => {
	return (
		<div className={["card", "card__progress", `card--${progressBar.progressBar.type}`].join(" ")}>
			<h3 className="card__title">{title}</h3>
			<div className="card__details">
				<div className="card__amounts">
					<div className="card__amount">{currency + currentAmount}</div>
					<div className="card__amount">{currency + totalAmount}</div>
				</div>
				<ProgressBar
					amount={(currentAmount / totalAmount) * 100}
					type={progressBar.progressBar.type}
				></ProgressBar>
			</div>
		</div>
	);
};
