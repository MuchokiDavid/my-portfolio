import React from "react";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <hr className="border-t border-gray-500 dark:border-gray-400" />
      <footer>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            Let's connect! Feel free to reach out via{" "}
            <a href="mailto:dmmuchoki7@gmail.com" className="text-white">Email</a> or <a href="https://wa.me/254723018212" className="text-white">WhatsApp</a> or find me on{" "}
            <a
              href="https://github.com/MuchokiDavid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75 hover:underline"
            >
              GitHub
            </a>
            .
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#education"
              >
                Education
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#experience"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="https://docs.google.com/document/d/14p8YYtz8pOwzfFtClguf9gudgfU4y2ZXHbF-cx-08NA/edit?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="https://linkedin.com/in/david-muchoki"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-6 h-6 text-blue-500" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/MuchokiDavid"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/254723018212"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp className="w-6 h-6 text-green-600" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/@davedmunuhe"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">X</span>
                <FaXTwitter className="w-6 h-6 text-white" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6 text-blue-400" />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6 text-pink-600" />
              </a>
            </li>
          </ul>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; David Muchoki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
