import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { RichText } from 'prismic-dom';
import { useEffect } from 'react';

import { Post } from '~/@types/Post';
import { SubscriptionButton } from '~/components/ui/buttons/SubscriptionButton';
import { getPrismicClient } from '~/services/prismic';

import { StyledPostContainer, StyledPostContent } from '~/styles/pages/posts/previewPost.styles';

type Props = { post: Post };

const SinglePlostPreview: NextPage<Props> = ({ post }) => {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session?.activeSubscription) {
			router.push(`/posts/${post.slug}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session]);

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

				<SubscriptionButton css={{ mt: '$48' }} size={'block'} />
			</StyledPostContainer>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const client = getPrismicClient();

	const response = await client.getByUID('post', String(params?.slug), {});

	const post = {
		slug: params?.slug,
		title: RichText.asText(response.data.title),
		content: RichText.asHtml(response.data.content.splice(0, 3)),
		updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-PT', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		})
	};

	return {
		props: {
			post
		},
		revalidate: 60 * 60 * 24 // 24 hours (60 seconds, 60 minutes, 24 hours)
	};
};

export default SinglePlostPreview;
