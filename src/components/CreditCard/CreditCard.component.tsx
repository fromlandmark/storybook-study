import "./CreditCard.css";
import { useRef } from "react";
import { RiVisaLine, RiMastercardLine } from "react-icons/ri";

export interface CardProps {
	mode: "withLimit" | "withAmount";
	cardType: "visa" | "masterCard";
	cardHolder: string;
	hasLimit?: boolean;
	amount?: number;
	creditLimit?: number;
	hasGradientBackground?: boolean;
	bgColor?: string;
	fgColor?: string;
}

export const returnCreditCardType = (type: string) => {
	switch (type) {
		case "visa":
			return <RiVisaLine></RiVisaLine>;
		case "master-card":
			return <RiMastercardLine></RiMastercardLine>;
		default:
			return <RiVisaLine></RiVisaLine>;
	}
};

export const CreditCard = ({
	mode = "withAmount",
	cardHolder = "Card Holder",
	amount = 0,
	creditLimit,
	bgColor = "#564afd",
	fgColor = "#ff0000",
	hasGradientBackground = false,
}: CardProps) => {
	let cardRef = useRef<HTMLDivElement>(null);

	return (
		<div className="credit_card" ref={cardRef}>
			<div className="credit_card__content">
				<div className="credit_card__top">
					<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="1" width="33" height="22" rx="5" fill="url(#paint0_radial_12_29)" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M16.5 1.21891L12.8333 6.96824C12.8333 6.96824 14.3 11.9989 12.8333 16.3109L16.5 22.7789L20.1666 16.3109C20.1666 16.3109 18.7 12.7176 20.1666 6.96824C20.1666 6.96824 16.5 1.21891 16.5 1.21891Z"
							stroke="#C7C7B6"
							strokeWidth="1.3"
							strokeLinejoin="bevel"
						/>
						<path d="M0 7.23239H12.8333" stroke="#C7C7B6" strokeWidth="1.3" strokeLinejoin="bevel" />
						<path d="M19.7996 7.23239H32.9996" stroke="#C7C7B6" strokeWidth="1.3" strokeLinejoin="bevel" />
						<path d="M0 16.032H12.8333" stroke="#C7C7B6" strokeWidth="1.3" strokeLinejoin="bevel" />
						<path d="M19.7996 16.032H32.9996" stroke="#C7C7B6" strokeWidth="1.3" strokeLinejoin="bevel" />
						<defs>
							<radialGradient
								id="paint0_radial_12_29"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(18.9503 9.01386) rotate(141.302) scale(22.37 22.2003)"
							>
								<stop stopColor="white" />
								<stop offset="1" stopColor="#DDDCDA" />
							</radialGradient>
						</defs>
					</svg>
				</div>
				<div className="credit_card__center">
					{mode === "withLimit" ? (
						<div>
							<span>Credit Limit</span>
							<h3>{creditLimit}</h3>
						</div>
					) : (
						<div className="credit_card__amount">
							<p className="credit_card__amount__label">Amount</p>
							<h3 className="credit_card__amount__number">{"$" + amount}</h3>
						</div>
					)}
				</div>
				<div className="credit_card__bottom">
					<span className="credit_card__holder">{cardHolder}</span>

					{returnCreditCardType("visa")}
				</div>
			</div>
			<div className="credit_card__colors">
				{hasGradientBackground ? (
					<div
						className="credit_card__gradient"
						style={{ background: `linear-gradient(-45deg, ${bgColor}, ${fgColor})` }}
					></div>
				) : (
					<div className="credit_card__flatcolor" style={{ backgroundColor: bgColor }}></div>
				)}
			</div>
		</div>
	);
};
