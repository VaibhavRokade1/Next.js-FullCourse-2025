export default function Services() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            We provide high-quality digital services to help you grow and scale
            your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Web Development",
              desc: "Modern, fast, and scalable websites built with Next.js and React.",
            },
            {
              title: "UI / UX Design",
              desc: "Beautiful and intuitive interfaces designed for real users.",
            },
            {
              title: "E-Commerce",
              desc: "High-performance online stores with secure payment systems.",
            },
            {
              title: "Cloud Deployment",
              desc: "Deploy and scale your applications on cloud platforms.",
            },
            {
              title: "SEO Optimization",
              desc: "Rank higher on Google and attract more organic traffic.",
            },
            {
              title: "Maintenance & Support",
              desc: "Ongoing updates, monitoring, and performance optimization.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why choose our services?
            </h2>
            <p className="text-gray-400 mb-6">
              We focus on delivering high-quality, secure, and scalable
              solutions that help your business grow in the digital world.
            </p>
            <button className="rounded-lg bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition">
              Get a Free Quote
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-10 text-center">
            <div className="h-48 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
              Our Expertise
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
