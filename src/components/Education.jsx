const education = [
  {
    degree: "BSc in Computer Science",
    school: "NSBM Green University",
    year: "2022 — Present",
    desc: "Year 3 undergraduate studying software engineering, algorithms and web development.",
  },
];

export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
        Education
      </h2>
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="group border-l border-gray-800 pl-6 hover:border-white transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg group-hover:text-white">
                {edu.degree}
              </h3>
              <span className="text-gray-500 text-sm font-mono">
                {edu.year}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">{edu.school}</p>
            <p className="text-gray-400 text-sm">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
