import Image from "next/image";

interface projProps {
  onBack: () => void;
}

export default function Flux({ onBack }: projProps) {
  const projectData = {
    name: "Flux",
    role: "Lead Developer",
    desc: "CLI Application that gives timings for basic sound effects based on BPM",
    tags: ["Go"],
    icon: "/icons/fluxicon.png",
    github: "https://github.com/trevtemba/bpm-effects-timings",
    state: "Beta",
    video: undefined,
    images: [
      "/projectImages/crown/prev1.jpg",
      "/projectImages/crown/prev2.jpg",
      "/projectImages/crown/prev3.jpg",
      "/projectImages/crown/prev4.jpg",
    ],
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <button
          className="flex gap-2 bg-neutral-900 hover:bg-neutral-900/60 pl-6 pr-7 py-2 rounded-full"
          onClick={onBack}
        >
          <Image
            src="/icons/back.svg"
            alt="Link"
            width={12}
            height={12}
            className=""
          />
          <span className="text-gray-300">Back</span>
        </button>
        <div className="flex flex-row items-center bg-green-900/40 text-white gap-2 rounded-full px-4 py-0.5">
          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
          <span className="text-green-600 text-sm">{projectData.state}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-row gap-4">
          <div className="flex w-full justify-between items-stretch gap-4">
            {/*  Image */}
            <div className="flex-[3] shrink-0 rounded-lg flex items-center justify-center">
              <Image
                src={projectData.icon}
                alt="Profile"
                width={128}
                height={128}
                className="rounded-md object-cover"
              />
            </div>
            {/* Details */}
            <div className="flex-[7] flex flex-col justify-between">
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
                {/* <a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-between bg-neutral-700 hover:bg-neutral-700/80 text-white text-sm font-medium px-4 py-2 border border-gray-600 rounded-sm shadow transition gap-2"
              >
                Vid Demo
                <Image
                  src="/icons/newtab.svg"
                  alt="Link"
                  width={12}
                  height={12}
                  className=""
                />
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            Description
          </span>
          <div className="flex flex-col gap-2 px-6 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <p>
              A command-line application that provides on-beat timings in
              miliseconds.
            </p>
            <p>
              The purpose of Flux is to save music producers time in calculating
              "on-beat" timings for delays, reverbs, and compressors. I also
              just wanted to make a very simple application so I could release
              it on GitHub.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            Features
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2">
              Accepts BPM input then outputs recommended timings for basic
              effects.
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What I Learned
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2">
              How to build a platform independent CLI application (basic) with
              Go's standard libary
            </li>
            <li className="pl-2 mt-2">
              How to "release" an application on GitHub for Linux/Windows/Mac
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What's Next?
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2 mt-2">
              Make Flux automatically read any open DAW (Digital Audio
              Workstation) processes to retrieve BPM, instead of the user having
              to manually type it in
            </li>
            <li className="pl-2 mt-2">
              Leverage{" "}
              <a href="https://github.com/spf13/cobra" className="underline">
                Cobra
              </a>{" "}
              library to modernize Flux and make it more extendable
            </li>
            <li className="pl-2 mt-2">User interface overhaul</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            Showcase
          </span>
          <div className="flex flex-col w-full px-4 py-4 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-3xl gap-4">
            {projectData.images.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-1/2 rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Preview ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
