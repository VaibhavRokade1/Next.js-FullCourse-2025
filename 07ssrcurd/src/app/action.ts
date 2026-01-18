"use server";
import { fetchBlogs } from "@/lib/api/Blogs.Service";
export const GetGlogs = async () => {
  const blogs = await fetchBlogs();
  return blogs;
};
