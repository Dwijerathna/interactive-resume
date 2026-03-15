import { useEffect, useRef } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function CursorTrail() {
  useEffect(() => {
    const dots = [];
    const numDots = 12;

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: fixed;
        width: ${8 - i * 0.5}px;
        height: ${8 - i * 0.5}px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.08};
        transition: transform 0.1s ease;
      `;
      document.body.appendChild(dot);
      dots.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      let x = mouseX;
      let y = mouseY;
      dots.forEach((dot) => {
        dot.el.style.left = x - dot.el.offsetWidth / 2 + "px";
        dot.el.style.top = y - dot.el.offsetHeight / 2 + "px";
        dot.x += (x - dot.x) * 0.3;
        dot.y += (y - dot.y) * 0.3;
        x = dot.x;
        y = dot.y;
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      dots.forEach((dot) => dot.el.remove());
    };
  }, []);

  return null;
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-3xl mx-auto">
      <CursorTrail />
      <FadeIn delay={0}>
        <Header />
      </FadeIn>
      <FadeIn delay={100}>
        <Experience />
      </FadeIn>
      <FadeIn delay={200}>
        <Education />
      </FadeIn>
      <FadeIn delay={300}>
        <Skills />
      </FadeIn>
      <FadeIn delay={400}>
        <Projects />
      </FadeIn>
      <FadeIn delay={500}>
        <Contact />
      </FadeIn>
    </main>
  );
}
