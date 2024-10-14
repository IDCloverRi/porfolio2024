import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { skill_data } from "@/constants/skillData";
import ItemLayout from "../sub/ItemLayout";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10 ">
      <h5 className="text-center text-lg text-gray-400  ">
        What Skills I Have
      </h5>
      <h2 className="text-center text-3xl text-white mb-10">My Experience</h2>
      <ItemLayout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 p-6 sm:p-8 rounded-xl">
        {skill_data.map((image, index) => (
          <SkillDataProvider
            key={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </ItemLayout>
    </section>
  );
};

export default Skills;
