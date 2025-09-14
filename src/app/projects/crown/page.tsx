import Image from "next/image";

export default function Crown() {
  const projectData = {
    name: "Crown",
    role: "Lead Developer",
    desc: "Hair product recommendation mobile app",
    tags: ["Go (Gin)", "TypeScript (React Native)", "OpenAI API"],
    icon: "/icons/crownlogo.png",
    github: "https://github.com/camscott16/Crown",
    video: undefined,
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-row gap-4">
        <div className="flex w-full justify-between items-stretch gap-4">
          {/*  Image */}
          <div className="flex-[2] flex flex-col items-center flex-shrink-0">
            <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700 shadow-lg flex items-center justify-center border border-neutral-100/15">
              <Image
                src={projectData.icon}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          {/* Details */}
          <div className="flex-[8] h-26 flex flex-col justify-between">
            {/* Bio section */}
            <div className="flex flex-col">
              <h1 className="text-white text-2xl text-left font-bold">
                {projectData.name}
              </h1>
              <div className="flex flex-row gap-1">
                <Image
                  src="/icons/developer.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className="brightness-60"
                />
                <h2 className="text-gray-300/80 italic font-normal text-left text-lg">
                  {projectData.role}
                </h2>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              {" "}
              <a
                href={projectData.github}
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
              </a>{" "}
              <a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                Video Demo
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
      <div className="w-full flex flex-col gap-2 mt-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          Description
        </span>
        <div className="flex flex-col gap-2 px-4 py-4 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <p>
            An IOS/Android app that recommends hair-care products to users based
            on their curated "Hair Profile".
          </p>
          <p>
            <span>Crown's</span> purpose is to educate users on effective hair
            maintenance while streamlining the process of selecting personalized
            products and care routines.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          Features
        </span>
        <ul className="list-disc list-inside px-4 py-4 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li>JWT Authentication</li>
          <li>Multiple Hair Profile Support</li>
          <li>Hair Profile Creation Quiz</li>
          <li>Hair Product Recommendation Engine</li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          Showcase
        </span>
        {/* <ul className="list-disc list-inside px-4 py-4 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li>JWT Authentication</li>
          <li>Multiple Hair Profile Support</li>
          <li>Hair Profile Creation Quiz</li>
          <li>Hair Product Recommendation Engine</li>
        </ul> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          Frequently Asked Questions
        </span>
        {/* <ul className="list-disc list-inside px-4 py-4 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li>JWT Authentication</li>
          <li>Multiple Hair Profile Support</li>
          <li>Hair Profile Creation Quiz</li>
          <li>Hair Product Recommendation Engine</li>
        </ul> */}
      </div>
    </div>
  );
}
