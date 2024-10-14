import { project_images } from "@/constants/projectImages";
import React from "react";

import ItemLayout from "../sub/ItemLayout.jsx";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10  z-[20]">
      <h5 className="text-center text-lg text-gray-400">My Recent Work</h5>
      <h2 className="text-center text-3xl text-white mb-10">Project</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {project_images.map(({ id, image, title, github }) => (
          <ItemLayout
            key={id}
            className="custom-bg bg-opacity-50 p-6 rounded-2xl"
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
              />
            </div>
            <h3 className="text-white text-xl mt-4">{title}</h3>
            <div className="flex gap-4 mt-6">
              <a
                href={github}
                className="button-primary  text-white py-2 px-4 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </ItemLayout>
        ))}
      </div>
    </section>
  );
};

export default Projects;
