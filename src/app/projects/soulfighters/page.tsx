import Image from "next/image";

interface projProps {
  onBack: () => void;
}

export default function SoulFighters({ onBack }: projProps) {
  const projectData = {
    name: "Soul Fighters",
    role: "Lead Developer",
    desc: "Hair product recommendation mobile app",
    tags: ["Go (Gin)", "TypeScript (React Native)", "OpenAI API"],
    icon: "/icons/explosionlabs.png",
    github: "https://github.com/trevtemba/ArenaFightingGame",
    state: "In-Development",
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
        <div className="flex flex-row items-center bg-blue-900/40 text-white gap-2 rounded-full px-4 py-0.5">
          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
          <span className="text-cyan-600 text-sm">{projectData.state}</span>
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
              A Roblox game that combines the chaotic and competitive
              environment of an arena fighter with the strategic and economic
              elements of a round-based autobattler.
            </p>
            <p>
              <span>Soul fighters</span> is a culmination of the aforementioned
              game genres that aims to provide players with an experience that
              requires them to not only master in-game combat mechanics, but
              also outplay their opponents with good economy and champion
              builing strategy
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            Features
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2 mt-2">
              Modular entity framework for handling players, enemies, and dummy
              entities (OOP)
            </li>
            <li className="pl-2 mt-2">Combat/Movement system</li>
            <li className="pl-2 mt-2">
              Teir-based loot drop system that supports component drops/gold
              drops
            </li>
            <li className="pl-2 mt-2">
              Training mode that allows player to test combat/movement in a
              sandbox environment
            </li>
            <li className="pl-2 mt-2">AI enemy system</li>
            <li className="pl-2 mt-2">
              Champion models, skeleton HUD, animations, VFX, and SFX
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What I'm Learning
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2">
              How to design and build a scalable object-oriented system in a
              game context
            </li>
            <li className="pl-2 mt-2">
              How to optimize client-server communication by condensing data
              sent between server and client
            </li>
            <li className="pl-2 mt-2">
              How to delegate heavy-tasks such as physics simulations/animation
              handling/effect rendering to client rather than server
            </li>
            <li className="pl-2 mt-2">
              How to build NPC state machines with simple actions (chasing,
              attacking, stunned, etc)
            </li>
            <li className="pl-2 mt-2">
              How to simplify complex user and NPC states by delegating state
              handlers to each of the entities, significantly reducing the time
              it takes to add new actions/states
            </li>
            <li className="pl-2 mt-2">
              How to design and implement game-loops that incentivize players to
              continue playing
            </li>
            <li className="pl-2 mt-2">
              How to initiate end-user testing and translating feedback into
              feature addage/refinement
            </li>
            <li>
              How to use Blender to make various game assets (models,
              animations, graphics)
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="bg-neutral-900 px-4 py-2 text-center border border-neutral-700/80 shadow rounded-lg tracking-wider">
            What's Next?
          </span>
          <ul className="list-disc list-outside pl-8 p-4 py-6 tracking-widest text-neutral-200 bg-neutral-900/40 border border-neutral-700/80 shadow rounded-lg">
            <li className="pl-2 mt-2">
              Programming in-game logic for loot types: component anvil, item
              anvil, artifact anvil.
            </li>
            <li className="pl-2 mt-2">
              Adding augment rounds (player can choose between 3 passive
              abilities for the remainder of the game)
            </li>
            <li className="pl-2 mt-2">
              Adding carousel rounds (players race to obtain various in-game
              loot off a carousel)
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
