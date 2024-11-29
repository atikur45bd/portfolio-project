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
        className="text-left space-y-6 pt-6"
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

        <p className="text-lg text-white opacity-80 mb-4">
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
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">
              {category}
            </h3>

            {/* Skill Icons Grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center border border-purple-500 rounded-lg p-4 bg-gray-900 shadow-lg"
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-100">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    ),
    leadership: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="space-y-8 pt-8"
      >
        {/* BASIS Student Forum */}
        <div className="border border-purple-500 rounded-lg p-4 bg-gray-900 shadow-lg">
          <p className="text-xl font-semibold text-purple-400 mb-2">
            Executive Member (2024-2025)
          </p>
          <p className="text-lg text-gray-100 mb-2">
            BASIS Student Forum, PUB Chapter
          </p>
          <hr className="my-3 border-pink-500" />
          <p className="text-sm text-gray-400">
            Collaborated with students and faculty to promote IT development and
            foster career growth in the IT sector.
          </p>
        </div>

        {/* Pundra University Programming Club */}
        <div className="border border-purple-500 rounded-lg p-4 bg-gray-900 shadow-lg">
          <p className="text-xl font-semibold text-purple-400 mb-2">
            Executive Member (2023-2024)
          </p>
          <p className="text-lg text-gray-100 mb-2">
            Pundra University Programming Club (PUPC)
          </p>
          <hr className="my-3 border-pink-500" />
          <p className="text-sm text-gray-400">
            Played a key role in organizing events like the PUPC Programming
            Contest 2023, fostering a culture of competitive programming and
            innovation.
          </p>
        </div>
      </motion.div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="overflow-x-auto pt-8"
      >
        <div className="mb-8">
          <div className="lg:space-y-6">
            {/* Bachelor's Degree */}
            <div className="border border-purple-500 rounded-lg p-4 bg-gray-900 shadow-lg">
              <p className="text-xl font-semibold text-purple-400 mb-1">
                BSc in Computer Science and Engineering (Ongoing)
              </p>
              <p className="text-sm text-gray-400">
                Pundra University of Science & Technology (PUB), Bogura
              </p>
              <hr className="my-3 border-pink-500" />
              <div className="space-y-2">
                <p className="text-base">
                  <span className="font-medium text-blue-400">Award:</span>{" "}
                  <span className="text-gray-100">
                    Academic Excellence Award 2023 – For outstanding performance
                    in the CSE department.
                  </span>
                </p>
                <p className="text-base">
                  <span className="font-medium text-blue-400">
                    Achievement:
                  </span>{" "}
                  <span className="text-gray-100">
                    1st Runner-Up at the PUPC Programming Contest 2023,
                    organized by the Pundra University Programming Club.
                  </span>
                </p>
              </div>
            </div>

            {/* Diploma */}
            <div className="border border-purple-500 rounded-lg p-4 mt-3 bg-gray-900 shadow-lg">
              <p className="text-xl font-semibold text-purple-400 ">
                Diploma in Computer Technology
              </p>
              <p className="text-sm text-gray-400">
                Vocational Teachers' Training Institute (VTTI), Bogura
              </p>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <h2 className="text-3xl text-center text-pink-400 pb-4 font-bold">
          Training
        </h2>
        <table className="table-auto w-full border-collapse border border-purple-500 bg-gray-900 text-gray-100 shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-purple-400 ">
              <th className="lg:px-4 lg:py-2 border border-purple-500">
                Training Topic
              </th>
              <th className="lg:px-4 lg:py-2 border border-purple-500">
                Institute
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Introduction to DevOps
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Great Learning
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Learn About Agile Project Management and Scrum
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                OpenClassrooms
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Design Your Software Architecture Using Industry-Standard
                Patterns
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                OpenClassrooms
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Pathway to Software Engineering
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Bohubrihi
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                21 Days Code Camp
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Programming Hero
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Responsible Web Design
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                freeCodeCamp
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Introduction to MongoDB
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                Simplilearn
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                UI/UX Design
              </td>
              <td className="lg:px-4 lg:py-2 border border-purple-500">
                futurenation.gov.bd
              </td>
            </tr>
            <tr className="hover:bg-gray-800 transition-colors">
              <td className="px-4 lg:py-2 border border-purple-500">
                Graphics Design Level-1
              </td>
              <td className="px-4 lg:py-2 border border-purple-500">
                Vocational Teachers' Training Institute (VTTI), Bogura
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    ),
  };

  return (
    <div className="px-3 lg:px-28 pt-10 lg:pt-36 lg:pb-10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-5xl text-purple-700 font-extrabold text-center mb-8"
      >
        Meet Atik
      </motion.h2>
      <div className="flex flex-col lg:flex-row  lg:gap-28 items-start ">
        
        <div className="lg:w-96 h-96 ">
          <DotLottieReact
            src="https://lottie.host/5ce1ceea-ffa2-4f1e-9395-9c8df6b69204/y98708tqjJ.lottie"
            loop
            autoplay
          />
        </div>

        <div className="lg:w-2/3 flex flex-col items-start justify-start">
          <div className="mb-8 ">
            <div className="flex items-center  gap-2 lg:gap-5 border rounded-lg border-gray-300 py-2">
              <button
                className={`lg:text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "about"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`lg:text-lg font-semibold px-2 lg:px-4 py-2 rounded-lg ${
                  activeTab === "skills"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`lg:text-lg font-semibold px-2 lg:px-4 py-2 rounded-lg ${
                  activeTab === "leadership"
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("leadership")}
              >
                Leadership
              </button>
              <button
                className={`lg:text-lg font-semibold px-4 py-2 rounded-lg ${
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

          <div className="mb-8">{tabContent[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
