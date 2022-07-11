import Link from 'next/link';

import { ShortPost } from '~/@types/Post';

import { LinkContainer } from './styles';

type Props = {
	post: ShortPost;
};

const PostCard = ({ post }: Props) => {
	return (
		<Link href={`${post.slug}`}>
			<LinkContainer>
				<time>{post.updatedAt}</time>
				<h3>{post.title}</h3>
				<p>{post.excerpt}</p>
			</LinkContainer>
		</Link>
	);
};

export { PostCard };
