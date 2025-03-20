import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div id="contact">
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-2 lg:py-12">
              <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
              <p className="mt-4 max-w-xl text-lg text-gray-600">
                Have a question or want to work together? Feel free to reach
                out! I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:dmmuchoki7@gmail.com"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                >
                  dmmuchoki7@gmail.com
                </a>

                <address className="mt-2 text-gray-600 not-italic">
                  Nairobi, Kenya
                </address>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
