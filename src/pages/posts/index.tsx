import { RichText } from 'prismic-dom';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ShortPost } from '~/@types/Post';
import { PostCard } from '~/components/ui/cards/PostCard';
import { getPrismicClient } from '~/services/prismic';
import { Container } from '~/styles/pages/posts/posts.styles';

type Props = {
	posts: ShortPost[];
};

const Posts: NextPage<Props> = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Posts • ig.news</title>
			</Head>

			<Container>
				<section>
					{posts.map((post) => (
						<PostCard post={post} key={post.slug} />
					))}
				</section>
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const client = getPrismicClient();

	const response = await client.getAllByType('post', {
		fetch: ['post.title', 'post.content'],
	});

	const posts = response.map((post) => {
		return {
			slug: post.uid,
			title: RichText.asText(post.data.title),
			excerpt:
				post.data.content.find((content: any) =>
					[
						'heading3',
						'paragraph',
						'heading4',
						'heading5',
						'heading6',
					].includes(content.type)
				).text ?? '',
			updatedAt: new Date(post.last_publication_date).toLocaleDateString(
				'pt-PT',
				{
					day: '2-digit',
					month: 'long',
					year: 'numeric',
				}
			),
		};
	});

	return {
		props: {
			posts,
		},
	};
};

export default Posts;
