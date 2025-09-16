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
    images: [
      "/projectImages/crown/prev1.jpg",
      "/projectImages/crown/prev2.jpg",
      "/projectImages/crown/prev3.jpg",
      "/projectImages/crown/prev4.jpg",
    ],
  };
  return (
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
              <a
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
              </a>
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
        <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li className="pl-2">JWT Authentication</li>
          <li className="pl-2 mt-2">Multiple Hair Profile Support</li>
          <li className="pl-2 mt-2">Hair Profile Creation Quiz</li>
          <li className="pl-2 mt-2">Hair Product Recommendation Engine</li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          What I Learned
        </span>
        <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li className="pl-2">
            How to build a cross-platform mobile app with React Native (Expo
            Framework)
          </li>
          <li className="pl-2 mt-2">
            How to build a REST API with <span>Go</span> using Gin web framework
          </li>
          <li className="pl-2 mt-2">
            How to design and implement a responsive and streamlined user
            interface on mobile
          </li>
          <li className="pl-2 mt-2">
            How to leverage OpenAI API to build a recommendation engine
          </li>
          <li className="pl-2 mt-2">
            How to containerize a web server using Docker, and then deploying
            the docker-image to deploy on a cloud-host (Railway)
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
          What's Next?
        </span>
        <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
          <li className="pl-2 mt-2">
            Fetch product data (images, price, links) to better display
            recommendation results
          </li>
          <li className="pl-2 mt-2">
            Develop amazon affiliate link generator for each recommended product
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
  );
}
