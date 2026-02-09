const Hero = () => {
  return (
    <section className="pt-32 px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div className="animate-slideInLeft">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
  Hi, I’m a <span className="text-green-400">SomaShaker Reddy</span> 👋
</h2>

<p className="mb-6 text-green-300">
  Welcome to my portfolio, where I build modern, responsive, and user-focused web applications.
  <span className="text-white font-semibold"> React</span> and
  <span className="text-white font-semibold"> Tailwind CSS</span>.
</p>


        <div className="flex gap-4">
          <button className="px-6 py-3 bg-green-600 rounded-lg font-semibold hover:bg-blue-700 transition">
            Hire Me
          </button>

          <button className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Resume
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center animate-slideInRight">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full border-4 border-blue-600 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
