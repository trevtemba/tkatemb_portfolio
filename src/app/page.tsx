import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
         pt-4 pb-1 flex flex-col gap-4 items-center
         px-1
          w-[92%] max-w-md
        "
      >
        {/* Name and title */}
        <div className="w-full flex justify-between items-center px-5">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300/80">Fullstack Engineer</span>
          </div>
          <div className="flex flex-row items-center bg-green-900/40 text-white gap-2 rounded-full px-4 py-0.5">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span className="text-green-600 text-sm">Available for Hire</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="flex w-full justify-between mb-4 items-stretch gap-4 px-5">
          {/* First half */}
          <div className="flex-[7] flex flex-col justify-between">
            <h1 className="text-white text-2xl font-bold -mb-2">
              Trevor Katemba
            </h1>

            {/* Bio section */}
            <p className="text-gray-300/80 font-extralight text-left text-xs tracking-wider">
              Transforming abstract ideas into elegant, functional software
              solutions!
            </p>
            <div className="flex flex-row gap-2">
              <a
                href="/tkatemb_resume_v4_final.pdf"
                download
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                Resume
                <Image
                  src="/icons/download.svg"
                  alt="Download"
                  width={12}
                  height={12}
                  className=""
                />
              </a>
              <a
                href="https://github.com/trevtemba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                GitHub
                <Image
                  src="/icons/newtab.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className=""
                />
              </a>
            </div>
          </div>
          {/* Seconde half */}
          <div className="flex-[3] flex flex-col items-center flex-shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
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
        {/* CURRENT PROJECT */}
        <div className="w-full flex flex-col bg-neutral-700/40 rounded-2xl py-5 px-5 gap-5">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center bg-cyan-900/50 text-white gap-2 rounded-full px-4 py-0.5">
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-500 text-sm">Current Projects</span>
            </div>
            <Link
              href={"/projects"}
              className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white gap-2 rounded-sm px-4 py-2 border border-gray-600 shadow transition"
            >
              <span className="text-white text-xs">View All</span>
              <Image
                src="/icons/view.svg"
                alt="Profile"
                width={12}
                height={12}
              />
            </Link>
          </div>
          {/* Project card */}
          <div className="flex w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
            {/*  Image */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/tdsynnex.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-[7] h-26 flex flex-col justify-between">
              {/* Bio section */}
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold">TD Synnex</h1>
                <div className="flex flex-row gap-1">
                  <Image
                    src="/icons/developer.svg"
                    alt="Link"
                    width={12}
                    height={12}
                    className="brightness-60"
                  />
                  <h2 className="text-gray-300/60 italic text-left text-sm">
                    Software Engineer
                  </h2>
                </div>
                <span className="text-gray-200 font-extralight text-left text-xs tracking-wider">
                  Virtual chat assistant
                </span>
              </div>
              {/* skils */}
              <div className="flex flex-row gap-1">
                <span className="bg-neutral-900 px-4 py-1 rounded-full text-xs">
                  Gong.io
                </span>
                <span className="bg-neutral-900 px-4 py-1 rounded-full text-xs">
                  NexChat
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
            {/*  Image */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/explosionlabs.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-[7] h-26 flex flex-col justify-between">
              {/* Bio section */}
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold">Soul Fighters</h1>
                <div className="flex flex-row gap-1">
                  <Image
                    src="/icons/developer.svg"
                    alt="Link"
                    width={12}
                    height={12}
                    className="brightness-60"
                  />
                  <h2 className="text-gray-300/60 italic font-normal text-left text-sm">
                    Lead Developer
                  </h2>
                </div>
                <span className="text-gray-200 font-extralight text-left text-xs tracking-wider">
                  Round based fighting game
                </span>
              </div>
              {/* skils */}
              <div className="flex flex-row gap-1">
                <span className="bg-neutral-900 px-4 py-1 rounded-full text-xs">
                  Lua
                </span>
                <span className="bg-neutral-900 px-4 py-1 rounded-full text-xs">
                  Roblox Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
