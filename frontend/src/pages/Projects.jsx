import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="pt-32 px-6 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          My <span className="text-blue-500">Projects</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              PicToCaption – AI Caption Generator
            </h3>
            <p className="text-gray-400 mb-4">
              AI-powered app that generates social-media-ready captions from images with secure authentication.
            </p>
            <a
              href="https://github.com/somashakerreddy"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Virtual Assistant – Generative AI
            </h3>
            <p className="text-gray-400 mb-4">
              MERN-based virtual assistant delivering intelligent, context-aware responses using Google Gemini API.
            </p>
            <a
              href="https://github.com/somashakerreddy"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Smart Expense Tracker
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack expense tracker with JWT authentication, categorized spending, and visual dashboards.
            </p>
            <a
              href="https://github.com/somashakerreddy"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
