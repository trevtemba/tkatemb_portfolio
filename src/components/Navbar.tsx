'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathName = usePathname();

  const navItems = [
    { href: '/', icon: '/icons/home.svg', alt: 'Home' },
    { href: '/projects', icon: '/icons/projects.svg', alt: 'Projects' },
    { href: '/experience', icon: '/icons/experience.svg', alt: 'Experience' },
    { href: '/contact', icon: '/icons/contact.svg', alt: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
                    bg-neutral-800 border border-gray-700 
                    rounded-2xl shadow-lg
                    px-4 py-5 flex justify-around items-center 
                    w-[92%] max-w-md"
    >
      {navItems.map(({ href, icon, alt }) => {
        const isActive = pathName === href;
        return (
          <Link
            key={href}
            href={href}
            className="relative flex items-center justify-center"
          >
            {isActive && (
              <span className="absolute w-10 h-10 rounded-full bg-neutral-700" />
            )}
            <Image
              src={icon}
              alt={alt}
              width={24}
              height={24}
              className={`relative transition ${
                isActive
                  ? 'brightness-100'
                  : 'brightness-75 hover:brightness-200'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};
