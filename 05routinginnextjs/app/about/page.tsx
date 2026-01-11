export default function About() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6">
          About
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Us
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg">
          We are building modern, fast, and beautiful web experiences using the
          latest technologies. Our goal is to help people turn ideas into
          scalable digital products.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To make high-quality digital experiences accessible to everyone
              through modern web technology.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-400">
              We imagine a future where anyone can build powerful web
              applications without complexity.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-400">
              Simplicity, performance, and beautiful design are at the core of
              everything we create.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 rounded-xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Built with passion for the web
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use technologies like Next.js, Tailwind CSS, and modern React to
            build fast, scalable, and user-friendly applications.
          </p>
        </div>
      </div>
    </main>
  );
}
