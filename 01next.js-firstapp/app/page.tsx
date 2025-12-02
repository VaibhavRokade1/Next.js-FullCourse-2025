export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-center my-5 text-4xl font-bold">Register Form</h1>
      <form className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto">
        <div className="mb-4">
          <div className="mb-1 font-semibold">First Name</div>
          <input type="text" className="w-full border rounded-sm p-2" />
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Last Name</div>
          <input type="text" className="w-full border rounded-sm p-2" />
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Email</div>
          <input type="email" className="w-full border rounded-sm p-2" />
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Password</div>
          <input type="password" className="w-full border rounded-sm p-2" />
        </div>

        <div className="mb-4">
          <div className="mb-1 font-semibold">Confirm Password</div>
          <input type="password" className="w-full border rounded-sm p-2" />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
