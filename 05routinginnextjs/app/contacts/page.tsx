export default function Contact() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold">
            Contact
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Us
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Have a question or a project in mind? We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">contact@yourcompany.com</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                123 Startup Street, Tech City, USA
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
