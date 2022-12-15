import React from "react";
import greenloopImg from "../public/assets/projects/greenloop.jpg";
import voteImg from "../public/assets/projects/voting.jpg";
import testImg from "../public/assets/projects/testing.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-32">
        <p className="text-xl tracking-widest uppercase text-[#23d997]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="GreenLoop NFT Marketplace"
            description="Blockchain project"
            backgroundImg={greenloopImg}
            projectUrl="/greenloop"
          />
          <ProjectItem
            title="Voting Smart Contract"
            description="Blockchain project"
            backgroundImg={voteImg}
            projectUrl="/voting"
          />
          <ProjectItem
            title="Testing Smart Contract"
            description="Test project"
            backgroundImg={testImg}
            projectUrl="/testing"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
