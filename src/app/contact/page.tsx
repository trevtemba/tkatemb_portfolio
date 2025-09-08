import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
         pt-4 pb-1 flex flex-col gap-5 items-center
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
          <div className="flex-[1] flex flex-row align-left">
            {/* Social Icons */}
            <div className="flex flex-col mt-2 gap-4">
              <a
                href="mailto:katemba.trev@gmail.com"
                className="flex flex-row gap-2 brightness-75 hover:brightness-100 transition"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="hover:underline">katemba.trev@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/trevor-katemba-6b9837262/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 brightness-75 hover:brightness-125 transition"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="hover:underline">Trevor-Katemba</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col bg-neutral-700/40 rounded-2xl py-5 px-5 gap-5">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-gray-300/80">About me</span>
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
                <h1 className="text-white text-2xl font-bold">Hi, I'm Trev</h1>
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
                <div className="flex flex-row gap-2">
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
              <p className="text-xs">
                "I could tell you a joke in UDP, but you wouldn't get it..."
                <span className="italic block text-right text-neutral-500 text-[0.60rem]">
                  {" "}
                  ~gamergeek2000
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
