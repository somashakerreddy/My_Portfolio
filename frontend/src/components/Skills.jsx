const skills = [
  { name: "MongoDB", color: "green-500" },
  { name: "Express.js", color: "gray-400" },
  { name: "React.js", color: "blue-500" },
  { name: "Node.js", color: "green-400" },
  { name: "Tailwind CSS", color: "teal-400" },
  { name: "REST APIs", color: "purple-500" },
  { name: "JWT Authentication", color: "yellow-400" },
];

const Skills = () => {
  return (
    <section className="mt-16 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-6 py-3 border border-gray-700 rounded-full text-${skill.color} font-semibold shadow-lg transform hover:scale-110 transition duration-300 cursor-pointer`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
