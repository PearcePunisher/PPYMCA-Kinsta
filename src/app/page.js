import Link from 'next/link';

const page = () => {
	return (
		<div className="hero">
			<h2>Next.js + Headless WordPress</h2>
			<p>
				This combination empowers seamless integration between Next.js and
				WordPress, providing dynamic and efficient web experiences.
			</p>
			<Link href="/blog" className="btn bg-sky-500 rounded-full text-white font-display">
				Read Blog Posts
			</Link>
		</div>
	);
};

export default page;
