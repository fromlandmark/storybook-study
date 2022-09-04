import "./FormField.css";
import { ReactNode } from "react";

export interface FormFieldProps {
	label?: string;
	children: ReactNode;
}
export const FormField = ({ label, children }: FormFieldProps) => {
	return (
		<div className="form_field">
			<label className="form_field__label">{label}</label>
			{children}
		</div>
	);
};
