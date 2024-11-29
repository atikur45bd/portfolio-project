import { useState } from "react";
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
    details: `
      <div class="details-container">
        <h2 class="lg:text-2xl font-bold mb-4">About Food Zone Restaurant</h2>
        <p class="mb-4">
          Food Zone Restaurant is a visually stunning and user-friendly website designed to reflect the charm and excellence of a restaurant business. 
          Built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Vanilla JavaScript</strong>, it ensures a seamless browsing experience with smooth interactions and responsive design.
        </p>
        <p class="mb-4">
          Key features include:
          <ul class="list-disc ml-5">
            <li>Interactive and visually appealing layout</li>
            <li>Responsive design suitable for all devices</li>
            <li>Smooth transitions and animations for better user engagement</li>
            <li>Custom menu showcase for presenting dishes attractively</li>
          </ul>
        </p>
        <p>
          This project is perfect for businesses aiming to establish a strong online presence with an aesthetic and functional platform.
        </p>
      </div>
    `,
    liveLink: "https://mdatikur-contact.github.io/Restaurant/",
    clientLink: "https://github.com/mdatikur-contact/Restaurant",
    serverLink: "#",
  },

  {
    title: "ClassPad",
    image: classPadImage,
    details: `
      <div class="details-container">
        <h2 class="lg:text-2xl font-bold mb-4">About ClassPad</h2>
        <p class="mb-4">
          ClassPad is an innovative online class management system designed with modern technology to simplify the organization and management of class-related activities. 
          Developed using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>React Router</strong>, it offers a seamless and user-friendly dashboard interface.
        </p>
        <p class="mb-4">
          Key features include:
          <ul class="list-disc ml-5">
            <li>Interactive dashboard for class organizers</li>
            <li>Built with Tailwind CSS for responsive and modern styling</li>
            <li>Efficient navigation using React Router</li>
            <li>Optimized for desktop usage</li>
          </ul>
        </p>
        <p>
          ClassPad aims to provide a smooth experience for educators and organizers to streamline their workflows and enhance productivity.
        </p>
      </div>
    `,
    liveLink: "https://classpad.netlify.app/",
    clientLink: "https://github.com/mdatikur-contact/ClassPad",
    serverLink: "#",
  },

  {
    title: "Penguin Fashion",
    image: penguinFashion,
    details: `
      <div class="details-container">
        <h2 class="lg:text-2xl font-bold ">About Penguin Fashion</h2>
        <p class="">
          Penguin Fashion is a stylish and user-friendly e-commerce web application that showcases a modern approach to fashion retail. 
          It is built using <strong>HTML</strong> and <strong>Tailwind CSS</strong>, offering a clean and responsive design tailored for an excellent user experience.
        </p>
        <p class="">
          Key highlights of the project include:
          <ul class="list-disc ml-5">
            <li>Responsive design for seamless browsing on all devices</li>
            <li>Modern UI with Tailwind CSS for effortless styling</li>
            <li>Attractive layout designed to enhance product presentation</li>
          </ul>
        </p>
        <p>
          Penguin Fashion is the perfect example of how elegant design and efficient coding can create a delightful user experience in the fashion industry.
        </p>
      </div>
    `,
    liveLink: "https://mdatikur-contact.github.io/penguin-fashion/",
    clientLink: "https://github.com/mdatikur-contact/penguin-fashion",
    serverLink: "#",
  },

  {
    title: "PUB Campus Aide",
    image: pubCampusAideImage,
    details: `
      <div class="details-container">
        <h2 class="lg:text-2xl font-bold ">About PUB Campus Aide</h2>
        <p class="mb-4">
          PUB Campus Aide is a dedicated platform designed to enhance the academic experience at Pundra University of Science & Technology (PUB). 
          Developed using <strong>React</strong>, <strong>React Router</strong>, <strong>HTML</strong>, and <strong>Tailwind CSS</strong>, this web application provides essential features to streamline campus life.
        </p>
        <p class="">
          Key features include:
          <ul class="list-disc ml-5">
            <li>Real-time class schedules to help students stay organized</li>
            <li>A semester-wise question bank for exam preparation</li>
            <li>A blood donation finder for emergencies</li>
            <li>Real-time university bus tracking for convenient transportation</li>
          </ul>
        </p>
        <p>
          PUB Campus Aide is a robust solution tailored for students and faculty, combining innovative technology with practical needs to ensure a seamless university experience.
        </p>
      </div>
    `,
    liveLink: "https://pub-campus-aide.netlify.app/",
    clientLink: "https://github.com/mdatikur-contact/Pub-Campus-Aid",
    serverLink: "#",
  },

  {
    title: "Biker-Dekho",
    image: bikeDekho,
    details: `
      <div class="details-container">
        <h2 class="text-2xl font-bold ">About Biker-Dekho</h2>
        <p class="mb-4">
          Biker-Dekho is a user-friendly website designed for bike enthusiasts, built with <strong>HTML</strong> and <strong>Tailwind CSS</strong>. 
          This platform allows users to explore various bikes, compare specifications, and make informed decisions before making a purchase. 
        </p>
        <p >
          The website features:
          <ul class="list-disc ml-5">
            <li>Bike model details with high-quality images and specifications</li>
            <li>Easy-to-use comparison feature for different bike models</li>
            <li>Responsive design for an optimal experience on both desktop and mobile devices</li>
          </ul>
        </p>
        <p>
          Biker-Dekho is built with a focus on minimalism and performance, ensuring that users get a smooth browsing experience while discovering their next bike.
        </p>
      </div>
    `,
    liveLink: "https://mdatikur-contact.github.io/Biker-Zone/",
    clientLink: "https://github.com/mdatikur-contact/Biker-Zone",
    serverLink: "#",
  },

  {
    title: "Data Hunter",
    image: dataHunter,
    details: `
    <div class="details-container">
      <h2 class="lg:text-2xl font-bold ">About Data Hunter</h2>
      <p class="mb-4">
        Data Hunter is a dynamic web application designed to help users search, collect, and analyze data from various sources. Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, this project offers a user-friendly interface for browsing through datasets, filtering specific data points, and visualizing the results. 
        It's ideal for data enthusiasts, researchers, and anyone who needs to work with large datasets on a daily basis.
      </p>
      <p class="mb-4">
        Key features of Data Hunter:
        <ul class="list-disc ml-5">
          <li>Advanced search and filter options for easy data retrieval</li>
          <li>Data visualization through charts and tables for better analysis</li>
        </ul>
      </p>
      <p>
        Data Hunter provides users with the ability to access a vast range of datasets, process them effectively, and view results in real-time.
      </p>
    </div>
  `,
    liveLink: "#", 
    clientLink: "#", 
    serverLink: "#", 
  },
];

const Project = () => {
  const [open, setOpen] = useState(false); 
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project details

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpen(true); 
  };

  const handleCloseModal = () => {
    setOpen(false); 
    setSelectedProject(null); 
  };

  return (
    <div className=" lg:px-28 pt-10 lg:pt-36 pb-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl text-purple-700 font-extrabold text-center mb-8"
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-6 rounded-lg shadow-lg  bg-gray-900 hover:bg-gray-800 text-indigo-500 border  border-purple-500 "
          >
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="lg:h-64 object-cover rounded-md mb-4"
              />
            </div>

            <h3 className="text-xl lg:text-2xl text-purple-600 font-semibold mb-4 text-center">
              {project.title}
            </h3>

            <div className="flex justify-center gap-4 flex-wrap mt-4">
              <button
                onClick={() => handleOpenModal(project)}
                className="text-purple-500 px-6 py-3 border border-purple-500 rounded-full transition hover:bg-purple-600 hover:text-white"
              >
                Details
              </button>
              <a
                href={project.liveLink}
                target="_blank"
                className="text-purple-500 px-6 py-3 border border-purple-500 rounded-full transition hover:bg-purple-600 hover:text-white"
              >
                Live
              </a>
              <a
                href={project.clientLink}
                target="_blank"
                className="text-purple-500 px-6 py-3 border border-purple-500 rounded-full transition hover:bg-purple-600 hover:text-white"
              >
                Client
              </a>
              <a
                href={project.serverLink}
                className="text-purple-500 px-6 py-3 border border-purple-500 rounded-full transition hover:bg-purple-600 hover:text-white"
              >
                Server
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom Modal */}
      {selectedProject && open && (
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-indigo-400 p-6 rounded-lg shadow-lg  lg:max-w-3xl lg:w-full">
            <h2 className="lg:text-3xl font-semibold mb-4">
              {selectedProject.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: selectedProject.details }}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Project;
