import profile from "../images/atikur.jpg";
import resume from "../images/Atikur resume.pdf";
import { HiOutlineDownload } from "react-icons/hi";
import {
  FaArrowRightLong,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { TbBrandLeetcode } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="px-28 pt-16 ">
      <div className="flex items-center gap-28 ">
        <div className="text-center">
          <h1 className="text-5xl  font-bold pb-5">
            Hi am <span className="text-primary ">Md Atikur Rahman</span>
          </h1>
          <div className="leading-8">
            <h2 className="text-2xl">
              Cloud & Software Architecture Enthusiast
            </h2>
            <h2>BSc CSE (Ongoing)</h2>
            <h2>Diploma Engineering in Computer Technology</h2>
          </div>
          <div className="flex gap-5 justify-center pt-5">
            <a
              href={resume}
              target="_blank"
              download
              class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">
                  <div className="flex gap-2 items-center">
                    Resume <HiOutlineDownload />
                  </div>
                </span>
              </span>
            </a>
            <NavLink to="/contact"><a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">
                {" "}
                <div className="flex gap-2 items-center">
                  Discuss ? <FaArrowRightLong />
                </div>{" "}
              </span>
            </a></NavLink>
            
          </div>
          {/* social media icons */}
          <div className="text-pink-600 text-4xl flex gap-3 justify-center pt-5">
            <a href="https://github.com/mdatikur-contact">
              <FaGithub className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/mdatikur-contact/">
              <BiLogoLinkedin className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
            </a>
            <a href="https://leetcode.com/u/atikur45bd/">
              <TbBrandLeetcode className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
            </a>
            <a href="https://x.com/mdAtikurContact">
              <FaXTwitter className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
            </a>
          </div>
        </div>
        <div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-80 rounded-full ring ring-offset-2">
              <img src={profile} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
