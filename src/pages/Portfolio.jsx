import { useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    seed: "project1",
    alt: "Real Estate Project Image",
    title: "Luxury Real Estate Web & SEO",
    market: "Real Estate",
    solution:
      "Designed a minimalist website and implemented local SEO to capture high-intent leads.",
    results: [
      "50% increase in qualified inquiries within 3 months.",
      "Ranked #1 for 3 key local search terms.",
    ],
  },
  {
    seed: "project2",
    alt: "SME Project Image",
    title: "SME Social Media Management & Ads",
    market: "SMEs",
    solution:
      "Executed targeted advertising campaigns and consistent, high-quality social media management.",
    results: [
      "250% return on ad spend (ROAS) achieved.",
      "Grew social media engagement by 70%.",
    ],
  },
  {
    seed: "project3",
    alt: "NGO Project Image",
    title: "NGO Digital Strategy & Creative",
    market: "NGOs",
    solution:
      "Developed a compelling digital strategy and creative assets focused on unity and purpose.",
    results: [
      "Exceeded fundraising goal by 30% in Q4.",
      "Increased volunteer sign-ups by 45%.",
    ],
  },
];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio & Case Studies | Ardua Digital Solutions";
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-8 py-16 flex-grow">
      <h1 className="text-5xl font-extrabold mb-4">Our Work: Measurable Impact</h1>
      <p className="text-xl mb-12 text-gray-700">
        Showcasing strategic solutions for startups, SMEs, and local
        enterprises. We deliver growth-focused output.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <article key={project.seed} className="border-2 border-black p-6">
            <img
              src={`https://picsum.photos/seed/${project.seed}/700/400?grayscale`}
              alt={project.alt}
              className="w-full h-auto mb-6 object-cover border border-black"
            />
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg font-semibold mb-4 text-gray-800">
              Target Market: {project.market}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong> {project.solution}
            </p>
            <div className="bg-gray-100 p-4 border-l-4 border-black">
              <p className="font-bold">Results Delivered:</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-16 p-12 bg-black text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to See Results like These?</h3>
        <p className="mb-6">
          Let&apos;s build a custom strategy that delivers growth for your brand.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black text-xl px-10 py-3 font-bold uppercase tracking-wider border-2 border-white hover:bg-gray-200 transition duration-300"
        >
          Consult Our Experts Today
        </Link>
      </div>
    </main>
  );
}
