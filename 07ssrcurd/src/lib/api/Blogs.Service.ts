// Get All Blogs Services
export async function fetchBlogs() {
  const res = await fetch("https://api.vercel.app/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}
