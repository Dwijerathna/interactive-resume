const experience = [
  {
    role: "Price Scraper",
    company: "Personal Project",
    year: "2024",
    desc: "Built a Python tool using BeautifulSoup to scrape and track product prices across websites.",
  },
  {
    role: "Mood Tracker",
    company: "Personal Project",
    year: "2024",
    desc: "Designed and built a web app to log and visualize daily moods using HTML, Tailwind and JavaScript.",
  },
];

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
        {experience.map((exp) => (
          <div
            key={exp.role}
            className="group border-l border-gray-800 pl-6 hover:border-white transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg group-hover:text-white">
                {exp.role}
              </h3>
              <span className="text-gray-500 text-sm font-mono">
                {exp.year}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
