import React, { useState, useRef, useEffect } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Experience() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const experiences = [
    {
      title: "Software Developer",
      company: "Tyne IT Consulting",
      location: "Nairobi, Kenya",
      period: "October 2024 - Present",
      description: [
        "Collaborate with a team to develop various software including E-commerce, E-Procurement, etc.",
        "Contribute to the design and development of frontend and backend components using React, Flask, and Django.",
        "Integrate payment gateways for seamless payment processing, including disbursements and collections.",
        "Actively participate in project planning, requirement analysis, and solution design to meet project goals and deliverables.",
        "Participate in feasibility studies for different projects before design and development.",
      ],
      technologies: [
        "React",
        "Flask",
        "Django",
        "Payment Gateway Integration",
        "Project Planning",,
        "Web scrapping"
      ],
    },
    {
      title: "Software Developer",
      company: "Intasend",
      location: "Nairobi, Kenya",
      period: "February 2024 - April 2024",
      description: [
        "Collaborated with a team to develop the IntaSend Payment Gateway, a payment solution for the Kenyan market.",
        "Contributed to the design and development of frontend and backend components using React and Flask.",
        "Integrated the IntaSend API for seamless payment processing, including disbursements, collections, and wallet management.",
        "Implemented security protocols, such as SSL encryption, data encryption, and authentication mechanisms, ensuring compliance with regulatory standards.",
        "Actively participated in project planning, requirement analysis, and solution design to meet project goals and deliverables.",
      ],
      technologies: [
        "React",
        "Flask",
        "API Integration",
        "Security Protocols",
        "Project Planning",
        "Payment Solutions",
      ],
    },
    {
      title: "ICT Manager",
      company: "Plainsview Hospital",
      location: "Ruiru, Kenya",
      period: "December 2022 - June 2023",
      description: [
        "Oversaw and managed ICT functions of the hospital, ensuring all services were well planned to support timely and quality service delivery.",
        "Managed the hospital's IT infrastructure, including planning, maintenance, and sourcing in line with the hospital's needs.",
        "Implemented information security systems and measures to ensure the hospital's ICT environment was secure and compliant with industry standards.",
        "Conducted training sessions for staff on the usage of different hospital infrastructures, including hardware and software.",
      ],
      technologies: [
        "IT Infrastructure Management",
        "Information Security",
        "Training",
        "ICT Planning",
        "Network Management",
        "Hardware Maintenance",
      ],
    },
    {
      title: "ICT Officer Intern",
      company: "Ministry of Education",
      location: "Murang'a, Kenya",
      period: "October 2021 - September 2022",
      description: [
        "Supported E-Learning and content development in line with the schools' schemes of work, enhancing the delivery of digital education.",
        "Provided classroom support and conducted training sessions for teachers and staff on the effective use of digital literacy devices.",
        "Implemented innovative solutions to help schools improve their use of digital learning tools and techniques.",
        "Provided guidance in the safe, secure, and ethical use of technology in educational environments.",
        "Assisted teachers in integrating ICT into teaching, learning, assessment, and reporting processes.",
        "Delivered first-line technical support and maintenance of ICT services in schools and sub-county offices to ensure smooth and efficient operations.",
      ],
      technologies: [
        "E-Learning",
        "Digital Literacy",
        "Technical Support",
        "ICT Integration",
      ],
    },
    {
      title: "ICT Support Attachment",
      company: "KCA University",
      location: "Nairobi, Kenya",
      period: "January 2018 - March 2018",
      description: [
        "Provided comprehensive end-user support to students, faculty, and staff, resolving technical issues in a timely and efficient manner.",
        "Installed and configured software applications across various departments, ensuring functionality and compliance with licensing agreements.",
        "Created and configured WiFi user accounts and devices to enable seamless connectivity and access to network resources for users.",
        "Conducted computer repair and maintenance, diagnosing and resolving hardware issues, and ensuring optimal performance of ICT infrastructure.",
      ],
      technologies: [
        "Technical Support",
        "Software Installation",
        "Network Configuration",
        "Hardware Maintenance",
      ],
    },
  ];

  const scrollAmount = 400; // Adjust this value based on your card width + margins

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);

      // Initial check
      checkScrollButtons();

      // Check again after images might have loaded
      window.addEventListener("load", checkScrollButtons);
      window.addEventListener("resize", () => {
        checkScrollButtons();
        checkMobile();
      });

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("load", checkScrollButtons);
        window.removeEventListener("resize", () => {
          checkScrollButtons();
          checkMobile();
        });
      };
    }
  }, []);

  return (
    <div id="experience" className="py-16">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-300 mb-4">
            Professional Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            My professional journey and the valuable experience I've gained
            along the way.
          </p>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {/* Mobile indicator for swipe scrolling */}
        {isMobile && (
          <div className="text-center mb-4 text-gray-500 text-sm flex items-center justify-center">
            <FaChevronLeft className="mr-2" />
            <span>Swipe cards to navigate</span>
            <FaChevronRight className="ml-2" />
          </div>
        )}

        <div className="relative">
          {/* Left scroll button - only visible on non-mobile */}
          {!isMobile && showLeftButton && (
            <button
              onClick={handleScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Experience cards container with horizontal scroll */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="px-2 md:px-4 min-w-[300px] sm:min-w-[350px] md:min-w-[450px] lg:min-w-[500px] snap-start"
              >
                <div className="h-full bg-gray-800 bg-opacity-40 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white p-2 md:p-3 rounded-full mr-3 md:mr-4">
                      <FaBriefcase className="text-lg md:text-xl" />
                    </div>
                    <h2 className="text-lg md:text-xl font-medium text-white title-font line-clamp-1">
                      {exp.title}
                    </h2>
                  </div>

                  <div className="mb-4 text-gray-400 text-sm md:text-base">
                    <div className="flex items-center mb-2">
                      <FaBuilding className="mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{exp.company}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 md:pl-6 mb-6 text-gray-400 text-sm md:text-base">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-900 text-indigo-400 text-xs px-2 py-1 md:px-3 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button - only visible on non-mobile */}
          {!isMobile && showRightButton && (
            <button
              onClick={handleScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          )}
        </div>

        {/* Custom CSS to hide scrollbar but keep functionality */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          @media (max-width: 768px) {
            .touch-pan-x {
              -webkit-overflow-scrolling: touch;
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
            }
          }

          .line-clamp-1 {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
        `}</style>
      </div>
    </div>
  );
}
