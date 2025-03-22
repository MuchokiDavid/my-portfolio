import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { SiDjango, SiFlask, SiPostgresql, SiMysql, SiCpanel, SiPostman, SiNpm } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";


export default function Skills() {
  return (
    <div id="skills" className="mt-8">
      <div className="container px-2 py-6 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-300 mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have a wide range of skills and I am always looking to learn new
            things. I am currently learning how to use Django and React and I am looking to
            learn more about the mobile apps side of things.
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 place-items-center">
          {/* HTML */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaHtml5 className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">HTML</span>
            </div>
          </div>

          {/* CSS */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaCss3Alt className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">CSS</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center"> 
              <FaJs className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">JavaScript</span>
            </div>
          </div>

          {/* React */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaReact className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">React</span>
            </div>
          </div>

          {/* Python */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaPython className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Python</span>
            </div>
          </div>

          {/* Django */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiDjango className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Django</span>
            </div>
          </div>

          {/* Flask */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiFlask className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Flask</span>
            </div>
          </div>

          {/* Git */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaGitAlt className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Git</span>
            </div>
          </div>

          {/* Linux */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <FaLinux className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Linux</span>
            </div>
          </div>

          {/* cPanel */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiCpanel className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">cPanel</span>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiPostgresql className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">PostgreSQL</span>
            </div>
          </div>

          {/* MySQL */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiMysql className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">MySQL</span>
            </div>
          </div>

          {/* Figma */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <IoLogoFigma className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Figma</span>
            </div>
          </div>

          {/* npm */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiPostman className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Postman</span>
            </div>
          </div>

          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full min-w-fit items-center">
              <SiNpm className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">NPM</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}