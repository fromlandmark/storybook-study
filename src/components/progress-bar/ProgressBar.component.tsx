import "./ProgressBar.css";

export interface ProgressBarProps {
	type?: string;
	amount: number;
	fgColor?: string;
	bgColor?: string;
}

export const ProgressBar = ({ type = "default", amount, fgColor, bgColor = "#d4d4d4" }: ProgressBarProps) => {
	return (
		<div className={["bar__container", `bar__container--${type}`].join(" ")} style={{ backgroundColor: bgColor }}>
			<div className="bar__container__progress" style={{ width: `${amount}%`, backgroundColor: fgColor }}></div>
		</div>
	);
};
