import { motion } from "framer-motion";
const Blogs = () => {
    return (
        <div className="px-5 lg:px-28 pt-10 lg:pt-36">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold pb-5 text-center text-primary"
              initial={{ opacity: 0, y: -20 }} // Initial position offscreen
              animate={{ opacity: 1, y: 0 }} // Smooth transition to visible state
              transition={{ duration: 0.8 }} // Duration of the transition
            >
            Recent Blogs
            </motion.h1>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7240925444978397184" height="500" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            
        </div>
    );
};

export default Blogs;