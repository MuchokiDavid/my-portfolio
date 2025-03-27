import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaGithub,
  FaLink,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Keyboard, Navigation, Mousewheel } from "swiper/modules";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      title: "E-Procurement Platform",
      githubLink: "https://github.com/tyneitafrica/e-procurement-frontend",
      liveLink: "https://procure360.vercel.app",
      description: [
        "Developed a procurement platform for tyne IT consultancy.",
        "Implemented a user-friendly interface for suppliers and buyers.",
        "Integrated with PPRA API for real-time government data synchronization.",
        "Implemented user authentication and authorization using JWT tokens.",
        "Supported multiple user roles and permissions.",
      ],
      technologies: [
        "React",
        "Django",
        "Python",
        "Postgres",
        "Cloudinary",
        "Payment API",
        "Git",
        "Jira",
        "Agile",
        "PPRA API",
      ],
    },
    {
      title: "Niloyd Insurance platform",
      githubLink: "https://github.com/tyneitafrica/insure_backend",
      liveLink: "https://insure-frontend.vercel.app",
      description: [
        "Collaborated in development of an insurance platform for an insuarance agency.",
        "Implemented a user-friendly interface for suppliers and buyers.",
        "Integrated the platform with Daraja API for real time payment collection.",
        "Took part in implementation of user authentication and authorization using JWT tokens and cookies.",
        "Supported multiple user roles and permissions.",
        "Implemented insurance policy creation and management.",
      ],
      technologies: [
        "React",
        "Django",
        "Python",
        "Postgres",
        "Cloudinary",
        "Git",
        "Jira",
        "Agile",
        "Daraja API",
      ],
    },
    {
      title: "MsaadaFund",
      githubLink: "https://github.com/MuchokiDavid/Msaadafund-Frontend",
      liveLink: "https://www.msaadafund.com",
      description: [
        "Developed a fundraising platform for non-profit organizations.",
        "Integrated IntaSend API for seamless payment processing.",
        "Supported multiple payment methods including M-Pesa, credit cards, and CashApp.",
        "Implemented user authentication and authorization using JWT tokens.",
        "Supported multiple user roles and permissions.",
        "Implemented donation tracking and reporting features.",
      ],
      technologies: ["React", "Django", "IntaSend API", "PostgreSQL", "Cpanel"],
    },
    {
      title: "Loyalty Point Calculator",
      githubLink: "https://github.com/MuchokiDavid/Loyalty-Points-Calculator",
      liveLink: "",
      description: [
        "Built a Python web service to calculate loyalty points based on customer transactions.",
        "Integrated Google Sheets API for data fetching and updates.",
        "Sent notifications sms to customers about their loyalty points.",
        "Implemented user authentication and authorization using Google Oath2 tokens.",
        "Supported multiple user",
        "Provided customizable loyalty point calculation rules.",
  
      ],
      technologies: ["Python", "Flask", "Google Sheets API", "Cpanel", "Git"],
    },
    {
      title: "Portfolio Website",
      githubLink: "https://github.com/MuchokiDavid/my-portfolio",
      liveLink: "https://muchokidavid.vercel.app",
      description: [
        "Designed and developed a responsive portfolio website.",
        "Optimized for performance and accessibility.",
        "Utilized Vite.js for fast development and deployment.",
        "Deployed on Vercel for easy hosting and continuous integration.",
        "Implemented smooth scrolling and animations for enhanced user experience.",
        "Utilized Tailwind CSS for efficient styling and responsiveness.",
      ],
      technologies: ["React", "Vite.js", "Tailwind CSS", "Vercel", "Git"],
    },
    {
      title: "Moringa School Projects",
      githubLink: "https://github.com/MuchokiDavid",
      liveLink: "https://github.com/orgs/Moringa-Flask-Framework/repositories",
      description: [
        "Collaborated with a diverse team to build real-world web applications.",
        "Used HTML, CSS, JavaScript, React, Python, and Flask for development.",
        "Integrated third-party APIs like Spotify API and Weather API to enhance functionality.",
        "Followed agile methodologies, including sprint planning, daily stand-ups, and testing.",
        "Utilized PostgreSQL and SQLite for database management and Render for deployment.",
        "Implemented user authentication and authorization using JWT tokens.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Flask",
        "Agile",
        "Spotify API",
        "Weather API",
        "PostgreSQL",
        "Render",
      ],
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id="projects" className="py-16">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-300 mb-4">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            A collection of projects I've worked on, showcasing my skills and
            creativity.
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {isMobile && (
          <div className="text-center mb-4 text-gray-500 text-sm flex items-center justify-center">
            <FaChevronLeft className="mr-2" />
            <span>Swipe horizontally to navigate</span>
            <FaChevronRight className="ml-2" />
          </div>
        )}

        <div className="relative">
          {!isMobile && showLeftButton && (
            <button
              onClick={handleScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Updated scroll container with proper touch handling */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
            scrollbar={true}
            // onSwiper={(swiper) => {
            //   scrollContainerRef.current = swiper.el;
            //   swiper.el.addEventListener("scroll", handleScroll);
            // }}
            // onTouchEnd={() => {
            //   if (scrollContainerRef.current) {
            //     scrollContainerRef.current.style.overflow = "auto";
            //   }
            // }}
            // onSlideChange={() => {}}
            // onTouchStart={() => {
            //   if (scrollContainerRef.current) {
            //     scrollContainerRef.current.style.overflow = "hidden";
            //   }
            // }}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div
                  key={index}
                  className="px-2 md:px-4 min-w-[300px] sm:min-w-[350px] md:min-w-[450px] lg:min-w-[500px] snap-start"
                >
                  <div
                    className=" h-full flex flex-col bg-gray-800 bg-opacity-40 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
                    style={{
                      touchAction: isMobile ? "pan-y" : "auto",
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-500 text-white p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <FaCode className="text-lg md:text-xl" />
                      </div>
                      <h2 className="text-lg md:text-xl font-medium text-white title-font line-clamp-1">
                        {project.title}
                      </h2>
                    </div>

                    <div className="mb-4 text-gray-400 text-sm md:text-base">
                      <div className="flex items-center mb-2">
                        <FaGithub className="mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-500"
                          >
                            GitHub Repository
                          </a>
                        </span>
                      </div>
                      {project.liveLink && (
                        <div className="flex items-center">
                          <FaLink className="mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-indigo-500"
                            >
                              Live Demo
                            </a>
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow mb-2">
                      <ul className="list-disc pl-5 md:pl-6 mb-6 text-gray-400 text-sm md:text-base">
                        {project.description.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-900 text-indigo-200 text-xs px-2 py-1 md:px-3 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
