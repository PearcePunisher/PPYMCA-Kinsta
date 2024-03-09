import Navbar from './navbar';
import './globals.css';

export const metadata = {
	title: 'Pikes Peak YMCA - Next.js w/ WordPress',
	description: 'Built by Wicked Think Marketing',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
