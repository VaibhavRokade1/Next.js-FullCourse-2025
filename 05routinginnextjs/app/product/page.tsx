export default function Product() {
  const products = [
    {
      id: "PID-001",
      name: "Starter Pack",
      price: "$19",
      desc: "Perfect for individuals and small projects.",
    },
    {
      id: "PID-002",
      name: "Pro Pack",
      price: "$49",
      desc: "Best for growing teams and production apps.",
    },
    {
      id: "PID-003",
      name: "Enterprise",
      price: "$99",
      desc: "Advanced features for large scale systems.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h1>
          <p className="mt-6 text-gray-400">
            Choose the perfect plan that fits your needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition"
            >
              {/* Product ID */}
              <span className="absolute top-4 right-4 text-xs bg-white/10 px-3 py-1 rounded-full">
                {product.id}
              </span>

              {/* Product Name */}
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>

              {/* Price */}
              <p className="text-4xl font-bold mb-4">
                {product.price}
                <span className="text-lg text-gray-400"> / month</span>
              </p>

              {/* Description */}
              <p className="text-gray-400 mb-8">{product.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 rounded-lg bg-white text-black py-3 font-medium hover:bg-gray-200 transition">
                  Buy Now
                </button>
                <button className="flex-1 rounded-lg border border-white/20 py-3 hover:bg-white/10 transition">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-gray-400 mb-6">
            We offer tailored plans for large teams and enterprises.
          </p>
          <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-3 font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </main>
  );
}
