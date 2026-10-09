import { useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Strategy",
    body: "Data-driven planning to align your marketing efforts with core business objectives.",
  },
  {
    title: "Creative Services",
    body: (
      <>
        Innovative production that balances <strong>Creativity</strong> with{" "}
        <strong>Clarity</strong>, ensuring minimal yet powerful expressions.
      </>
    ),
  },
  {
    title: "Advertising Campaigns",
    body: "Targeted, growth-focused output designed for strong competition and scalable results.",
  },
  {
    title: "Social Media Management",
    body: "Consistent, professional, and strategic presence across platforms like Facebook, Instagram, Youtube, and Tiktok.",
  },
  {
    title: "Web Development & SEO",
    body: "Building minimalist, high-performing websites optimized for search engines, led by our expert team.",
  },
  {
    title: "Training & Consultancy",
    body: "Empowering your team through seminars, webinars, and specialized consultancy.",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Services | Ardua Digital Solutions";
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-8 py-16 flex-grow">
      <h1 className="text-5xl font-extrabold mb-10">Our Digital Solutions</h1>
      <p className="text-xl mb-12">
        We empower businesses through strategic digital marketing solutions that
        drive <strong>measurable growth</strong> and long-term brand value.
      </p>

      <div className="space-y-12">
        {services.map((service, index) => (
          <section
            key={service.title}
            className={
              index === services.length - 1
                ? "pb-8"
                : "border-b border-black pb-8"
            }
          >
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-700">{service.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-100 p-10 border-2 border-black">
        <h3 className="text-3xl font-bold mb-4">Ready to Perform?</h3>
        <p className="mb-6">
          Explore our custom strategies and affordable packages
          (P5,000-P100,000+) designed for your business type.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-white text-xl px-10 py-3 font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition duration-300"
        >
          Request a Custom Strategy
        </Link>
      </div>
    </main>
  );
}
