export default function Contact() {
  return (
    <div className="mb-16 border-t border-gray-800 pt-16">
      <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
        Get in touch
      </h2>
      <p className="text-gray-400 text-sm mb-8 max-w-md">
        Computer Science undergraduate seeking opportunities in software
        development. Quick learner with a strong foundation in coding and
        problem-solving.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href="mailto:dinithadamidu12@gmail.com"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="font-mono text-xs border border-gray-700 px-3 py-1 rounded-full group-hover:border-white transition-colors">
            email
          </span>
          <span className="text-sm">dinithadamidu12@gmail.com</span>
        </a>
        <a
          href="tel:+94778264843"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="font-mono text-xs border border-gray-700 px-3 py-1 rounded-full group-hover:border-white transition-colors">
            phone
          </span>
          <span className="text-sm">+94 77 826 4843</span>
        </a>
        <a
          href="https://github.com/Dwijerathna"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="font-mono text-xs border border-gray-700 px-3 py-1 rounded-full group-hover:border-white transition-colors">
            github
          </span>
          <span className="text-sm">github.com/Dwijerathna</span>
        </a>
        <a
          href="https://www.linkedin.com/in/dinithawijerathna-6a8626266"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="font-mono text-xs border border-gray-700 px-3 py-1 rounded-full group-hover:border-white transition-colors">
            linkedin
          </span>
          <span className="text-sm">Dinitha Wijerathna</span>
        </a>
      </div>
    </div>
  );
}
