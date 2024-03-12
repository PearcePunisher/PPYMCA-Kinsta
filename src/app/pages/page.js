import Link from 'next/link';

async function getpages() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages`
	);
	const pages = await response.json();
	return pages;
}

const pagePage = async () => {
	const pages = await getpages();

	return (
		<div className="blog-page">
			<h2>All Pages</h2>
			<p>All pages are fetched from WordPress via the WP REST API. This will likely change to being GraphQL soon.</p>
			<div className="posts">
				{pages.map((page) => {
					return (
						<Link href={`/pages/${page.slug}`} className="post" key={page.id}>
							<h3>{page.title.rendered}</h3>
							<p
								dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
							></p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default pagePage;
