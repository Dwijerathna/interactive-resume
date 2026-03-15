const projects = [
  {
    name: "Price Scraper",
    desc: "A Python tool that scrapes product prices from websites and tracks price changes over time.",
    tech: ["Python", "BeautifulSoup"],
    link: "https://github.com/Dwijerathna",
  },
  {
    name: "Mood Tracker",
    desc: "A web app to log and visualize your daily moods with a clean, minimal interface.",
    tech: ["HTML/CSS", "Tailwind", "JavaScript"],
    link: "https://github.com/Dwijerathna",
  },
  {
    name: "Interactive Resume",
    desc: "A resume that fights back — hover skills to see live demos of each technology.",
    tech: ["React", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="mb-16">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-gray-800 rounded-xl p-6 hover:border-white transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg group-hover:text-white">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                ↗
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 border border-gray-700 rounded-full text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
