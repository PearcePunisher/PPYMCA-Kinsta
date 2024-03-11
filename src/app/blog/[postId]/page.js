// Indicates that the page uses dynamic routing parameters
export const dynamicParams = true;

// Fetches a list of all posts from the WordPress API
export async function generateStaticParams() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
	);
	const posts = await response.json();

	// Returns an array of objects containing the post IDs as strings
	return posts.map((post) => ({
		postId: post.id.toString(),
	}));
}

// Fetches a single post from the WordPress API based on the provided post ID
async function getSinglePost(postId) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${postId}`
	);
	const post = await response.json();
	return post;
}

// Renders the single blog page
const page = async ({ params }) => {
	// Fetches the post data for the current post ID
	const post = await getSinglePost(params.postId);

	// If the post is not found, display a loading message
	if (!post) {
		return <div>Loading...</div>;
	}

	// Renders the blog post content
	return (
		<div className="single-blog-page">
			<h2>{post.title.rendered}</h2>
			<div className="blog-post">
				<p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
			</div>
		</div>
	);
};

// Exports the page component
export default page;
