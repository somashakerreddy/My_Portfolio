import Navbar from "../components/Navbar";
import profileImg from "../assets/profile.png";
import { useEffect, useState } from "react";
import Skills from "../components/Skills";
const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // fade-in delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-950 to-green-950 animate-gradient-xy -z-10"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div
          className={`flex flex-col-reverse md:flex-row items-center gap-12 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1
              className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
            >
              Welcome I'm <span className="text-green-500">SOMA SHAKER REDDY</span>
            </h1>

            <p
              className={`text-gray-400 text-lg transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              I am a MERN Stack Developer focused on building modern, responsive, and
              user-friendly web applications using{" "}
              <span className="text-white font-semibold">MongoDB</span>,{" "}
              <span className="text-white font-semibold">Express.js</span>,{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Node.js</span>, and{" "}
              <span className="text-white font-semibold">Tailwind CSS</span>.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 font-semibold shadow-lg">
                Hire Me
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition transform hover:scale-105 font-semibold shadow-lg"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>

              <img
                src={profileImg}
                alt="Profile"
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full absolute animate-bounce-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 10s ease infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-15px); opacity: 1; }
        }

        .animate-bounce-slow {
          animation: bounce-slow 6s infinite;
        }
      `}</style>
      <Skills />
    </div>
  );
};

export default Home;
