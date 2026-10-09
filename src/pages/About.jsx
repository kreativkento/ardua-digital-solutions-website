import { useEffect } from "react";
import { Link } from "react-router-dom";

const pillars = [
  { title: "Clarity", text: "Design with purpose and precision." },
  { title: "Creativity", text: "Minimal yet powerful expressions." },
  { title: "Consistency", text: "Unified visuals and tone." },
  { title: "Performance", text: "Every design delivers measurable impact." },
];

const values = [
  {
    letter: "A",
    title: "Accountability",
    text: "We take ownership of our work and deliver results with transparency, responsibility, and integrity.",
  },
  {
    letter: "R",
    title: "Reliability",
    text: "We honor commitments, exceed expectations, and provide consistent quality.",
  },
  {
    letter: "D",
    title: "Drive for Excellence",
    text: "We are passionate innovators, continuously improving to meet client needs.",
  },
  {
    letter: "U",
    title: "Unity",
    text: "We collaborate with respect and teamwork, built through strong partnerships.",
  },
  {
    letter: "A",
    title: "Authenticity",
    text: "We stay true to our values—honest, ethical, and purpose-driven.",
  },
];

const team = [
  {
    seed: "eduardo",
    name: "Eduardo D. Empelis Jr.",
    role: "CEO/Managing Director",
  },
  {
    seed: "kent",
    name: "Kent Veloso",
    role: "Web Development & SEO",
  },
  {
    seed: "patlyn",
    name: "Patlyn Antonette Pañares",
    role: "Graphic Designer",
  },
  {
    seed: "xerces",
    name: "Xerces Gabriel Pagaw",
    role: "Videographer/Video Editor",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Ardua Digital Solutions";
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-8 py-16 flex-grow">
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        We Are Ardua Digital Solutions: Where Strategy Meets Substance
      </h1>

      <hr className="border-t-2 border-black my-8" />

      <section className="mb-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-black inline-block pb-2">
          Our Brand Pillars
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 border-2 border-black bg-gray-50 hover:bg-black hover:text-white transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-300 my-10" />

      <section className="grid md:grid-cols-2 gap-12 mb-20 pb-10">
        <div>
          <h2 className="text-3xl font-bold mb-3 border-b border-black inline-block pb-1">
            Our Mission
          </h2>
          <blockquote className="text-xl italic mt-4 border-l-4 border-black pl-4 text-gray-700">
            &ldquo;To <strong>empower businesses</strong> through strategic
            digital marketing solutions that drive <strong>measurable growth</strong>{" "}
            and long-term brand value.&rdquo;
          </blockquote>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3 border-b border-black inline-block pb-1">
            Our Vision
          </h2>
          <blockquote className="text-xl italic mt-4 border-l-4 border-black pl-4 text-gray-700">
            &ldquo;To become one of the{" "}
            <strong>most trusted digital marketing firms in the Philippines</strong>
            , recognized for innovative strategies and client success.&rdquo;
          </blockquote>
        </div>
      </section>

      <hr className="border-t border-gray-300 my-10" />

      <section className="mb-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-black inline-block pb-2">
          Our Core Values: A.R.D.U.A.
        </h2>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 border-2 border-black bg-white hover:bg-gray-100 transition duration-300"
            >
              <p className="text-5xl font-extrabold mb-2 leading-none">
                {value.letter}
              </p>
              <h3 className="text-xl font-semibold mb-1">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-300 my-10" />

      <section className="mb-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-black inline-block pb-2">
          Meet Our Expert Team
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.seed}
              className="p-4 border-2 border-black hover:shadow-2xl hover:shadow-black transition duration-300"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/300?grayscale`}
                alt={`${member.name} Photo`}
                className="w-full h-auto mb-4 object-cover border-b border-black pb-2"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t-4 border-black my-10" />

      <div className="text-center mt-16 p-12 bg-black text-white border-4 border-white shadow-2xl shadow-black">
        <h3 className="text-3xl font-bold mb-4">
          Partner with the team that performs with clarity and precision.
        </h3>
        <Link
          to="/contact"
          className="inline-block bg-white text-black text-xl px-10 py-3 font-bold uppercase tracking-wider border-2 border-white hover:bg-gray-200 transition duration-300"
        >
          Discuss Your Brand&apos;s Vision
        </Link>
      </div>
    </main>
  );
}
