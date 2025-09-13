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
    <div className="w-full flex flex-row gap-4">
      <div className="flex w-full justify-between items-stretch gap-4">
        {/*  Image */}
        <div className="flex-[2] flex flex-col items-center flex-shrink-0">
          <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
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
              <h2 className="text-gray-300/60 italic font-normal text-left text-lg">
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
              Demo Vid
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
  );
}
