import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ContactForm from "./utils/ContactForm";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    axios
      .post("https://formspree.io/f/xjkywgba", formData)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        // alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Form submission failed. Please try again later.");
      });
  };

  return (
    <div id="contact">
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-2 lg:py-12">
              <h2 className="text-3xl font-bold text-gray-300">Contact Me</h2>
              <p className="mt-4 max-w-xl text-lg text-gray-100">
                Have a question or want to work together? Feel free to reach
                out! I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:dmmuchoki7@gmail.com"
                  className="text-2xl font-bold text-purple-600 hover:text-purple-700"
                >
                  dmmuchoki7@gmail.com
                </a>
                <p className="mt-2 text-gray-200">+254 723 018 212</p>

                <address className="mt-2 text-gray-200 not-italic">
                  Nairobi, Kenya
                </address>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-lg border border-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              {/* <ContactForm/> */}
              <form action="#" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-blue-700 sm:w-auto"
                  >
                    {loading ? "Sending...": "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
      <ToastContainer />
    </div>
  );
}
