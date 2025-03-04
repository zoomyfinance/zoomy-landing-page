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
		heading: "24/7 Entertainment",
		body: "Zoomy is an entertaining channel made possible by influencers",
	},
	{
		Icon: CheckIcon,
		heading: "Vawulence ✔",
		body: "Catch the non-stop vawulence and gbas-gbos from your favourite influencers",
	},
	{
		Icon: AuthenticIcon,
		heading: "Vawulence ++",
		body: "Stay up-to-date with happenings as regards your favourite influencer",
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
