import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-black-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center border-b-1 border-gray-800">
        <span className="text-xl font-bold">
          <span className="text-white">Trev</span>
          <span className="text-purple-500">Dev</span>
        </span>

        <div className="font-sans text-xs flex gap-12 p-2">
          <Link href="/" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-gray-300 transition">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
