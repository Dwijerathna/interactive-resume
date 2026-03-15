import { useState } from "react";

const skills = [
  { name: "HTML/CSS", demo: "css" },
  { name: "JavaScript", demo: "js" },
  { name: "React", demo: "react" },
  { name: "Python", demo: "python" },
  { name: "Problem Solving", demo: "problem" },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <div className="mb-16">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
        Skills — hover me
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setActive(skill.demo)}
            onMouseLeave={() => setActive(null)}
            className="px-5 py-3 border border-gray-700 rounded-full cursor-pointer hover:border-white transition-all duration-300 hover:bg-white hover:text-black font-mono text-sm"
          >
            {skill.name}
          </div>
        ))}
      </div>

      {active === "css" && (
        <div className="mt-6 p-4 border border-gray-800 rounded-lg overflow-hidden h-24 flex items-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-white rounded"
              style={{ animation: `spin ${0.5 + i * 0.2}s linear infinite` }}
            />
          ))}
          <style>{`@keyframes spin { from { transform: rotate(0deg) scale(1); } to { transform: rotate(360deg) scale(1.5); } }`}</style>
        </div>
      )}

      {active === "react" && (
        <div className="mt-6 p-4 border border-gray-800 rounded-lg font-mono text-green-400 text-sm">
          <p style={{ animation: "fadeIn 0.3s forwards", opacity: 0 }}>
            const App = () =&gt; {"{"}
          </p>
          <p
            className="ml-4"
            style={{ animation: "fadeIn 0.3s 0.3s forwards", opacity: 0 }}
          >
            return &lt;Resume /&gt;
          </p>
          <p style={{ animation: "fadeIn 0.3s 0.6s forwards", opacity: 0 }}>
            {"}"}
          </p>
          <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
        </div>
      )}

      {active === "js" && (
        <div className="mt-6 p-4 border border-gray-800 rounded-lg flex gap-1 items-end h-24">
          {[40, 70, 30, 90, 55, 75, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-yellow-400 rounded-t"
              style={{
                height: `${h}%`,
                animation: `grow 0.5s ${i * 0.1}s both`,
              }}
            />
          ))}
          <style>{`@keyframes grow { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }`}</style>
        </div>
      )}

      {active === "python" && (
        <div className="mt-6 p-4 border border-gray-800 rounded-lg font-mono text-blue-400 text-sm">
          <p style={{ animation: "fadeIn 0.3s forwards", opacity: 0 }}>
            def solve(problem):
          </p>
          <p
            className="ml-4"
            style={{ animation: "fadeIn 0.3s 0.3s forwards", opacity: 0 }}
          >
            solution = think(problem)
          </p>
          <p
            className="ml-4"
            style={{ animation: "fadeIn 0.3s 0.6s forwards", opacity: 0 }}
          >
            return solution
          </p>
          <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
        </div>
      )}

      {active === "problem" && (
        <div className="mt-6 p-4 border border-gray-800 rounded-lg flex gap-2 items-center h-24">
          {["?", "→", "✓"].map((sym, i) => (
            <div
              key={i}
              className="flex-1 border border-gray-700 rounded-lg h-16 flex items-center justify-center text-2xl"
              style={{ animation: `pop 0.3s ${i * 0.2}s both` }}
            >
              {sym}
            </div>
          ))}
          <style>{`@keyframes pop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
        </div>
      )}
    </div>
  );
}
