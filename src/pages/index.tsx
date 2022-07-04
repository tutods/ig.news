import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Content, HeroSection } from 'styles/pages/home.styles';
import { SubscriptionButton } from 'components/ui/buttons/SubscriptionButton';
import { stripe } from 'services/stripe';
import { envConfig } from 'config/env.config';
import Image from 'next/image';

type Props = {
	product: { priceId: string; amount: string };
};

const Home: NextPage<Props> = ({ product }) => {
	return (
		<>
			<Head>
				<title>ig.news</title>
			</Head>
			<main>
				<HeroSection>
					<Content>
						<div>
							<h3>
								<span>👏</span> Hey, welcome
							</h3>
							<h1>
								News about the <span>React</span> world
							</h1>
							<p>
								Get access to all the publications
								<br />
								<span>for {product.amount} month</span>
							</p>

							<SubscriptionButton priceId={product.priceId} />
						</div>

						<div>
							<Image
								src={'/media/women.svg'}
								alt={'Girl Coding'}
								width={334}
								height={520}
							/>
						</div>
					</Content>
				</HeroSection>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve(envConfig.stripe.priceKey);

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price.unit_amount! / 100),
	};

	return {
		props: {
			product,
		},
		revalidate: 60 * 60 * 24, // 24 hours (60 seconds, 60 minutes, 24 hours)
	};
};

export default Home;
