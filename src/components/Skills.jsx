import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaSass,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiCpanel,
  SiPostman,
  SiNpm,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiNginx,
  SiJira,
  SiGraphql,
  SiWebpack,
  SiJest,
  SiNetlify,
  SiVercel,
  SiRender,
  SiSqlite,
  SiGooglecloud,
  SiNgrok,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";


export default function Skills() {
  // Organize skills into stacks
  const skillStacks = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Sass", icon: <FaSass color="#CC6699" /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Webpack", icon: <SiWebpack color="#8DD6F9" /> },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
        { name: "Flask", icon: <SiFlask color="#000000" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Ngrok", icon: <SiNgrok className="text-blue-500" /> },
      ]
    },
    {
      name: "Database & Storage",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "SQLite", icon: <SiSqlite color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "IndexedDB", icon: <FaDatabase color="#F7DF1E" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "Linux", icon: <FaLinux color="#FCC624" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "NPM", icon: <SiNpm color="#CB3837" /> },
        { name: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Jest", icon: <SiJest color="#C21325" /> },
        { name: "Jira", icon: <SiJira color="#0052CC" /> },
      ]
    },
    {
      name: "Design & Deployment",
      skills: [
        { name: "Figma", icon: <IoLogoFigma color="#F24E1E" /> },
        { name: "Cpanel", icon: <SiCpanel color="#FF6C2C" /> },
        { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
        { name: "Vercel", icon: <SiVercel color="#000000" /> },
        { name: "Render", icon: <SiRender className="text-black" /> },
      ]
    },
  ];

  return (
    <div id="skills" className="my-12">
      <div className="">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-300 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have expertise across multiple technologies and frameworks with a focus on full-stack development.
            Currently enhancing my knowledge in Django, React, and exploring mobile application development.
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {/* Display each stack */}
        {skillStacks.map((stack, stackIndex) => (
          <div key={stackIndex} className="mb-12">
            <h2 className="text-2xl font-medium text-gray-200 mb-6 text-center">
              {stack.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
              {/* Loop through skills in this stack */}
              {stack.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="p-2 w-full">
                  <div className="bg-gray-700 rounded flex p-4 h-full items-center cursor-pointer shadow-md hover:bg-gray-600 transition duration-300 hover:scale-105 hover:shadow-purple-600">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="title-font font-medium text-white ml-3">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}