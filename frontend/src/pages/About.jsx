import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-gray-950 to-blue-900 text-white relative overflow-hidden">
      <Navbar />

      {/* Optional subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="pt-32 px-6 md:px-20 max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400 animate-fadeIn">
          About <span className="text-green-400">Me</span>
        </h1>

        {/* Professional Summary */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg transition-all duration-700 animate-slideUp">
            I am a Computer Science undergraduate and a passionate web developer
            with hands-on experience in building modern MERN stack and AI-powered
            web applications.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg transition-all duration-700 delay-200 animate-slideUp">
            I specialize in <span className="text-blue-400 font-semibold">React.js</span>,{" "}
            <span className="text-blue-400 font-semibold">Node.js</span>,{" "}
            <span className="text-blue-400 font-semibold">Express.js</span>,{" "}
            <span className="text-blue-400 font-semibold">MongoDB</span>, REST APIs, and
            JWT authentication. I enjoy solving real-world problems and have
            solved 300+ Data Structures and Algorithms problems on LeetCode.
          </p>
        </div>

        {/* Achievements */}
        <div className="bg-blue-950 border border-blue-700 rounded-xl p-6 transition hover:shadow-xl hover:shadow-blue-500/50">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Secured 2nd Prize in a college-level Hackathon</li>
            <li>Solved 300+ DSA problems on LeetCode</li>
          </ul>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-15px); opacity: 1; }
        }
        .animate-bounce-slow { animation: bounce-slow 6s infinite; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 1s ease forwards; }
      `}</style>
    </div>
  );
};

export default About;
