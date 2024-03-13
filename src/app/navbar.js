'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Blog', path: '/blog' },
  { id: 3, name: 'Pages', path: '/pages' },
  { id: 4, name: 'Contact', path: '/pages/contact' },
];

const Navbar = () => {
	const pathname = usePathname();
	const isActive = (path) => path === pathname;

  return (
    <nav>
      <div className="navbar">
        <Link href="/">
          <span className="logo">
            <img src="http://ymcanext.kinsta.cloud/wp-content/uploads/2024/03/ymca-3.svg" alt="YMCA Logo" />
          </span>
        </Link>
        <ul>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={isActive(link.path) ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
