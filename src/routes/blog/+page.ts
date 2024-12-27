import type { PageLoad } from './$types';

interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
}

export const load: PageLoad = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('../../content/blog/*.md')).map(async ([path, resolver]) => {
			const slug = path.split('/').pop()?.replace('.md', '');
			const post = await resolver();
			return {
				slug,
				...post.metadata
			};
		})
	);

	return {
		posts: posts
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
			.map((post) => ({
				slug: post.slug,
				title: post.title,
				date: post.date,
				description: post.description
			}))
	};
};
