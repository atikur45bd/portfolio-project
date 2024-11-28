import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReactrouter,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Skill categories and items
  const skillCategories = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-600 text-4xl" />,
      },
      {
        name: "DaisyUI",
        icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500 text-4xl" />,
      },
      { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
      {
        name: "ReactRouter",
        icon: <SiReactrouter className="text-red-500 text-4xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine className="text-gray-200  text-4xl" />,
      },
    ],
    Backend: [
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 text-4xl" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-600 text-4xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />,
      },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
      {
        name: "Github ",
        icon: <FaGithub className=" text-4xl" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-4xl" />,
      },
    ],
  };

  const tabContent = {
    about: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-left"
      >
        <p className="text-lg text-white opacity-80 mb-4">
          I am passionate about solving real-world problems using technology and
          am committed to building user-friendly, scalable applications. My
          expertise spans frontend and backend technologies, and I am
          particularly focused on cloud computing and software architecture to
          create efficient solutions.
        </p>

        <p className="text-lg text-white opacity-80 mb-4">
          In addition to development, I am engaged in research related to
          cloud-optimized operating systems and software optimization. I believe
          in the power of cloud technologies to improve user experience while
          creating sustainable software solutions.
        </p>

        <p className="text-lg text-white opacity-80">
          Always eager to learn and grow, I embrace new technologies and tackle
          challenges that push me toward innovation. Let’s connect and explore
          how we can create impactful solutions together!
        </p>
      </motion.div>
    ),
    skills: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="space-y-8"
      >
        {Object.entries(skillCategories).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {skill.icon}
                  <p className="text-sm font-medium mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="overflow-x-auto"
      >
        {/* Educational Background */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="lg:space-y-4">
            <div>
              <p className="text-lg font-medium">
                BSc in Computer Science and Engineering (Ongoing)
              </p>
              <p className="text-gray-600">
                Pundra University of Science & Technology (PUB), Bogura.
              </p>
            </div>
            <div>
              <p className="text-lg font-medium">
                Diploma in Computer Technology
              </p>
              <p className="text-gray-600">
                Vocational Teachers' Training Institute (VTTI), Bogura.
              </p>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <h2 className="text-2xl text-center pb-2 font-bold">Training</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="lg:px-4 lg:py-2 border border-gray-300">
                Training Topic
              </th>
              <th className="lg:px-4 lg:py-2 border border-gray-300">
                Institute
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                21 Days Code Camp
              </td>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                Programming Hero
              </td>
            </tr>
            <tr>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                Responsible Web Design
              </td>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                freeCodeCamp
              </td>
            </tr>
            <tr>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                Introduction to MongoDB
              </td>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                Simplilearn
              </td>
            </tr>
            <tr>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                UI/UX Design
              </td>
              <td className="lg:px-4 lg:py-2 border border-gray-300">
                futurenation.gov.bd
              </td>
            </tr>
            <tr>
              <td className="px-4 lg:py-2 border border-gray-300">
                Graphics Design Level-1
              </td>
              <td className="px-4 lg:py-2 border border-gray-300">
                Vocational Teachers' Training Institute (VTTI), Bogura.
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    ),
  };

  return (
    <div className="px-5 lg:px-28 pt-10 lg:pt-36 lg:pb-10">
      <motion.h2 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-5xl text-primary font-extrabold text-center mb-8">
        Meet Atik
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-28 items-start ">
        {/* Lottie Animation Section */}
        <div className="lg:w-96 h-96 ">
          <DotLottieReact
            src="https://lottie.host/5ce1ceea-ffa2-4f1e-9395-9c8df6b69204/y98708tqjJ.lottie"
            loop
            autoplay
          />
        </div>

        {/* Tab Navigation and Content */}
        <div className="lg:w-2/3 flex flex-col items-start justify-start">
          {/* Tab Navigation */}
          <div className="mb-8 lg:w-1/2 ">
            <div className="flex  items-center gap-5 border rounded-lg border-gray-300 py-2  ">
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "about"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "skills"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "education"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 mt-4">
            {activeTab === "skills" ? (
              <div className="space-y-8">{tabContent.skills}</div>
            ) : (
              <div className="text-lg">{tabContent[activeTab]}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
