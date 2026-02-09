import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="pt-28 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-3">
          My <span className="text-blue-500">Resume</span>
        </h1>

        <p className="text-gray-400 mb-6">
          View or download my resume.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            View
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Download
          </a>
        </div>

        <iframe
          src="/resume.pdf"
          className="w-full h-[500px] rounded-md border border-gray-800"
          title="Resume Preview"
        />
      </div>
    </div>
  );
};

export default Resume;
