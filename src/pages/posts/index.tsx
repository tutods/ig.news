import { PostCard } from 'components/ui/cards/PostCard';
import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'styles/pages/posts/posts.styles';

const Posts: NextPage = () => {
	return (
		<>
			<Head>
				<title>Posts • ig.news</title>
			</Head>

			<Container>
				<section>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</section>
			</Container>
		</>
	);
};

export default Posts;
