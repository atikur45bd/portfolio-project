import { useState } from "react";
import { motion } from "framer-motion";

// Import images for the posts
import NextVsNestJS from "../images/posts/Next.js vs. NestJS.jpg";
import PasswordHashing from "../images/posts/password Hashing.jpg";
import EmulatorSimulator from "../images/posts/emulator vs simulator.jpg";
import DevelopersTools from "../images/posts/developer tools.jpg";
import BestTechnologyStack from "../images/posts/যেকোনো ওয়েবসাইটের জন্য প্রযুক্তি নির্বাচন করার গাইডলাইন.png";

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(null); 

  const handleOpenModal = (postId) => {
    setIsModalOpen(postId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };

  // JavaScript object for blog posts
  const posts = [
    {
      id: 1,
      title: "Next.js Vs NestJS",
      description: "In the world of JavaScript frameworks, two powerful tools often come up in conversation: Next.js and NestJS. While they may sound similar, their roles in web ...",
      image: NextVsNestJS,
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7240925444978397184",
    },
    {
      id: 2,
      title: "Tools for Developers: A Guide",
      description: "I recently came across Free-for.dev through a great post by Imran Hossain (Rubab) Bhai. It’s a treasure trove of free tools and services for developers!.... ",
      image: DevelopersTools,
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7241839234230181888",
    },
    {
      id: 3,
      title: "Password Hashing Technique",
      description: "As a web developer with experience in JavaScript, React, Next.js, and Node.js, I prioritize security in my projects. Password hashing is crucial for....",
      image: PasswordHashing,
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242169711172460545",
    },
    {
      id: 4,
      title: "Emulator vs Simulator ",
      description: "As a developer, leveraging the right tools is crucial for delivering high-quality applications. Two essential tools in mobile app development....",
      image: EmulatorSimulator,
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7242730593078140928",
    },
    {
      id: 5,
      title: "যেকোনো ওয়েবসাইটের জন্য প্রযুক্তি নির্বাচন করার গাইডলাইন ",
      description: "যেকোনো ওয়েবসাইটের জন্য প্রযুক্তি নির্বাচন করার গাইডলাইন....",
      image: BestTechnologyStack,
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7264454643164880898",
    },
  ];

  // Reverse the posts array to show the latest first
  const reversedPosts = [...posts].reverse();

  return (
    <div className="px-5 lg:px-28 pt-10 lg:pt-36 pb-5">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold pb-5 text-center text-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Recent Blogs
      </motion.h1>

      {/* Blog Post List */}
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reversedPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-post bg-gray-900 border border-purple-500 text-indigo-500    hover:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-600">{post.title}</h3>
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full  object-cover transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            <p className="text-sm   mb-4">{post.description}</p>
            <button
              onClick={() => handleOpenModal(post.id)}
              className=" w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-700"
            >
              See More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog open className="modal modal-open">
          <div className="modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <button
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle absolute right-2 top-2 text-red-500 hover:text-red-700"
            >
              ✕
            </button>
            {reversedPosts.map((post) =>
              post.id === isModalOpen ? (
                <iframe
                  key={post.id}
                  src={post.iframeSrc}
                  height="600"
                  width="100%"
                  className="rounded-lg"
                  allowFullScreen=""
                  title={`LinkedIn Post ${post.id}`}
                ></iframe>
              ) : null
            )}
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Blogs;
