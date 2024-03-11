export const dynamicParams = true;

export async function generateStaticParams() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages`
    );
    const pages = await response.json();

    return pages.map((page) => ({
        pageSlug: page.slug,
    }));
}

async function getPageBySlug(slug) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=${slug}`
	);
	const page = await response.json();
	return page.length ? page[0] : null;
}

const page = async ({ params }) => {
	const page = await getPageBySlug(params.slug);

	if (!page) {
		return <div>Loading...</div>;
	}

	return (
		<div className="single-blog-page">
			<h2>{page.title.rendered}</h2>
			<div className="blog-page">
				<p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p>
			</div>
		</div>
	);
};

export default page;
