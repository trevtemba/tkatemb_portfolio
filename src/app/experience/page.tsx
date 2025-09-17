"use client";

import Image from "next/image";
import { useState } from "react";

export default function Experience() {
  const workExperience = [
    {
      name: "Accenture",
      role: "IX Analyst",
      icon: "/icons/accenturelogo.png",
      duration: ["Fall '23", "Spring '23", "Summer '24"],
      description: [
        "Wrote Oracle SQL scripts to create custom database rules and manipulations within client's EAM environments.",
        "Designed & implemented a data-pipeline (using Infor ION) that fetched client vehicle data (via REST API), spliced and converted the data into XML BODs, and then imported the BODs into the client's EAM environment.",
        "Built a dashboard & KPI with Microsoft PowerBI that displayed cloudwatch error logs and tracked the error count per business day.",
      ],
      technologies: [
        "Oracle SQL",
        "PowerBI",
        "Infor Ion",
        "HxGN EAM",
        "Javascript",
      ],
    },
    {
      name: "TD Synnex",
      role: "Software Engineer (Capstone)",
      icon: "/icons/tdsynnex.png",
      duration: ["Fall '25"],
      description: [
        "Evaluating functionality of GONG to develop strategy for presenting its output data blobs in PowerBI dashboard, using Microsoft AI tools.",
        "Audit TD Synnex's NexChat AI chatbot to determine refinements to its image-data ingestion",
        "Measure time and resources saved via chatbot interactions and internal-client response quality. ",
      ],
      technologies: ["GONG", "Azure AI Foundry", "NexChat", "PowerBI"],
    },
  ];

  const education = [
    {
      institution: "Clemson",
      degree: "Computer Science (B.S.) | AI",
      icon: "/icons/clemsonlogo.jpg",
      duration: ["May 2026"],
      cousework: {
        "Cloud Computing":
          "Extensively learning cloud architecture on AWS through hands-on labs",
        "Artificial Intelligence":
          "Game-based projets that applied reinforcement learning and Markov decision processes",
        "Machine Learning":
          "Learning practical techniques to train and test ML models using Python",
      },
    },
  ];

  const [activeMoreInfos, setActiveMoreInfos] = useState<number | null>(null);

  const handleActiveMoreInfo = (index: number) => {
    if (activeMoreInfos === index) {
      setActiveMoreInfos(null);
    } else setActiveMoreInfos(index);
  };
  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
         pt-4 pb-1 flex flex-col gap-2 items-center
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
        <div className="flex flex-col w-full justify-between mt-2 mb-4 items-stretch gap-2 px-5 py-2">
          {/* Experience card */}
          {workExperience.map(
            (
              { name, role, icon, duration, description, technologies },
              index,
            ) => (
              <div
                key={index}
                className="flex flex-col w-full items-stretch gap-4 px-4 py-4 bg-neutral-900/50 border border-neutral-700 shadow rounded-xl"
              >
                <div className="flex flex-row w-full justify-between items-stretch gap-4 bg-neutral-900/50">
                  {/* Seconde half */}
                  <div className="flex-[2] flex flex-col items-start flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-neutral-700/20 shadow-lg flex items-center justify-center">
                      <Image
                        src={icon}
                        alt="Profile"
                        width={96}
                        height={96}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  {/* First half */}
                  <div className="flex-[7] flex flex-col justify-between">
                    <h1 className="text-white text-2xl font-bold">{name}</h1>

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
                        {role}
                      </h2>
                    </div>
                    {/* Bio section */}
                    <button
                      className="flex flex-row justify-between text-neutral-300 text-sm bg-neutral-950 hover:bg-neutral-950/50 shadow px-4 py-2 rounded-lg"
                      onClick={() => handleActiveMoreInfo(index)}
                    >
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
                {activeMoreInfos === index && (
                  <div className="flex flex-col gap-4 px-4 py-4 bg-neutral-900/80 rounded-lg">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/icons/time.svg"
                          alt="Link"
                          width={12}
                          height={12}
                          className="brightness-60"
                        />
                        <span>Duration</span>
                      </div>
                      <div className="flex flex-row gap-2">
                        {duration.map((date, index) => (
                          <span
                            key={index}
                            className="px-4 py-1 bg-neutral-950 rounded-full"
                          >
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col pb-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/icons/workicon.svg"
                          alt="Link"
                          width={12}
                          height={12}
                          className="brightness-60"
                        />
                        <span>Description</span>
                      </div>
                      <ul className="list-disc list-outside px-4 tracking-widest text-neutral-200 text-sm rounded-lg">
                        {description.map((desc, index) => (
                          <li key={index} className="pl-1 pt-2">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/icons/developer.svg"
                          alt="Link"
                          width={12}
                          height={12}
                          className="brightness-60"
                        />
                        <span>Technologies Used</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((technology, index) => (
                          <span
                            key={index}
                            className="px-4 py-1 bg-neutral-950 rounded-full"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
        {/* Name and title */}
        <div className="w-full flex justify-between items-center px-5">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300/80">Education</span>
          </div>
        </div>
        {/* Top section: image + name/title */}
        <div className="flex flex-col w-full justify-between mt-2 mb-4 items-stretch gap-2 px-5 py-2">
          {/* Experience card */}
          {education.map(
            ({ institution, degree, icon, duration, cousework }, index) => (
              <div
                key={index}
                className="flex flex-col w-full items-stretch gap-4 px-4 py-4 bg-neutral-900/50 border border-neutral-700 shadow rounded-xl"
              >
                <div className="flex flex-row w-full justify-between items-stretch gap-4 bg-neutral-900/50">
                  {/* Seconde half */}
                  <div className="flex-[2] flex flex-col items-start flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-neutral-700/20 shadow-lg flex items-center justify-center">
                      <Image
                        src={icon}
                        alt="Profile"
                        width={96}
                        height={96}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  {/* First half */}
                  <div className="flex-[7] flex flex-col justify-between">
                    <h1 className="text-white text-2xl font-bold">
                      {institution}
                    </h1>

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
                        {degree}
                      </h2>
                    </div>
                    {/* Bio section */}
                    <button
                      className="flex flex-row justify-between text-neutral-300 text-sm bg-neutral-950 hover:bg-neutral-950/50  shadow px-4 py-2 rounded-lg"
                      onClick={() => handleActiveMoreInfo(index + 10)}
                    >
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
                {activeMoreInfos === index + 10 && (
                  <div className="flex flex-col gap-4 px-4 py-4 bg-neutral-900/80 rounded-lg">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/icons/time.svg"
                          alt="Link"
                          width={12}
                          height={12}
                          className="brightness-60"
                        />
                        <span>Graduation Date</span>
                      </div>
                      <div className="flex flex-row gap-2">
                        {duration.map((date, index) => (
                          <span
                            key={index}
                            className="px-4 py-1 bg-neutral-950 rounded-full"
                          >
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col pb-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/icons/workicon.svg"
                          alt="Link"
                          width={12}
                          height={12}
                          className="brightness-60"
                        />
                        <span>Interesting Coursework</span>
                      </div>
                      <ul className="list-disc list-outside px-4 tracking-widest text-neutral-200 text-sm rounded-lg">
                        {Object.entries(cousework).map(
                          ([course, desc], index) => (
                            <li key={index} className="pl-1 pt-2">
                              <span className="italic font-bold">
                                {course}:{" "}
                              </span>

                              <span className="">{desc}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </div>
        {/* RELEVANT SKILLS */}
        <div className="w-full flex flex-col bg-neutral-700/40 rounded-2xl py-5 px-5 gap-4">
          {/* Header */}
          <div className="w-full flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-gray-300/80">Relevant Skills</span>
            </div>
          </div>
          {/* Programming Languages */}
          <div className="w-full flex items-center justify-center mt-4">
            <div className="">
              <span className="text-gray-300/80 bg-neutral-900 rounded-full px-12 py-2 border text-sm border-neutral-700 shadow">
                Programming Languages
              </span>
            </div>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              {/* Skill */}
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Java
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-violet-600 h-full rounded-full w-3/4"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-violet-500 font-normal text-right text-sm">
                  Advanced
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Lua
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-violet-600 h-full rounded-full w-4/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-violet-500 font-normal text-right text-sm">
                  Advanced
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Go
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-3/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  TypeScript
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-1/2"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Python
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/3"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          {/* Frameworks and libraries */}
          <div className="w-full flex items-center justify-center mt-4">
            <div className="">
              <span className="text-gray-300/80 bg-neutral-900 rounded-full px-12 py-2 border text-sm border-neutral-700 shadow">
                Frameworks | Libaries
              </span>
            </div>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              {/* Skill */}
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Spring Boot
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/3"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Gin (Go)
                </span>
                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/3"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  React
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-4/6"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Tailwind
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-3/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Next.js
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Python ML
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
          {/* Dev-Ops */}
          <div className="w-full flex items-center justify-center mt-4">
            <div className="">
              <span className="text-gray-300/80 bg-neutral-900 rounded-full px-12 py-2 border text-sm border-neutral-700 shadow">
                Dev-Ops
              </span>
            </div>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full justify-between items-stretch gap-4 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              {/* Skill */}
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  AWS
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-violet-600 h-full rounded-full w-2/3"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-violet-600 font-normal text-right text-sm">
                  Advanced
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Docker
                </span>
                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/3"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Kubernetes
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-green-500 h-full rounded-full w-4/6"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-green-400 font-normal text-right text-sm">
                  Familiar
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Tailwind
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-3/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Next.js
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
            {/* Skill */}
            <div className="flex flex-col w-full justify-between items-stretch gap-2 bg-neutral-800 px-4 py-4 rounded-2xl border border-neutral-700 shadow">
              <div className="flex flex-row items-center gap-2 w-full">
                <span className="flex-[5] text-gray-300/80 font-normal text-left text-sm">
                  Python ML
                </span>

                {/* Progress bar container */}
                <div className="relative flex-[10] bg-neutral-900 rounded-full h-4 px-1 py-1 overflow-hidden">
                  {/* Fill (progress level) */}
                  <div className="bg-blue-500 h-full rounded-full w-2/5"></div>

                  {/* Divider at 1/3 */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-neutral-900"></div>
                  {/* Divider at 2/3 */}
                  <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-neutral-900"></div>
                </div>

                <span className="flex-[5] text-blue-400 font-normal text-right text-sm">
                  Intermediate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
