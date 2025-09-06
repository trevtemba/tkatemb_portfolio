import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
          px-6 py-6 flex flex-col gap-5 items-center
          w-[92%] max-w-md
        "
      >
        {/* Name and title */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300">Fullstack Engineer</span>
          </div>
          <div className="w-[150px] flex items-center bg-green-900/40 text-white gap-2 rounded-full px-3 py-0.5">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span className="text-green-600 text-sm">Available for Hire</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="w-[100%] flex w-full justify-between mb-4 items-stretch gap-4">
          {/* First half */}
          <div className="flex-[7] flex flex-col justify-between">
            <h1 className="text-white text-xl font-bold">Trevor Katemba</h1>

            {/* Bio section */}
            <p className="text-gray-300/80 font-extralight text-left text-xs tracking-wider">
              Transforming abstract ideas into elegant, functional software
              solutions!
            </p>
            <div className="flex flex-row gap-2">
              <a
                href="/Trevor_Katemba_2025_Resume_v3.pdf"
                download
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                <Image
                  src="/icons/download.svg"
                  alt="Download"
                  width={12}
                  height={12}
                  className=""
                />
                Resume
              </a>
              <a
                href="https://github.com/trevtemba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                <Image
                  src="/icons/link.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className=""
                />
                GitHub
              </a>
            </div>
          </div>
          {/* Seconde half */}
          <div className="flex-[3] flex flex-col items-center flex-shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full bg-white/5 p-1 shadow-lg flex items-center justify-center">
              <Image
                src="/icons/headshot.png"
                alt="Profile"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* Social Icons */
}
{
  /* <div className="flex mt-2 gap-4 items-center">
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
            </div> */
}
