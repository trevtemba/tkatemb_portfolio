"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathName = usePathname();

  const navItems = [
    { href: "/", icon: "/icons/homeicon.svg", alt: "Home" },
    { href: "/projects", icon: "/icons/projicon.svg", alt: "Projects" },
    { href: "/experience", icon: "/icons/workicon.svg", alt: "Experience" },
    { href: "/contact", icon: "/icons/personal.svg", alt: "Contact" },
  ];

  const positions = ["1%", "25%", "50%", "74%"]; // left offsets for each navbutton
  const activeIndex = navItems.findIndex((item) => item.href === pathName);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-neutral-800 border border-gray-700 rounded-full shadow-lg px-1 py-4 flex justify-around items-center w-[92%] max-w-md z-90">
      {/* Sliding pill */}
      <div
        className="absolute inset-y-1 w-[25%] bg-neutral-600/50 rounded-full z-0 transition-all"
        style={{ left: positions[activeIndex] }}
      ></div>

      {navItems.map(({ href, icon, alt }) => {
        const isActive = pathName === href;
        return (
          <Link
            key={href}
            href={href}
            className="relative flex[5] items-center justify-center z-10"
          >
            <Image
              src={icon}
              alt={alt}
              width={24}
              height={24}
              className={`transition ${isActive ? "brightness-100" : "brightness-75 hover:brightness-200"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
};
