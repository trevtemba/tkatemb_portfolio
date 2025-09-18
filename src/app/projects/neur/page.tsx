import Image from "next/image";

interface projProps {
  onBack: () => void;
}

export default function Neur({ onBack }: projProps) {
  const projectData = {
    name: "Neur",
    role: "Lead Developer",
    desc: "Collegiate Entrepreneur social app",
    tags: ["Go"],
    icon: "/icons/neurlogo.png",
    github: "https://github.com/trevtemba/neur-frontend",
    state: "Postponed",
    video: undefined,
    images: [
      "/projectImages/neur/prev1.png",
      "/projectImages/neur/prev2.png",
      "/projectImages/neur/prev3.png",
      "/projectImages/neur/prev4.png",
      "/projectImages/neur/prev5.png",
      "/projectImages/neur/prev6.png",
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
        <div className="flex flex-row items-center bg-red-900/40 text-white gap-2 rounded-full px-4 py-0.5">
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
          <span className="text-red-600 text-sm">{projectData.state}</span>
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
              A booking site platform for hair and nail services in college
              communities
            </p>
            <p>
              The purpose of Neur is to provide a booking platform for college
              students that wish to sell or purchase hair/nail services. The
              project is postponed indefinitely, but the idea, design, and
              learning outcomes are worth sharing, as it's my first fullstack
              project
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            Features
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2">JWT authentication (Spring Security)</li>
            <li className="pl-2">
              Vendor profile actions (creating/modifying/deleting services)
            </li>
            <li className="pl-2">
              Rest API that supports basic CRUD operations on vendor data
            </li>
            <li className="pl-2">
              Rich user interface with minimalistic widgets and animations
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What I Learned
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2">
              How to use Java Spring Boot to build a REST API.
            </li>
            <li className="pl-2 mt-2">
              How to use Java Database Connectivity (JDBC) to connect to a
              PostgreSQL database and Hibernate (ORM) to manage entities and
              perform CRUD operations.
            </li>
            <li className="pl-2 mt-2">
              How to build a beautiful and interactive front-end with React and
              CSS.
            </li>
            <li className="pl-2 mt-2">
              How to containerize a REST API with docker and then deploy the
              docker image to a cloud hosting platform (Railway)
            </li>
            <li className="pl-2 mt-2">
              How to test API endpoints with Postman
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What's Next?
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2 mt-2">
              Finish the remainder of the web-app's front-end design
            </li>
            <li className="pl-2 mt-2">
              Finish functionality of vendor page-creation
            </li>
            <li className="pl-2 mt-2">
              Create client app context and add search functionality for vendor
              lookup
            </li>
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
                className="relative w-full aspect-2/1 rounded-lg overflow-hidden"
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
