import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { RichText } from 'prismic-dom';

import { Post } from '~/@types/Post';
import { getPrismicClient } from '~/services/prismic';

import { StyledPostContainer, StyledPostContent } from '~/styles/pages/posts/post.styles';

type Props = { post: Post };

const SinglePlost: NextPage<Props> = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.title} | ig.news</title>
			</Head>

			<StyledPostContainer>
				<article>
					<h1>{post.title}</h1>
					<time>{post.updatedAt}</time>
				</article>
				<StyledPostContent dangerouslySetInnerHTML={{ __html: post.content }} />
			</StyledPostContainer>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
	const session = await getSession({ req });
	const { slug } = params!;

	const client = getPrismicClient();

	const response = await client.getByUID('post', String(slug), {});

	const post = {
		slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content),
		updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-PT', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		})
	};

	return {
		props: {
			post
		}
	};
};

export default SinglePlost;