import Link from 'next/link';
import '@material/web/button/filled-button.js';

const page = () => {
	return (
		<div className="hero">
			<h2>Next.js + Headless WordPress</h2>
			<p>
				This combination empowers seamless integration between Next.js and
				WordPress, providing dynamic and efficient web experiences.
			</p>
			<Link href="/blog" className="btn">
				Read Blog Posts
			</Link>
      <md-filled-button>Complete</md-filled-button>
		</div>
	);
};

export default page;
