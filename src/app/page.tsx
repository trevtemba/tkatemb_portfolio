import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
          px-6 py-6 flex flex-col items-center
          w-[92%] max-w-md
        "
      >
        {/* Top section: image + name/title */}
        <div className="flex items-center w-full mb-4">
          {/* Glass circle around profile picture */}
          <div className="rounded-full bg-white/5 p-1 shadow-lg flex items-center justify-center">
            <Image
              src="/icons/headshot.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>

          {/* Name and title */}
          <div className="ml-4 flex flex-col">
            <h1 className="text-white text-2xl font-bold">Trevor Katemba</h1>
            <span className="text-gray-300 text-sm">Fullstack Developer</span>
            {/* Social Icons */}
            <div className="flex mt-2 gap-4 items-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-125 transition"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:brightness-125 transition"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="mailto:youremail@example.com"
                className="hover:brightness-125 transition"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bio section */}
        <p className="text-gray-300 text-left">
          I am a Computer Science (B.S.) student with co-op experience as a Data
          Analyst at Accenture, where I wrote Oracle SQL scripts to configure
          client Enterprise-Asset-Management software environments, as well as
          built KPIs to track AWS CloudWatch error logs in PowerBI. I have built
          a full-stack mobile application using Gin, and React Native (Expo)
          that uses the Open AI API to recommend hair products to end-users
          based on their hair characteristics. I enjoy building projects from
          the ground up and value modular OOP architecture paired with a rich
          user experience. Outside of academics and work, I pursue projects in
          game development, music production, and other creative outlets.
        </p>
      </div>
    </main>
  );
}
