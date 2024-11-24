import { useState } from "react";
import laptop from "../images/codding-laptop.webp";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about:
      "I am Md Atikur Rahman, a passionate web developer with a keen interest in software architech and cloud computin",
    skills:
      "HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, MongoDB, and more.",
    education:
      "Currently pursuing a BSc in CSE from Pundra University of Science and Technology.",
  };

  return (
    <div className="px-5 lg:px-28 pt-10 lg:pt-36 lg:pb-10">
      <h2 className="text-5xl text-primary font-extrabold text-center mb-8">
        Meet Atik
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="lg:w-1/3">
          <img src={laptop} alt="Laptop" className="w-full rounded-lg" />
        </div>

        {/* Tab Navigation and Content */}
        <div className="lg:w-2/3  flex flex-col items-center justify-center">
          {/* Tab Navigation */}
          <div className="mb-8 lg:w-1/2 ">
            <div className="flex justify-center items-center gap-5 border rounded-lg border-gray-300 p-2">
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "about"
                    ? "text-primary border-b-2 border-primary"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "skills"
                    ? "text-primary border-b-2 border-primary"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`text-lg font-semibold px-4 py-2 rounded-lg ${
                  activeTab === "education"
                    ? "text-primary border-b-2 border-primary"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>
            {/* Tab Content with Border */}
            <div className=" p-6 ">
              <div className="text-lg">{tabContent[activeTab]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
