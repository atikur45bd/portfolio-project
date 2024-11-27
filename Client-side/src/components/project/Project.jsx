// Import images directly from the src folder
import bikeDekho from "../images/Projects/Biker-Dekho.png";
import classPadImage from "../images/Projects/ClassPad.png";
import dataHunter from "../images/Projects/Data Hunter .png";
import pubCampusAideImage from "../images/Projects/PUB Campus Aide.png";
import foodZoneRestaurant from "../images/Projects/food-zone-restaurant .png";
import penguinFashion from "../images/Projects/penguin-fashion.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Zone Restaurant",
    image: foodZoneRestaurant,
    detailsLink: "#",
    liveLink: "https://mdatikur-contact.github.io/Restaurant//",
    clientLink: "https://github.com/mdatikur-contact/Restaurant",
    serverLink: "#",
  },

  {
    title: "ClassPad",
    image: classPadImage,
    detailsLink: "#",
    liveLink: "https://classpad.netlify.app/",
    clientLink: "https://github.com/mdatikur-contact/ClassPad",
    serverLink: "#",
  },
  {
    title: "Penguin Fashion",
    image: penguinFashion, // Fixed the missing image
    detailsLink: "#",
    liveLink: "https://mdatikur-contact.github.io/penguin-fashion/",
    clientLink: "https://github.com/mdatikur-contact/penguin-fashion",
    serverLink: "#",
  },
  {
    title: "PUB Campus Aide",
    image: pubCampusAideImage, // Fixed the missing image
    detailsLink: "#",
    liveLink: "https://pub-campus-aide.netlify.app/",
    clientLink: "https://github.com/mdatikur-contact/Pub-Campus-Aid",
    serverLink: "#",
  },
  {
    title: "Biker-Dekho",
    image: bikeDekho,
    detailsLink: "#",
    liveLink: "https://mdatikur-contact.github.io/Biker-Zone/",
    clientLink: "https://github.com/mdatikur-contact/Biker-Zone",
    serverLink: "#",
  },
  {
    title: "Data Hunter",
    image: dataHunter,
    detailsLink: "#",
    liveLink: "#",
    clientLink: "#",
    serverLink: "#",
  },
];

const Project = () => {
  return (
    <div className="px-5 lg:px-28 pt-10 lg:pt-36 pb-10">
      <motion.h2 
      initial={{ opacity: 0, y: -20 }} // Initial position offscreen
      animate={{ opacity: 1, y: 0 }} // Smooth transition to visible state
      transition={{ duration: 0.8 }} // Duration of the transition
      className="text-5xl text-primary font-extrabold text-center mb-8">
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }} // Initial state (gray background and normal scale)
            animate={{ scale: 1 }} // Animated state (indigo background on hover)
            whileHover={{ scale: 1.05 }} // On hover, scale up and change background color
            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition on hover
            className="p-6 rounded-lg shadow-lg bg-gray-200 hover:bg-indigo-300"
          >
            {/* Project Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="lg:h-64 object-cover rounded-md mb-4"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-2xl text-gray-800 font-semibold mb-4 text-center">
              {project.title}
            </h3>

            {/* Button Section */}
            <div className="flex justify-center gap-4 flex-wrap mt-4">
              <a
                href={project.detailsLink}
                target="_blank"
                className="text-gray-800 px-6 py-3 border border-primary rounded-full transition hover:bg-primary hover:text-white"
              >
                Details
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                className="text-gray-800 px-6 py-3 border border-primary rounded-full transition hover:bg-primary hover:text-white"
              >
                Live
              </a>
              <a
                href={project.clientLink}
                target="_blank"
                className="text-gray-800 px-6 py-3 border border-primary rounded-full transition hover:bg-primary hover:text-white"
              >
                Client
              </a>
              <a
                href={project.serverLink}
                target="_blank"
                className="text-gray-800 px-6 py-3 border border-primary rounded-full transition hover:bg-primary hover:text-white"
              >
                Server
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
