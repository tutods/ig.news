import Link from 'next/link';

import { ShortPost } from '~/@types/Post';

import { LinkContainer } from './styles';

type Props = {
	post: ShortPost;
	preview?: boolean;
};

const PostCard = ({ post, preview = false }: Props) => {
	const link = preview ? `/posts/preview/${post.slug}` : `/posts/${post.slug}`;

	return (
		<Link href={link}>
			<LinkContainer>
				<time>{post.updatedAt}</time>
				<h3>{post.title}</h3>
				<p>{post.excerpt}</p>
			</LinkContainer>
		</Link>
	);
};

export { PostCard };
