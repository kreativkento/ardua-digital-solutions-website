import { useEffect } from "react";
import { Link } from "react-router-dom";

const featured = [
  {
    seed: "arduawork1",
    title: "E-Commerce Strategy",
    alt: "Project 1 Thumbnail",
  },
  {
    seed: "arduawork2",
    title: "NGO Awareness Campaign",
    alt: "Project 2 Thumbnail",
  },
  {
    seed: "arduawork3",
    title: "Real Estate Web Dev",
    alt: "Project 3 Thumbnail",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Ardua Digital Solutions - Where Creativity Performs";
  }, []);

  return (
    <main className="flex-grow flex items-center justify-center p-8">
      <div className="text-center w-full min-w-0 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          &ldquo;Where Creativity Performs&rdquo;
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto">
          A creative and digital firm specializing in{" "}
          <strong>data-driven marketing</strong>, innovative production, and{" "}
          <strong>sustainable branding solutions</strong>.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-black text-white text-2xl px-12 py-4 font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition duration-300"
        >
          Start Your Project Today
        </Link>

        <div className="mt-20 border-t border-black pt-12">
          <h2 className="text-3xl font-bold mb-8">
            Featured Work: Creativity with Substance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <div key={item.seed} className="border-2 border-black p-4">
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/250`}
                  alt={item.alt}
                  className="w-full h-auto mb-3"
                />
                <p className="font-semibold text-lg">{item.title}</p>
              </div>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="mt-6 inline-block text-black font-bold border-b border-black hover:opacity-75 transition"
          >
            View All Case Studies →
          </Link>
        </div>
      </div>
    </main>
  );
}
