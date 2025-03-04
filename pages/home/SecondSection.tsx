export const runtime = "edge";

import React from "react";
import styled, { useTheme } from "styled-components";

import { SupportIcon, CheckIcon, AuthenticIcon } from "components/Icons";
import Text from "components/Text";
import { ThemeType } from "constants/theme";
import useWindowSize from "utils/hooks/useWindowSize";
import { MobileScreenWidth, TabletScreenWidth } from "constants/data";

const content = [
	{
		Icon: SupportIcon,
		heading: "24/7 Support 📞",
		body: "Our 24/7 support team is always here for you with swift assistance anyday, anytime",
	},
	{
		Icon: CheckIcon,
		heading: "Secured exchange 🔒",
		body: "Zoomy uses advanced encryption and secure best practices to keep your funds safe at all times",
	},
	{
		Icon: AuthenticIcon,
		heading: "Best rates 🚀",
		body: "Get the best rates on every coin received with Zoomy. No hidden fees, its fast, fair, and transparent",
	},
];

const ListItem = ({ Icon, heading, body }: typeof content[0]) => {
	const {
		colors: { headingPrimary },
	} = useTheme() as ThemeType;

	const { width } = useWindowSize();

	return (
		<Item>
			<Icon width={(width <= MobileScreenWidth && 42) || undefined} />
			<Text
				type="heading"
				className={`text__heading--${
					width > TabletScreenWidth ? "small" : "xxs"
				}`}
				text={heading}
				color={headingPrimary}
				style={{ fontWeight: 800 }}
			/>
			<Text
				type="body"
				text={body}
				className={`text__body--${
					width > TabletScreenWidth ? "xl" : "small"
				}`}
			/>
		</Item>
	);
};

const Item = styled.div`
	background-color: white;
	max-width: 36.4rem;

	@media screen and (max-width: 926px) {
		text-align: center;
	}

	svg {
		margin-bottom: 3.5rem;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			margin-bottom: 2.5rem;
		}
	}

	h1 {
		margin-bottom: 2rem;

		@media screen and (max-width: ${TabletScreenWidth}px) {
			margin-bottom: 1.5rem;
		}
	}
`;

const SecondSection = () => {
	return (
		<Container>
			<div className="content">
				{content.map((item, index) => (
					<ListItem key={index} {...item} />
				))}
			</div>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	margin-top: 11.4rem;

	@media screen and (max-width: ${MobileScreenWidth}px) {
		margin-top: 8rem;
	}

	.content {
		width: var(--content-width);
		margin: 0 auto;
		padding: 10.5rem 0;
		display: flex;
		gap: 7rem;
		justify-content: center;

		@media screen and (max-width: 1380px) {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		@media screen and (max-width: ${TabletScreenWidth}px) {
			padding: 0;
			gap: 4rem;
			padding-bottom: 3rem;
		}

		@media screen and (max-width: ${MobileScreenWidth}px) {
			padding: 0;
			gap: 3.5rem;
		}
	}
`;

export default SecondSection;
