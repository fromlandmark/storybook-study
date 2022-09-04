import "./Dropdown.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";

export interface DropdownProps {
	children: ReactNode[];
	isOpen?: boolean;
}

export const Dropdown = ({ children, isOpen = false }: DropdownProps) => {
	const [isMenuOpen, setIsOpen] = useState<boolean>(isOpen);
	let partialDetails: Partial<DropdownProps> = { isOpen: isMenuOpen };

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.addEventListener("click", (e: any) => {
			if (ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		});

		return () => {
			document.body.removeEventListener("click", () => {});
		};
	}, [ref]);

	return (
		<div
			className="dropdown"
			ref={ref}
			onClick={() => {
				setIsOpen(!isMenuOpen);
			}}
		>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, partialDetails);
				}
				return child;
			})}
		</div>
	);
};
