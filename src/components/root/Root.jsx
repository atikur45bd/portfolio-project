import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import LoadingLogo from "../images/atik-logo.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  return (
    <div data-theme="synthwave" className="min-h-dvh font-roboto">
      {/* Show loading screen with zoom-in effect */}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen relative">
          {/* Lottie animation in the background */}
          <DotLottieReact
            src="https://lottie.host/774ab17a-d44c-4e86-a47e-d26be896e117/qaFwbphmTp.lottie"
            loop
            autoplay
            className="absolute inset-0 w-full h-full z-0"  
          />
          {/* Loading logo in the center */}
          <motion.img
            src={LoadingLogo}
            alt="Loading..."
            className="h-32 z-10"  
            initial={{ scale: 0 }}  
            animate={{ scale: 1 }} 
            exit={{ scale: 0 }}  
            transition={{ duration: 1 }} 
          />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Root;
