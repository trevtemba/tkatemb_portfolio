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
            <span className="text-gray-300/80">Contact Info</span>
          </div>
          <div className="flex flex-row items-center bg-green-900/40 text-white gap-2 rounded-full px-4 py-0.5">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span className="text-green-600 text-sm">Available</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="flex w-full justify-between mb-4 items-stretch gap-4 px-5">
          {/* First half */}
          <div className="flex-[1] flex flex-col align-left">
            {/* Social Icons */}
            <div className="flex flex-col mt-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 brightness-80 transition">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={16}
                    height={16}
                    className=""
                  />
                  <span className="">Email</span>
                </div>
                <a
                  href="mailto:katemba.trev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
                >
                  katemba.trev@gmail.com
                  <Image
                    src="/icons/newtab.svg"
                    alt="Link"
                    width={12}
                    height={12}
                    className=""
                  />
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 brightness-80 transition">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className=""
                  />
                  <span className="">LinkedIn</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/trevor-katemba-6b9837262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
                >
                  trevor-katemba
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
          </div>
        </div>
        <div className="w-full flex flex-col bg-neutral-700/40 rounded-2xl py-5 px-5 gap-4">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-gray-300/80">About Me</span>
            </div>
          </div>
          {/* Project card */}
          <div className="flex w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
            {/*  Image */}
            <div className="flex-[3] flex flex-col items-center flex-shrink-0">
              <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src="/icons/aboutme3.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-[7] h-26 flex flex-col justify-between">
              {/* Bio section */}
              <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold">Hey, I'm Trev</h1>
                {/* <div className="flex flex-row gap-1">
                  <Image
                    src="/icons/education.svg"
                    alt="Link"
                    width={12}
                    height={12}
                    className="brightness-80"
                  />
                  <h2 className="text-gray-300/90 text-left text-sm">
                    Computer Science | AI
                  </h2>
                </div> */}
                <div className="flex flex-row gap-1.5">
                  <Image
                    src="/icons/location.svg"
                    alt="Link"
                    width={8}
                    height={8}
                    className="brightness-60"
                  />
                  <h2 className="text-gray-300/60 text-left text-sm">
                    Clemson, South Carolina
                  </h2>
                </div>
              </div>
              <p className="text-xs brightness-95">
                "I could tell you a joke in UDP, but you wouldn't get it..."
                <span className="italic block text-right text-neutral-500 text-[0.60rem]">
                  {" "}
                  ~gamergeek2000
                </span>
              </p>
            </div>
          </div>
          <p className="text-sm tracking-wider text-justify text-neutral-200 bg-neutral-800 rounded-2xl px-4 pt-2 pb-4 shadow border border-neutral-700">
            <span className="font-bold text-xl">D</span>espite growing up in the
            small town of <span className="italic">Boiling Springs, SC</span>,
            I’ve always carried big dreams of serving and inspiring others
            through creativity. Software felt like the perfect path for me early
            on, as it gave me a limitless outlet to explore ideas and bring them
            to life. I grew enamored by the realization that with{" "}
            <span className="italic">just a laptop and my imagination</span>, I
            could build software technology that inspires kindred spirits and
            helps those in need.
            <br />
          </p>
        </div>
      </div>
    </main>
  );
}
