import "./Input.css";
import { HTMLProps, ReactNode, useState } from "react";

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "prefix" | "size"> {
	/** Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.*/
	width?: number;
	/** Show an invalid state around the input */
	invalid?: boolean;
	/** Show an icon as a prefix in the input */
	prefix?: ReactNode;
	/** Show an icon as a suffix in the input */
	suffix?: ReactNode;
	/** Show a loading indicator as a suffix in the input */
	loading?: boolean;
	/** Add a component as an addon before the input  */
	addonBefore?: ReactNode;
	/** Add a component as an addon after the input */
	addonAfter?: ReactNode;
}

export const Input = ({
	width,
	invalid,
	prefix,
	suffix,
	loading,
	addonAfter,
	addonBefore,
	...otherProps
}: InputProps) => {
	const [value, setValue] = useState<string | number>();
	return (
		<div className="input__container">
			{suffix && suffix}
			<input value={value} onChange={(e) => setValue(e.currentTarget.value)} {...otherProps} />
			{prefix && prefix}
		</div>
	);
};
