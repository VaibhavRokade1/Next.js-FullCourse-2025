import SplashCursor from "@/components/SplashCursor";
import { GetGlogs } from "./action";
import TestPage from "@/modules/test";

export default async function Home() {
  const blogs = await GetGlogs();

  return (
    <div className="">
      <TestPage />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        {/* <SplashCursor /> */}
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Latest Blogs
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Fresh thoughts, deep dives, and everything in between. Grab a chai
              and enjoy!
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                अजून blogs नाहीत रे भावा... लवकर लिही! ✍️
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog: any, index: number) => (
                <article
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                        {blog.category || "General"}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-3">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 flex-grow">
                      {blog.content}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          ✍️ {blog.author || "Anonymous"}
                        </span>

                        <time className="text-gray-500 dark:text-gray-400">
                          {new Date(blog.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
