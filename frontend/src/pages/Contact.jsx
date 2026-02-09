import Navbar from "../components/Navbar";
import { FaEnvelope, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <Navbar />

      <div className="pt-32 px-6 md:px-20 max-w-3xl mx-auto text-center">
        <h1
          className={`text-4xl font-bold mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Contact <span className="text-blue-500">Me</span>
        </h1>

        <p
          className={`text-gray-400 mb-10 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          I’m always open to internships, collaborations, and exciting
          opportunities. Feel free to connect with me.
        </p>

        {/* Contact Info */}
        <div
          className={`mb-12 space-y-5 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-gray-300">
            Let’s connect professionally or discuss opportunities 👇
          </p>

          <div className="flex flex-col items-center gap-4 text-gray-400">
            <a
              href="mailto:thallapureddysomashakerreddy5@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg hover:bg-blue-900 transition w-full md:w-auto justify-center"
            >
              <FaEnvelope className="text-blue-400" />
              thallapureddysomashakerreddy5@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/somashekar14"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg hover:bg-blue-900 transition w-full md:w-auto justify-center"
            >
              <FaLinkedin className="text-blue-500" />
              linkedin.com/in/somashekar14
            </a>

            <div className="flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg w-full md:w-auto justify-center">
              <FaPhoneAlt className="text-green-400" />
              <span>+91 8555833136</span>
            </div>

            <a
              href="https://www.instagram.com/s__s__r14?igsh=NXp1bXBxNjZwNXQ0"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg hover:bg-pink-700 transition w-full md:w-auto justify-center"
            >
              <FaInstagram className="text-pink-500" />
              @s__s__r14
            </a>
          </div>
        </div>

        {/* Optional Contact Form */}
        {/* You can add your form here if needed */}
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
