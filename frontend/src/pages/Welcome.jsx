import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-center px-4 bg-gray-950">

      {/* Dark Blue Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 animate-gradient"></div>

      {/* Subtle Dark Blue Glow Orbs */}
      <div className="absolute w-80 h-80 bg-blue-800/20 rounded-full blur-3xl top-16 left-16 animate-float"></div>
      <div className="absolute w-96 h-96 bg-blue-900/20 rounded-full blur-3xl bottom-20 right-20 animate-floatSlow"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl animate-fadeScale">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          Welcome to my
          <span className="block text-blue-500 mt-2">
            Portfolio
          </span>
          <span className="block text-gray-300 text-xl md:text-2xl font-medium mt-3">
            showcasing my projects, skills, and passion for web development.
          </span>
        </h1>

        <button
          onClick={() => navigate("/home")}
          className="group mt-10 inline-flex items-center gap-3 px-8 py-4
          bg-blue-700 hover:bg-blue-800 rounded-full
          text-lg font-semibold text-white
          shadow-lg shadow-blue-900/30
          transition-all duration-300 hover:scale-105"
        >
          Explore Portfolio
          <span className="transform group-hover:translate-x-1 transition">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
