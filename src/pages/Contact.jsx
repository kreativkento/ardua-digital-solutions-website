import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Ardua Digital Solutions";
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <main className="max-w-4xl mx-auto p-8 py-16 flex-grow">
      <h1 className="text-5xl font-extrabold mb-4">
        Let&apos;s Drive Measurable Growth
      </h1>
      <p className="text-xl mb-12 text-gray-700">
        Reach out for a discussion. We offer custom strategies, affordable
        packages, and growth-focused output.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-6 border border-black">
          <h2 className="text-3xl font-bold mb-6">Start the Conversation</h2>

          {submitted && (
            <p
              className="mb-6 border border-black bg-gray-100 p-4 text-sm"
              role="status"
            >
              Thanks for reaching out. We received your message and will follow
              up with a proposal.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-black p-2 bg-white focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-black p-2 bg-white focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Interested Service
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="mt-1 block w-full border border-black p-2 bg-white focus:ring-black focus:border-black"
              >
                <option value="">Select a Service...</option>
                <option value="digital-strategy">Digital Strategy</option>
                <option value="web-seo">Web Development & SEO</option>
                <option value="advertising">Advertising Campaigns</option>
                <option value="creative">Creative Services</option>
                <option value="training">Training & Consultancy</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Project Details / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-black p-2 bg-white focus:ring-black focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white text-xl px-4 py-3 font-bold uppercase tracking-wider border-2 border-black hover:bg-gray-800 transition duration-300"
            >
              Submit and Get a Proposal
            </button>
          </form>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6">Our Location & Channels</h2>
          <div className="space-y-6">
            <p className="text-lg font-semibold">Head Office:</p>
            <p className="text-gray-700">Cebu, Philippines</p>
          </div>
          <div className="space-y-6 mt-8">
            <p className="text-lg font-semibold">Lead Generation Channels:</p>
            <p className="text-gray-700">
              Connect with us via Facebook, Instagram, Youtube, and Tiktok, or
              through conference, convention, and referral programs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
