// Indicates that this page uses dynamic routing
export const dynamicParams = true;

// Fetches a list of all pages from the WordPress API
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages`
  );
  const pages = await response.json();

  // Returns an array of page IDs
  return pages.map((page) => ({
    pageId: page.slug.toString(),
  }));
}

// Fetches a single page from the WordPress API based on the page ID
async function getSinglepage(pageId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=${pageId}`
  );
  const pages = await response.json();
  return pages.length > 0 ? pages[0] : null;
}

// Renders the page component
const page = async ({ params }) => {
  // Fetches the page data for the current page ID
  const page = await getSinglepage(params.pageId);

  // If the page data is not found, display a loading message
  if (!page) {
    return <div>Loading...</div>;
  }

  // Renders the page component with the page data
  // return (
  //   <div className="single-blog-page">
  //     <h2>{page.title.rendered}</h2>
  //     <div className="blog-page">
  //       <p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="single-blog-page">
      {page && page.title ? <h2>{page.title.rendered}</h2> : <h2>Loading...</h2>}
      <div className="blog-page">
        {page && page.content ? <p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

// Exports the page component
export default page;
