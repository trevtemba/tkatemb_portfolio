import Image from "next/image";

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
            <span className="text-gray-300/80">Industry Experience</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="flex flex-col w-full justify-between mb-2 items-stretch gap-2 px-5 py-2">
          {/* Experience card */}
          <div className="flex w-full justify-between mb-4 items-stretch gap-4 px-4 py-4 bg-neutral-900/50 border border-neutral-700 shadow rounded-xl">
            {/* Seconde half */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-neutral-700/20 p-2 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/accenturelogo.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            {/* First half */}
            <div className="flex-[7] flex flex-col justify-between">
              <h1 className="text-white text-2xl font-bold">Accenture</h1>

              {/* Bio section */}
              <div className="flex flex-row gap-1.5">
                <Image
                  src="/icons/role.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className="brightness-60"
                />
                <h2 className="text-gray-300/80 font-normal text-left text-sm">
                  Data Analyst (Co-op)
                </h2>
              </div>
              {/* Bio section */}
              <button className="flex flex-row justify-between text-neutral-300 text-sm bg-neutral-950 hover:bg-neutral-950/50 border border-neutral-700/80 shadow px-4 py-2 rounded-lg">
                More Information
                <Image
                  src="/icons/arrowdown.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className="brightness-60"
                />
              </button>
            </div>
          </div>
          {/* Experience card */}
          <div className="flex w-full justify-between mb-4 items-stretch gap-4 px-4 py-4 bg-neutral-900/50 border border-neutral-700 shadow rounded-xl">
            {/* Seconde half */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-neutral-700/20 p-2 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/tdsynnex.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            {/* First half */}
            <div className="flex-[7] flex flex-col justify-between">
              <h1 className="text-white text-2xl font-bold">TD Synnex</h1>

              {/* Bio section */}
              <div className="flex flex-row gap-1.5">
                <Image
                  src="/icons/role.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className="brightness-60"
                />
                <h2 className="text-gray-300/80 font-normal text-left text-sm">
                  Software Engineer (Capstone)
                </h2>
              </div>
              {/* Bio section */}
              <button className="flex flex-row justify-between text-neutral-300 text-sm bg-neutral-950 hover:bg-neutral-950/50 border border-neutral-700/80 shadow px-4 py-2 rounded-lg">
                More Information
                <Image
                  src="/icons/arrowdown.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className="brightness-60"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Name and title */}
        <div className="w-full flex justify-between items-center px-5">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300/80">Education</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="flex flex-col w-full justify-between mb-2 items-stretch gap-2 px-5 py-2">
          {/* Experience card */}
          <div className="flex w-full justify-between mb-4 items-stretch gap-4 px-4 py-4 bg-neutral-900/50 border border-neutral-700 shadow rounded-xl">
            {/* Seconde half */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-neutral-700/20 p-2 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/clemsonlogo.jpg"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            {/* First half */}
            <div className="flex-[7] flex flex-col justify-between">
              <h1 className="text-white text-2xl font-bold">Clemson</h1>
            </div>
          </div>
        </div>
        {/* CURRENT PROJECT */}
        <div className="w-full flex flex-col bg-neutral-700/40 rounded-2xl py-5 px-5 gap-5">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-gray-300/80">Relevant Skills</span>
            </div>
          </div>
          {/* Project card */}
          <div className="flex w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
            {/*  Image */}
            <div className="flex-[6] flex flex-col items-center flex-shrink-0">
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
            <div className="flex-[12] h-26 flex flex-col justify-between">
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
                  Typescript
                </span>
                <span className="bg-neutral-900 px-4 py-1 rounded-full text-xs">
                  NextChat
                </span>
              </div>
            </div>
            <div className="flex-[1] flex h-26 flex-col justify-center align-center">
              <Image
                src="/icons/arrow_forward.svg"
                alt="Profile"
                width={24}
                height={24}
                className="brightness-50"
              />
            </div>
          </div>
          <div className="flex w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
            {/*  Image */}
            <div className="flex-[6] flex flex-col items-center flex-shrink-0">
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
            <div className="flex-[12] h-26 flex flex-col justify-between">
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
            <div className="flex-[1] flex h-26 flex-col justify-center align-center">
              <Image
                src="/icons/arrow_forward.svg"
                alt="Profile"
                width={24}
                height={24}
                className="brightness-50"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
