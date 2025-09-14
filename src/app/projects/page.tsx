"use client";

import { spawn } from "child_process";
import Image from "next/image";
import { Component, useState } from "react";
import Crown from "./crown/page";

export default function Projects() {
  const projects = [
    {
      name: "Crown",
      role: "Lead Developer",
      desc: "Hair product recommendation mobile app",
      tags: ["Go (Gin)", "TypeScript (React Native)", "OpenAI API"],
      icon: "/icons/crownlogo.png",
      comp: Crown,
    },
    {
      name: "Soul Fighters",
      role: "Lead Developer",
      desc: "Round-based fighting game",
      tags: ["Lua (Luau)", "Blender"],
      icon: "/icons/explosionlabs.png",
    },
    {
      name: "SFX Mapper",
      role: "Lead Developer",
      desc: "CLI tool that gives basic sound effects timings based on bpm",
      tags: ["Go"],
      icon: "/icons/flux.png",
    },
    {
      name: "Neur",
      role: "Lead Developer",
      desc: "Collegiate Entrepreneur social app",
      tags: ["Java (Sprint Boot)", "JavaScript (React)"],
      icon: "/icons/neurlogo.png",
    },
  ];

  type ProjectProps = {
    name: string;
    role: string;
    desc: string;
    tags: string[];
    icon: string;
  };

  const [selectedProject, setSelectedProject] = useState<string | undefined>(
    undefined,
  );
  const project = projects.find((p) => p.name === selectedProject);
  const SelectedProjectComponent = project?.comp;

  function SelectProject(projectName: string) {
    setSelectedProject(projectName);
  }

  function ProjectCard({ name, role, desc, tags, icon }: ProjectProps) {
    return (
      <button
        key={name}
        className="w-full flex flex-row px-4 py-4 bg-neutral-900 border hover:bg-neutral-900/70 gap-4 border-neutral-700 shadow rounded-2xl"
        onClick={() => SelectProject(name)}
      >
        <div className="flex-[9] flex flex-col items-stretch gap-4">
          <div className="flex w-full justify-between items-stretch gap-4">
            {/*  Image */}
            <div className="flex-[6] flex flex-col items-center flex-shrink-0">
              <div className="w-26 h-26 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-neutral-700/20 p-1 shadow-lg flex items-center justify-center border border-neutral-100/15">
                <Image
                  src={icon}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-[12] h-26 flex flex-col justify-between">
              {/* Bio section */}
              <div className="flex flex-col">
                <h1 className="text-white text-2xl text-left font-bold">
                  {name}
                </h1>
                <div className="flex flex-row gap-1">
                  <Image
                    src="/icons/developer.svg"
                    alt="Link"
                    width={12}
                    height={12}
                    className="brightness-60"
                  />
                  <h2 className="text-gray-300/60 italic font-normal text-left text-sm">
                    {role}
                  </h2>
                </div>
                <span className="text-gray-200 font-extralight text-left text-xs tracking-wider">
                  {desc}
                </span>
              </div>
            </div>
          </div>
          {/* skils */}
          <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-neutral-950 px-4 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-[1] flex h-full flex-col justify-center align-center">
          <Image
            src="/icons/arrow_forward.svg"
            alt="Profile"
            width={24}
            height={24}
            className="brightness-50"
          />
        </div>
      </button>
    );
  }

  return (
    <main className="flex justify-center mt-24">
      <div
        className="
          bg-neutral-800 border border-gray-700
          rounded-2xl shadow-lg
        pb-1 flex flex-col gap-4 items-center
         px-1
          w-[92%] max-w-md
        "
      >
        {!selectedProject && (
          <div className="w-full flex flex-col rounded-2xl py-4 px-5 gap-6">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-gray-300/80">Software Projects</span>
              </div>
            </div>

            {projects.map((item) => ProjectCard({ ...item }))}
          </div>
        )}
        {selectedProject && (
          <div className="w-full flex flex-col rounded-2xl py-4 px-5 gap-6">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-gray-300/80">Project Info</span>
              </div>
              <div className="flex flex-row items-center bg-green-900/40 text-white gap-2 rounded-full px-4 py-0.5">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span className="text-green-600 text-sm">Alpha</span>
              </div>
            </div>
            {SelectedProjectComponent ? (
              <SelectedProjectComponent />
            ) : (
              <p>No component available for this project.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
