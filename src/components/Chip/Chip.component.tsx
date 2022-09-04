import "./Chip.css";
export interface ChipProps {
	label?: string;
	count?: number;
	type?: string;
}

export const Chip = ({ label, count, type }: ChipProps) => {
	return (
		<span
			className={`chip  ${count ? "chip--count" : ""} ${label ? "chip--label" : ""} chip--${type || "default"}`}
		>
			{label || count}
		</span>
	);
};
