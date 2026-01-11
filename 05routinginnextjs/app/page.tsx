export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <div className="max-w-3xl px-6 text-center">
        <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          🚀 Launching Something Awesome
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Build Your Next
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Digital Experience
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          A modern platform designed to help you create fast, beautiful, and
          scalable web applications with ease.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-lg bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="rounded-lg border border-white/20 px-8 py-3 text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
