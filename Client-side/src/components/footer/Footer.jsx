
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className=" text-white py-8 mt-16">
        <div className="container mx-auto text-center">
         
  
          {/* Copyright and Credits Section */}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear}{" "}
              <span>
                Designed and Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/mdatikur-contact/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Md Atikur Rahman
                </a>
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  