type ShortPost = {
	slug: string;
	title: string;
	excerpt: string;
	updatedAt: string;
};

type Post = {
	slug: string;
	title: string;
	content: string;
	updatedAt: string;
};

export { Post, ShortPost };
